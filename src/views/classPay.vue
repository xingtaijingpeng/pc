<template>
    <div>
        <logo></logo>


        <div class="content center-box">
            <ul class="tab-box tab-box-top">
                <li class="choose" @click="$router.push('/PersonalClass')">课程购买</li>
            </ul>
            <div class="personal">
                <a-row :gutter="[10,30]" type="flex" align="middle" justify="space-around">
                    <a-col :xs="24" :sm="6" :md="6">
                        <img :src="detail.cover" width="100%" alt="">
                    </a-col>
                    <a-col :xs="24" :sm="18" :md="18">
                        <h1>{{detail.title}}</h1>
                        <div class="font">
                            <!--{{detail.description}}-->
                        </div>
                        <div style="margin-top: 20px">
                            <span class="">课程类型：{{detail.category}}</span>
                        </div>
                        <div class="personal-positionA payBut">
                            <div>
                                实付：<span>￥{{detail.price}}</span>
                            </div>
                            <div class="hui">
                                原价：￥{{detail.old_price}}
                            </div>

                        </div>
                        <!--<div class="personal-positionA but-xx but2">立即学习</div>-->
                    </a-col>
                </a-row>
            </div>
            <div style="margin-top: 35px; border-top: 1px solid #ccc;"></div>
            <div class="yhq">
                <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
                    <a-form-model-item label="优惠券">
                        <a-select v-model="form.region" placeholder="请选取你的优惠券">
                            <a-select-option value="无优惠券">
                                无优惠券
                            </a-select-option>
                        </a-select>
                    </a-form-model-item>
                </a-form-model>
            </div>
            <div>共1件商品，商品总额：￥{{detail.price}}优惠折扣：￥0应付：￥{{detail.price}}</div>
            <div class="pay">￥<span>{{detail.price}}</span></div>

            <div style="overflow: hidden">
                <template v-if="$store.state.app.DEVICE == 'mobile' && isWeiXin()">
                    <div class="payBut2" @click="userbuy2">微信支付</div>
                </template>
                <template v-else>
                    <div class="payBut2" @click="userbuy(1)">支付宝支付</div>
                    <div class="payBut2" @click="userbuy(2)">微信支付</div>
                </template>
            </div>



        </div>

        <Footer></Footer>


        <a-modal title="微信扫码支付" v-model="visible" style="text-align: center;" :footer="null" @cancel="zhifucancel">
            <vue-qr
                    :logoSrc="config.logo"
                    :text="config.value"
                    :size="250"
                    :margin="0"
            ></vue-qr>
        </a-modal>

    </div>

</template>

<script>

	import '../assets/css/common.css'
    import Logo from '@/components/Logo'
    import ListFont from '@/components/ListFont'
    import Footer from '@/components/Footer'
    import LittleNav from '@/components/LittleNav'
    import Aaaa from '@/components/Aaaa'
    import { Empty } from 'ant-design-vue';


    import moment from 'moment';
    import VueQr from 'vue-qr';
    import wx from 'weixin-js-sdk'

    export default {
        name: 'Home',
        beforeCreate() {
            this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
        },
        data(){
            return {
                detail: [],
                moment,
                /* 组件  */
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                form: {
                    name: '',
                    sex: 1,
                    qianming: '',
                    real_name: '',
                    real_num: '',
                    address: '',
                },
                visible:false,
                config:{
                    value: '',
                    logo: 'http://www.tubojiaoyu.com/static/logo.png'
                },
                timer: null,
                paytype:2,
            }
        },
        components: {
            Logo,ListFont,Footer,LittleNav,VueQr
        },
        mounted(){
            let _this = this;
            if(_this.$route.params.id){
                axios.post('article/detail/'+_this.$route.params.id,{}).then((response) => {
                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    this.detail = response.data;
                });
            }
        },
        methods: {
            zhifucancel(){
                clearInterval(this.timer);
            },
            isWeiXin () {
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.indexOf('micromessenger') > -1) {
                    return true; // 是微信端
                } else {
                    return false;
                }
            },
            userbuy2(){
                axios.post('order/make2',{
                    type: 1,
                    openid: localStorage.getItem('openid'),
                    good_id: this.$route.params.id
                }).then((response) => {
                    let data = response.data.config;
                    //调取微信支付
                    WeixinJSBridge.invoke(
                        'getBrandWCPayRequest', {
                            appId:data.appId,
                            timeStamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                            nonceStr: data.nonceStr, // 支付签名随机串，不长于 32
                            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                            signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                            paySign: data.paySign, // 支付签名
                        },
                        function(res){
                            if(res.err_msg == "get_brand_wcpay_request:ok" ){
                                window.history.go(-1);
                            }
                        }
                    );
                });
            },
            userbuy(paytype = 1){
                this.checkbuy((response)=>{
                    if(paytype == 2){
                        //微信
                        axios.post('order/make',{
                            type: 1,
                            good_id: this.$route.params.id
                        }).then((response) => {
                            //弹框扫码
                            this.visible = true;
                            this.config.value=response.data.url

                            //开定时器
                            this.timer = setInterval(()=>{
                                axios.post('order/check',{
                                    serial: response.data.ordTransLog.serial
                                }).then((response) => {
                                    if(response.status==1){
                                        this.zhifucancel();
                                        window.history.go(-1);
                                    }
                                });
                            },2000)
                        });
                    }else{
                        //支付宝
                        axios.post('order/make',{
                            type: 2,
                            good_id: this.$route.params.id
                        }).then((response) => {
                            window.location.href=response.data.url;
                        });
                    }
                });
            },
            checkbuy(fun){
                //判断是否购买
                let _this = this;
                axios.post('hasbuy/'+_this.$route.params.id).then((response) => {
                    fun(response);
                });
            }
        }
    }
</script>


<style scoped>
    .tab-box-top{
        margin-top: 50px;
    }
    .mobile .tab-box-top{
        margin-top: 10px;
    }
    .payBut{
        right: 15px;
        bottom: 0;
        color:#f31111;
     }
    .payBut span{
        display: inline;
        right: 0;
        font-weight: normal;
        font-size: 22px;
     }
    .payBut .hui{
        color: #999;
        text-decoration:line-through;
     }
    .yhq{
        width: 50%;
        margin-left: -48px;
        padding-top: 80px;
    }
    .mobile .yhq{
        width: 100%;
        margin-left: 0px;
    }
    .pay{
        color: #f31111;
        margin-bottom: 20px;
        margin-top: 10px;
    }
    .pay span{
        font-size: 22px;
    }
    .payBut2{
        width: 100px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-radius: 5px;
        color: #fff;
        background: #2d78f4;
        float: left;
        margin-right: 15px;
        cursor: pointer;
    }
</style>
