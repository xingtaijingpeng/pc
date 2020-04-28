<template>
    <div>
        <logo></logo>
        <!--<div class="Personal-banner" ></div>-->

        <div class="content">
            <a-row :gutter="[26,26]">
                <a-col :xs="24" :sm="24" :md="6">
                    <littleNav :choose="2"></littleNav>
                </a-col>

                <a-col :xs="24" :sm="24" :md="18">
					<aaaa></aaaa>
					<ul class="tab-box" style="margin-top: 0px;">
                        <li class="choose" @click="$router.push('/PersonalOrder')">已支付</li>
                        <li @click="$router.push('/PersonalOrderUnpaid')" >未支付</li>
                    </ul>
                    <div class="personal">
                        <a-row :gutter="[10,30]" type="flex" align="middle" justify="space-around" v-for="item in lists">
                            <a-col :xs="24" :sm="6" :md="6">
                                <img :src="item.good_info.cover" width="100%" alt="">
                            </a-col>
                            <a-col :xs="24" :sm="18" :md="18">
                                <h1>{{item.good_info.title}}</h1>
                                <div class="aaaaa">&nbsp;</div>
                                <div>
                                    <span class="">支付价格：300元</span>
                                    <span class="time">支付时间：2019-03-11</span>
                                </div>
                                <div class="personal-positionA but-xx but1" @click="$router.push('/ClassDetails/'+item.good_id)">立即学习</div>
                                <div class="personal-positionA but-xx but2 but-hui">已支付</div>
                            </a-col>
                        </a-row>
                    </div>
                    <a-empty v-if="!lists.length" :image="simpleImage" style="margin-top: 150px;" description="暂无数据" />


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
import Aaaa from '@/components/Aaaa'

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
            Logo,ListFont,Footer,LittleNav,Aaaa
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
    .aaaaa{
        line-height: 40px;
        height:40px
    }

    .mobile .aaaaa{
        display: none !important;
        line-height: 0px !important;
        height:0px !important;
    }

</style>
