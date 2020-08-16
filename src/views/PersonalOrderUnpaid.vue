<template>
    <div>
        <logo></logo>
        <!--<div class="Personal-banner" ></div>-->

        <div class="content center-box">
            <a-row :gutter="[26,0]">
                <a-col :xs="24" :sm="24" :md="6">
                    <littleNav :choose="2"></littleNav>
                </a-col>

                <a-col :xs="24" :sm="24" :md="18">
					<aaaa></aaaa>
					<ul class="tab-box" style="margin-top: 0px;">
                        <li @click="$router.push('/PersonalOrder')">已支付</li>
                        <li class="choose" @click="$router.push('/PersonalOrderUnpaid')" >未支付</li>
                    </ul>
                    <div class="personal">
                    <a-row :gutter="[10,30]" type="flex" align="middle" justify="space-around" v-for="item in lists">
                        <a-col :xs="24" :sm="6" :md="6">
                            <img :src="item.good_info.cover" width="100%" alt="">
                        </a-col>
                        <a-col :xs="24" :sm="18" :md="18">
                            <h1>{{item.good_info.title}}</h1>
                            <div class="font">订单号：{{item.serial}}</div>
                            <div style="margin-top: 20px">
                                <span class="">支付价格：<b class="red">￥{{item.price}}</b> {{item.is_fenqi==1?'( 分期 )':''}}</span>
                                <span class="time">下单时间：{{item.created_at}}</span>
                            </div>
                            <template v-if="$store.state.app.DEVICE == 'mobile' && isWeiXin()">
                                <div class="personal-positionA but-xx but2 but-blue" @click="wxpay2(item.id)">微信支付</div>

                            </template>
                            <template v-else>
                                <div class="personal-positionA but-xx but1 but-blue" @click="alipay(item.id)">支付宝支付</div>
                                <div class="personal-positionA but-xx but2 but-blue" @click="wxpay(item.id)">微信支付</div>
                            </template>
                            <a-popconfirm
									title="确定删除该订单吗?"
									cancelText="取消"
									okText="确定"
									@confirm="() => onDelete(item.id)"
							>
								<div class="delete"></div>
							</a-popconfirm>
                        </a-col>
                    </a-row>
                        <a-empty v-if="!lists.length" :image="simpleImage" style="margin-top: 150px;" description="暂无数据" />
                </div>

                </a-col>
            </a-row>
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
// https://www.antdv.com/components/radio-cn/
	import '../assets/css/common.css'
    import Logo from '@/components/Logo'
    import ListFont from '@/components/ListFont'
    import Footer from '@/components/Footer'
    import LittleNav from '@/components/LittleNav'
    import { Empty } from 'ant-design-vue';
	import Aaaa from '@/components/Aaaa'
	import VueQr from 'vue-qr';
    import wx from 'weixin-js-sdk'


    export default {
        name: 'Home',
        beforeCreate() {
            this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
        },
        data(){
            return {
                lists: [],
                visible:false,
                config:{
                    value: '',
                    logo: 'http://www.tubojiaoyu.com/static/logo.png'
                },
                timer: null,
            }
        },
        components: {
            Logo,ListFont,Footer,LittleNav,Aaaa,VueQr
        },
        mounted(){
            this.list()
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
            onDelete(id){
                axios.post('order/delete',{
                    id: id
                }).then((response) => {
                    if(!response.status){
                        return _this.$message.error(response.message);
                    }
                    this.list();
                });
			},
            list(){
                let _this = this;
                axios.post('user/goods',{
                    status: 1
                }).then((response) => {
                    if(!response.status){
                        return _this.$message.error(response.message);
                    }
                    _this.lists = response.data
                });
            },
            alipay(orderid){
                axios.post('order/repay',{
                    orderid: orderid,
					type: 2
                }).then((response) => {
                    if(!response.status){
                        return _this.$message.error(response.message);
                    }
                    window.location.href = response.data.url;
                });
			},
            wxpay2(orderid){
                axios.post('order/repay2',{
                    orderid: orderid,
                    openid: localStorage.getItem('openid'),
                    type: 1
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
            wxpay(orderid){
                let _this = this;
                axios.post('order/repay',{
                    orderid: orderid,
                    type: 1
                }).then((response) => {
                    if(!response.status){
                        return _this.$message.error(response.message);
                    }
					//弹框扫码
                    this.visible = true;
                    this.config.value=response.data.url

                    //开定时器
                    this.timer = setInterval(()=>{
                        axios.post('order/check',{
                            serial: response.data.ordTransLog.serial
                        }).then((response) => {
                            if(response.status==1){
                                _this.$message.success('支付成功');
                                setTimeout(()=>{
                                    window.location.reload();

                                },1500)
                            }
                        });
                    },2000)
                });
			}
        }
    }
</script>


<style scoped>


</style>
