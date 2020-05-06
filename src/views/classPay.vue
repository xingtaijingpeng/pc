<template>
    <div>
        <logo></logo>


        <div class="content center-box">
            <ul class="tab-box tab-box-top">
                <li class="choose" @click="$router.push('/PersonalClass')">课程购买</li>
            </ul>
            <div class="personal">
                <a-row :gutter="[10,30]" type="flex" align="middle" justify="space-around" v-for="item in lists">
                    <a-col :xs="24" :sm="6" :md="6">
                        <img :src="item.good_info.cover" width="100%" alt="">
                    </a-col>
                    <a-col :xs="24" :sm="18" :md="18">
                        <h1>{{item.good_info.title}}</h1>
                        <div class="font">
                            {{item.good_info.description}}
                        </div>
                        <div style="margin-top: 20px">
                            <span class="">课程类型：{{item.good_info.category}}</span>
                            <span class="time">购买时间：{{item.payed_at}}</span>
                        </div>
                        <div class="personal-positionA payBut">实付：<br/><span>￥123456</span></div>
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
                    <a-empty v-if="!lists.length" :image="simpleImage" style="margin-top: 150px;" description="暂无数据" />
                </a-form-model>
            </div>
            <div>共1件商品，商品总额：优惠折扣：应付：</div>
            <div class="pay">￥<span>123456</span></div>
            <div style="overflow: hidden">
                <div class="payBut2">支付宝支付</div>
                <div class="payBut2">微信支付</div>
            </div>



        </div>

        <Footer></Footer>
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

    export default {
        name: 'Home',
        beforeCreate() {
            this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
        },
        data(){
            return {
                lists: [],
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
            }
        },
        components: {
            Logo,ListFont,Footer,LittleNav
        },
        mounted(){
            this.list()
        },
        methods: {
            list(){
                let _this = this;
                axios.post('user/goods',{
                    status: 2
                }).then((response) => {
                    if(!response.status){
                        return _this.$message.error(response.message);
                    }
                    _this.lists = response.data
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
        width: 100px;
        right: 0;
        bottom: 0;
        color:#f31111;
        font-weight: bold;
     }
    .payBut span{
        right: 0;
        font-weight: normal;
        font-size: 22px;
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
