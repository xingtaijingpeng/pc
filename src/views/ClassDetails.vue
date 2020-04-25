<template>
    <div>
        <logo></logo>
        <div class="video-box" v-if="videoshow">
            <div @click="videoshow=!videoshow" style="position: absolute; width: 100%; height: 100%; z-index: 8;"></div>
            <video class="video" controls autoplay>
                <source :src="detail.url" type="video/mp4">
                您的浏览器不支持 video 标签。
            </video>
        </div>
        <div class="banner2">
            <div class="banner2-font">专业的学习体系<br/>资深的在线讲师</div>
        </div>

        <div class="content2 pay">
            <a-row>
                <a-col :xs="24" :sm="6" :md="6" class="red">{{detail.price}}</a-col>
                <a-col :xs="24" :sm="6" :md="6" class="hui" style="text-decoration: line-through;">原价￥{{detail.old_price}}</a-col>
                <a-col :xs="24" :sm="12" :md="12">
                    <div class="but">购买</div>
                </a-col>
            </a-row>
        </div>

        <div class="content videoBox">
            <a-row  type="flex" justify="space-around" align="middle">
                <a-col :xs="24" :sm="6" :md="6" style="text-align: center" @click="videoshow=!videoshow">
                    <img src="/static/video-img.png" alt="">
                    <h1 style="margin-top: 20px;">观看视频</h1>
                </a-col>
                <a-col :xs="24" :sm="12" :md="12" class="hui">
                    <h1>{{detail.title}}</h1>
                    <p class="font">{{detail.description}}</p>
                    <p>{{detail.created_at}}</p>
                </a-col>
                <a-col :xs="24" :sm="6" :md="6" style="text-align: center">
                    <img :src="detail.teacher.cover"  width="60%" alt="">
                    <h1 style="margin-top: 20px;">{{detail.teacher.title}}</h1>
                    <p>{{detail.teacher.description}}</p>
                </a-col>
            </a-row>
        </div>
        <div class="title"><img src="/static/video-title.png" alt=""></div>
        <div class="content comment-box">

            <a-list
                    class="comment-list"
                    :header="`${data.length} 评论`"
                    itemLayout="horizontal"
                    :dataSource="data"
                    :locale="{emptyText: '暂无评论'}"
            >
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-comment author="" :avatar="item.cover">
                        <p slot="content">{{ item.contents }}</p>
                        <a-tooltip slot="datetime" title="11111">
                            <span>{{item.created_at}}</span>
                        </a-tooltip>
                    </a-comment>
                </a-list-item>
            </a-list>
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


    import moment from 'moment';
    export default {
        components: {
            Logo,ListFont,Footer,LittleNav
        },
        data() {
            return {
                detail: [],
                data: [],
                moment,
                videoshow:false
            };
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

                //获取评论
                axios.post('comment/'+_this.$route.params.id,{
                    pageSize: 9999
                }).then((response) => {
                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    this.data = response.data;
                });

            }
        }
    };
</script>


<style scoped>
    .personalCassFont{
        text-align: center!important;
    }
    .content2{
        width: 800px;
        margin: 0 auto;
    }
    .banner2-font{
        font-size:36px;
        color:#fff;
        text-align: center;
        margin-top: 100px;
    }
    .pay{
        position: absolute;
        top: 423px;
        left: 50%;
        margin-left: -400px;
        padding:30px 30px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        z-index: 5;
    }
    .red{
        font-size: 30px;
    }
    .hui{
        font-size: 18px;
        margin-top: 10px;
    }
    .but{
        width: 100px;
        height: 40px;
        line-height: 40px;
        background: #f31111;
        color: #fff;
        text-align: center;
        font-size: 16px;
        float: right;
        border-radius: 5px;
        cursor: pointer;
    }
    .videoBox{
        margin: 150px auto 80px;
        background: #fead1e;
        border-radius: 10px;
        padding: 50px 10px;
        color:#fff;
    }
    .videoBox h1{
        color: #fff;
    }
    .comment-box{
        padding: 20px 50px;
        border-radius: 10px;
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    }

    /* 视频 */
    .video-box{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        height: 100vh;
        background:rgba(0,0,0,0.6);
        z-index:9;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .video{
        width: 80%;
        position: relative;
        z-index: 10;
    }
</style>
