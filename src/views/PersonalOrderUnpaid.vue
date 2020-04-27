<template>
    <div>
        <logo></logo>
        <div class="Personal-banner" ></div>

        <div class="content">
            <a-row :gutter="[26,26]">
                <a-col :xs="24" :sm="24" :md="6">
                    <littleNav :choose="2"></littleNav>
                </a-col>

                <a-col :xs="24" :sm="24" :md="18">
                    <ul class="tab-box">
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
                                <span class="">支付价格：<b class="red">￥{{item.price}}</b></span>
                                <span class="time">下单时间：{{item.created_at}}</span>
                            </div>
                            <div class="personal-positionA but-xx but1 but-blue" @click="alipay(item.id)">支付宝支付</div>
                            <div class="personal-positionA but-xx but2 but-blue">微信支付</div>
                            <div class="delete"></div>
                        </a-col>
                    </a-row>
                        <a-empty v-if="!lists.length" :image="simpleImage" style="margin-top: 150px;" description="暂无数据" />
                </div>

                </a-col>
            </a-row>
        </div>

        <Footer></Footer>
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

    export default {
        name: 'Home',
        beforeCreate() {
            this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
        },
        data(){
            return {
                lists: []
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
                    orderid: orderid
                }).then((response) => {
                    if(!response.status){
                        return _this.$message.error(response.message);
                    }
                    window.location.href = response.data.url;
                });
			}
        }
    }
</script>


<style scoped>


</style>
