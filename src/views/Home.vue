<template>
    <div>
        <logo class="nav" choose="1"></logo>
        <!-- banner -->
        <a-carousel arrows>
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
                <div class="banner" v-for="item in base.banner"><img :src="item.url" style="width: 100%" /></div>
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
                            :title="item.title"
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
                                :title="item.title"
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
                            <div class="time">----{{item.created_at}}</div>
                            <h1>{{item.title}}</h1>
                            <div class="font">
                                {{item.description}}
                            </div>
                        </a-col>
                    </a-row>
                </template>
            </div>
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
    import { mapState } from 'vuex'

    export default {
        name: 'Home',
        data(){
            return {
                hot: [],
                videos: [],
                news: []
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
                pageSize: 8,
                hot: 2,
                order: 'created_at',
                order_type: 'DESC',
            }).then((response) => {

                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.videos = response.data;
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

        },
        methods: {
            todetail: function (id) {
                this.$router.push('/newsDetails/'+id)
            }
        }
    }
</script>


<style scoped>
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



</style>
