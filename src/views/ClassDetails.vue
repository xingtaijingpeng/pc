<template>
    <div>
        <logo></logo>
        <div class="banner2"></div>

        <div class="content2 pay">
            <a-row>
                <a-col :xs="9" :sm="6" :md="6" class="red">￥265.00</a-col>
                <a-col :xs="8" :sm="6" :md="6" class="hui">原价￥299.00</a-col>
                <a-col :xs="7" :sm="12" :md="12">
                    <div class="but">购买</div>
                </a-col>
            </a-row>
        </div>

        <div class="content videoBox">
            <a-row  type="flex" justify="space-around" align="middle">
                <a-col :xs="24" :sm="6" :md="6" style="text-align: center">
                    <img src="/static/video-img.png" alt="">
                    <h1 style="margin-top: 20px;">观看视频</h1>
                </a-col>
                <a-col :xs="24" :sm="12" :md="12" class="hui">
                    <h1>课程名称课程名称</h1>
                    <p>课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍</p>
                    <p>2019.11.12</p>
                </a-col>
                <a-col :xs="24" :sm="6" :md="6" style="text-align: center">
                    <img src="/static/video-img.png" alt="">
                    <h1 style="margin-top: 20px;">啊士大</h1>
                    <p>是打发打发</p>
                </a-col>
            </a-row>
        </div>
        <div class="title"><img src="/static/video-title.png" alt=""></div>
        <div class="content comment-box">

            <a-list
                    class="comment-list"
                    :header="`${data.length} replies`"
                    itemLayout="horizontal"
                    :dataSource="data"
            >
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-comment :author="item.author" :avatar="item.avatar">
                        <template slot="actions">
                            <span v-for="action in item.actions">{{ action }}</span>
                        </template>
                        <p slot="content">{{ item.content }}</p>
                        <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
                            <span>{{ item.datetime.fromNow() }}</span>
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
                data: [
                    {
                        actions: ['Reply to'],
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content:
                            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                        datetime: moment().subtract(1, 'days'),
                    },
                    {
                        actions: ['Reply to'],
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content:
                            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                        datetime: moment().subtract(2, 'days'),
                    },
                ],
                moment,
            };
        },
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
    .pay{
        position: absolute;
        top: 350px;
        left: 50%;
        margin-left: -400px;
        padding:30px 30px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        z-index: 99999;
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
    }
    .comment-box{
        padding: 20px 50px;
        border-radius: 10px;
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    }
</style>
