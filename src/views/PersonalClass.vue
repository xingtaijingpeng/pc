<template>
    <div>
        <logo></logo>


        <div class="content">
            <a-row :gutter="[26,26]">
                <a-col :xs="24" :sm="24" :md="6">
                    <littleNav :choose="1"></littleNav>
                </a-col>

                <a-col :xs="24" :sm="24" :md="18">
                    <ul class="tab-box">
                        <li class="choose" @click="$router.push('/PersonalClass')">我的课程</li>
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
                                <div class="personal-positionA but-xx but1">立即学习</div>
                                <!--<div class="personal-positionA but-xx but2">立即学习</div>-->
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


</style>
