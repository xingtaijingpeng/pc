<template>
    <div>
        <logo></logo>
        <div class="video-box" v-if="!videoshow">
            <div style="position: absolute; width: 100%; height: 100%; z-index: 0;"></div>
            <div class="video-navBox">
                <video class="video" controls autoplay>
                    <source :src="detail.url" type="video/mp4">
                    您的浏览器不支持 video 标签。
                </video>
                <div class="video-right">
                    <div class="video-nav-box">
                        <p class="video-nav1 choose"><a-icon type="caret-right" /><span>法国发过梵蒂冈谁发个顺丰大概岁的法国岁的法国岁的法国是否</span></p>
                        <ul class="video-navBox2">
                            <li>
                                <p class="video-nav2"><a-icon type="caret-right" /><span>法国发过梵蒂冈谁发个顺丰大概岁的法国岁的法国岁的法国是否</span></p>
                                <ul class="video-navBox3">
                                    <li>
                                        <p class="video-nav3"><a-icon type="play-circle" /> <span>法国发过梵蒂冈谁发个顺丰大概岁的法国岁的法国岁的法国是否</span></p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner2">
            <div class="banner2-font">专业的学习体系<br/>资深的在线讲师</div>
        </div>

        <div class="content2 pay">
            <a-row>
                <a-col :xs="24" :sm="6" :md="6" class="red">现价￥{{detail.price}}</a-col>
                <a-col :xs="24" :sm="6" :md="6" class="hui" style="text-decoration: line-through;">原价￥{{detail.old_price}}</a-col>
                <a-col :xs="24" :sm="12" :md="12" v-if="!(detail.price > 0)">
                    <div class="but" style="float: right;">免费观看</div>
                </a-col>
                <a-col :xs="24" :sm="12" :md="12" v-else-if="buyed">
                    <div class="but" style="float: right;">已购买</div>
                </a-col>
                <a-col :xs="24" :sm="12" :md="12" v-else>
                    <template>
                        <div class="but" style="float: right;" @click="userbuy">购买</div>
                    </template>
                </a-col>
            </a-row>
        </div>

        <div class="content videoBox">
            <a-row  type="flex" justify="space-around" align="middle">
                <a-col :xs="24" :sm="6" :md="6" style="text-align: center" @click="showvideo">
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
                    <p style="text-align: left; text-indent: 2em;">{{detail.teacher.description}}</p>
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
	import VueQr from 'vue-qr';
    import wx from 'weixin-js-sdk'

    export default {
        components: {
            Logo,ListFont,Footer,LittleNav,VueQr
        },
        data() {
            return {
                detail: [],
                data: [],
				buyed: false,
                moment,
                videoshow:false,

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

                this.checkbuy((response)=>{
                    if(response.data.isbuy){
                        this.buyed = true;
                    }
				});

            }
        },
        methods: {
            onOpenChange(openKeys) { // video 右边导航
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
                if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                    this.openKeys = openKeys;
                } else {
                    this.openKeys = latestOpenKey ? [latestOpenKey] : [];
                }
            },
            userbuy(){
                this.jump('/classPay/'+this.$route.params.id);
            },
			showvideo(){
                this.checkbuy((response)=>{
					if(response.data.isbuy || !(this.detail.price > 0)){
                        this.videoshow=!this.videoshow
                    }else{
                        return this.$message.error('请先购买本视频');
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
    };
</script>


<style scoped>
    p{margin-bottom: 0}
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
        z-index: 0;
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
        width:calc(100% - 220px);
        position: relative;
        z-index: 10;
        float:left;
    }
    .video-right{
        width: 200px;
        float: left;
    }
    .video-navBox{
        background:#2F3133 ;
        color: #fff;
        padding:10px 15px;
        border-radius: 15px;
        position: relative;
        z-index: 10;
    }
    .video-nav-box{
        margin-left: 10px;
    }
    .video-nav-box .video-nav1{
        cursor: pointer;
        margin-left: 10px;
        line-height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .video-navBox2 li{
        line-height: 40px;
        cursor: pointer;
    }
    .video-nav2{
        padding-left: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .video-navBox3 li{
        line-height: 40px;
        cursor: pointer;
    }
    .video-nav3{
        padding-left: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .video-nav1:hover,.video-nav2:hover,.video-nav3:hover{
        background: rgba(0,0,0,0.5);
    }
    .video-nav1 span,.video-nav2 span,.video-nav3 span{
        padding-left: 5px;

    }
    .video-nav-box .choose{
        color: #00cd8a;
    }
    .video-nav-box .choose:hover{
        background: none;
    }
</style>
