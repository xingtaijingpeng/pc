<template>
    <div>
        <logo class="nav" choose="1"></logo>
        <div class="dl" v-if="device != 'mobile'">
            <!-- 登录 -->
            <div class="dlHead">
                <img :src="imageUrl" width="100%"  alt="">
            </div>
            <div class="font">欢迎来到图博教育！</div>
            <template v-if="mobile">
                <div class="but2" style="border: none;">{{mobile}}</div>
                <div class="but" @click="tututu">退出登录</div>
            </template>
            <template v-else>
                <div class="but2" @click="tozhuce('login')">学员登录</div>
                <div class="but" @click="tozhuce('register')">免费注册</div>
            </template>
            <ul>
                <li @click="$router.push('/PersonalOrder')">
                    <span>
                        <img src="/static/dl-img1.png" width="28"  alt="">
                    </span>
                    <span>订单</span>
                </li>
                <li @click="$router.push('/PersonalClass')">
                    <span>
                        <img src="/static/dl-img2.png" width="25"  alt="">
                    </span>
                    <span>课程</span>
                </li>
                <li @click="$router.push('/PersonalMessage')">
                    <span>
                        <img src="/static/dl-img3.png" width="30"  alt="">
                    </span>
                    <span>消息</span>
                </li>
            </ul>
            <!-- 结束 -->
        </div>

        <!-- banner -->
        <a-carousel arrows :autoplay="true">
            <div
                    slot="prevArrow"
                    slot-scope="props"
                    class="custom-slick-arrow"
                    style="left: 10px;zIndex: 1"
            >
                <a-icon type="left-circle" />
            </div>
            <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
                <a-icon type="right-circle" />
            </div>
            <template v-if="base">
                <div class="banner" v-for="item in base.banner"><img :src="item.url" style="height: 100%" /></div>
            </template>
        </a-carousel>


        <!-- ddd -->
        <div class="content">
            <!-- 精选课程 -->
            <div class="title" v-if="hot.length">
                <img src="/static/index-title.png" alt="">
            </div>
            <a-row :gutter="[26,26]">
                <template v-for="item in hot">
                    <a-col :xs="24" :sm="12" :md="8">
                        <list-font
                            :id="item.id"
                            :cover="item.cover"
                            :title="item.category"
                            :price="item.price"
                            :oldprice="item.old_price"
                        ></list-font>
                    </a-col>
                </template>
            </a-row>
            <!-- 最新上线 -->
            <div class="title" v-if="videos.length"><img src="/static/index-title2.png" alt=""></div>
            <a-row :gutter="[26,26]">
                <template v-for="item in videos">
                    <a-col :xs="24" :sm="12" :md="6">
                        <list-font
                                :id="item.id"
                                :cover="item.cover"
                                :title="item.category"
                                :price="item.price"
                                :oldprice="item.old_price"
                        ></list-font>
                    </a-col>
                </template>
            </a-row>
            <!-- 新闻咨询 -->
            <div class="title" v-if="news.length"><img src="/static/index-title3.png" alt=""></div>
            <div class="news">
                <template v-for="item in news">
                    <a-row :gutter="[26,26]">
                        <a-col :xs="24" :sm="24" :md="5">
                            <img :src="item.cover" width="100%" alt="" @click="todetail(item.id)">
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="19">
                            <h1>{{item.title}}</h1>
                            <div class="time" style="visibility: hidden;">----{{item.created_at}}</div>
                            <div class="font">
                                {{item.description}}
                            </div>
                        </a-col>
                    </a-row>
                </template>
            </div>
        </div>
		<br/>
		<br/>
		<br/>
		<img src="/static/22222222.jpg" width="100%" />
		<img src="/static/33333333.png" width="100%" />
		<br/>
		<br/>
		<br/>
		<img src="/static/11111111.jpg" style="display: block; margin: 0 auto;max-width: 1200px; width: 100%;" />

        <Footer :choose="1"></Footer>
    </div>

</template>

<script>
// https://www.antdv.com/components/radio-cn/
	import '../assets/css/common.css'
    import Logo from '@/components/Logo'
    import ListFont from '@/components/ListFont'
    import Footer from '@/components/Footer'
    import { mapState } from 'vuex'

    export default {
        name: 'Home',
        data(){
            return {
                hot: [],
                videos: [],
                news: [],
                imageUrl: 'static/head-icon.png',
                mobile:''
            }
        },
        computed: {
            ...mapState({
                device: state => state.app.DEVICE,
                base: state => state.app.BASE,
            }),
        },
        components: {
            Logo,ListFont,Footer
        },
        mounted(){
            //精选视频
            axios.post('article/index',{
                guard: 'video',
                pageSize: 3,
                hot: 1
            }).then((response) => {
                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.hot = response.data;
            });
            //最新视频
            axios.post('article/index',{
                guard: 'video',
                pageSize: 999,
                order: 'created_at',
                order_type: 'DESC',
            }).then((response) => {

                if(!response.status){
                    return this.$message.error(response.message);
                }
                let cateids = [];
                for(var i in response.data){
                    if(cateids.indexOf(response.data[i].category_id) == -1 && cateids.length <= 6){
                        cateids.push(response.data[i].category_id)
                        this.videos.push(response.data[i])
					}
				}
            });
            //最新文章
            axios.post('article/index',{
                guard: 'article',
                pageSize: 6,
                order: 'created_at',
                order_type: 'DESC',
            }).then((response) => {

                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.news = response.data;
            });

            axios.post('userinfo2').then((response) => {
                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.mobile = response.data.mobile
                this.imageUrl = response.data.avatar
                if(!response.data.name || !response.data.address){
                    this.jump('/PersonalSetCenter');
                }
            });

        },
        methods: {
            tututu(){
                localStorage.clear();
                sessionStorage.clear();
                window.location.reload();
            },
            todetail: function (id) {
                this.$router.push('/newsDetails/'+id)
            },
            tozhuce(type='login'){
                this.$store.commit('app/setLogin',true);
                this.$store.commit('app/setLoginType',type);
            },
        }
    }
</script>


<style scoped>
    .dl{
        position: absolute;
        top:230px;
        right:180px;
        width: 260px;
        background: #fff;
        z-index: 1;
        border-radius: 5px;
        padding: 20px 25px;
    }
    .dl>.font{
        margin-top: 5px;
        text-align: center!important;
    }
    .dlHead{
        width: 100px;
        height: 100px;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 50%;
    }
    .but{
        color: #fff;
        background: #ef1010;
        padding: 6px;
        text-align: center;
        border-radius: 5px;
        margin-top: 10px;
        cursor: pointer;
    }
    .but2{
        color: #ef1010;
        border:1px solid #ef1010;
        padding: 6px;
        text-align: center;
        border-radius: 5px;
        margin-top: 10px;
        cursor: pointer;
    }
    .dl ul{
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }
    .dl li{
        text-align: center;
        cursor: pointer;
    }
    .dl span:first-child{
        height: 30px;

    }
    .dl span:last-child{
        margin-top: 5px;
        display: block;
    }
    .banner{
        display: flex !important;
        max-height: 620px;
        justify-content: center;
        align-items: center;
    }
   /* .mobile .banner{
        height: auto !important;
    }*/


    .mobile .list-first{
        display: none;
    }
    /* banner */
    .slick-slide {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .custom-slick-arrow {
        width: 25px;
        height: 25px;
        font-size: 25px;
        color: #fff;
        background-color: rgba(31, 45, 61, 0.11);
        opacity: 0.3;
    }
    .custom-slick-arrow:before {
        display: none;
    }
    .custom-slick-arrow:hover {
        opacity: 0.5;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
    .healthy-banner-font{
        position: absolute;
        top:0;
    }
    /* 第一个 */
    .list-first{
        width: 100%;
        /*background: url('/static/index-content1-1.jpg') center no-repeat;*/
        position: relative;
        margin-bottom: 50px;
    }
    .list-first>div{
        width:630px;
        background: #fff;
        padding: 70px 50px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .tablet .list-first>div{
        width:600px;
        background: #fff;
        padding: 15px 25px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        position: absolute;
        font-size: 14px;
        right: 0;
        bottom: 0;
    }

    .list-first .font .ccc{
        display: -webkit-box;
        margin-bottom: 10px;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .list-first .font{
        border-radius: 10px;
    }
    .list-first .font h1{
        font-size: 22px;
        color:#07111b;
        font-weight: normal;
        overflow: hidden;
        display: -webkit-box;
        margin-top: 5px;
        margin-bottom: 10px;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .list-first .font div{
        font-size: 18px;
    }
    .list-first .font span{
        margin-left: 10px;
        font-size: 14px;
        color: #9199a1; /* 灰色*/
    }
    /* NEWS */
    .news{
        color:#666;
        overflow: hidden;
    }
    .news .time{
        width: 100%;
        color:#258ffc;
        font-size: 26px;
        font-weight: bold;
    }
    .news h1{
        font-size: 25px;
        font-weight: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .news .font{
        max-height:65px;
        font-size: 20px;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .mobile .news h1{font-size: 20px;}
    .mobile .news .time{font-size: 20px;}
    .mobile .news .font{font-size: 16px;}


</style>
