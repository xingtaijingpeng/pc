<template>
    <div class="footer" style="white-space: pre-wrap;" v-if="device!='mobile'">
        <div class="content footer-box">
            <div class="xue"><img src="/static/logo.png"  alt="">•&nbsp;&nbsp;&nbsp;学习永不晚</div>
            <div>关于我们：</div>
            <div class="xuan">
                <span @click="jump('/Company')">公司简介</span>
                <span @click="jump('')">加入我们</span>
                <span @click="jump('')">联系我们</span>
                <span @click="jump('/CompanyTeam')">教师合作</span>
                <!--<span @click="jump('/newsDetails/30')">退款声明</span>-->
            </div>
            <div class="rwm"><img src="/static/images/wechat_code.png" width="100" alt=""></div>
			<div>京ICP备20013953号-1 北京图博教育科技有限公司  版权所有</div>
        </div>
    </div>
    <div v-else>
		<div style="height: 80px;"></div>
        <div class="footer2">
            <ul>
                <li @click="$router.push('/')" :class="$route.path == '/' ? 'active' : ''">
                    <a>
                        <img class="footImg1" src="/static/foot1.png" >
                        <img class="footImg2" src="/static/foot1_1.png" >
                        <p>首页</p>
                    </a>
                </li>
                <li @click="$router.push('/healthy/34')" :class="choose == 2 ? 'active' : ''">
                    <a>
                        <img class="footImg1" src="/static/foot2.png" >
                        <img class="footImg2" src="/static/foot2_1.png" >
                        <p>课程分类</p>
                    </a>
                </li>
                <li @click="$router.push('/company')" :class="$route.path == '/company' ? 'active' : ''">
                    <a>
                        <img class="footImg1" src="/static/foot3.png" >
                        <img class="footImg2" src="/static/foot3_1.png" >
                        <p>公司介绍</p>
                    </a>
                </li>
                <li @click="tocenter" :class="choose == 5 ? 'active' : ''">
                    <a>
                        <img class="footImg1" src="/static/foot4.png" >
                        <img class="footImg2" src="/static/foot4_1.png" >
                        <p>个人中心</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Logo",
        computed: {
            ...mapState({
                device: state => state.app.DEVICE,
                base: state => state.app.BASE,
            }),
        },
        props:{
            choose: {
                type: [Number,String],
                default: 5
            }
        },
        methods: {
            toBr(str){
                return str.replace(/[\n\r]/g,"<br>")
            },
            tocenter(){

                let _this = this;
                axios.post('userinfo').then((response) => {
                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    _this.$router.push('/PersonalClass');
                });
            },
        }
    }
</script>

<style scoped>
    .xue{
        font-size: 20px;
        margin-bottom: 20px;
    }
    .xue img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: 20px;
    }
    .xuan span{
        width: 90px;
        display: inline-block;
        cursor: pointer;
    }
    .xuan span:hover{
        font-weight: bold;
    }
    .footer-box{
        position: relative;
    }
    .footer2 { display: none;}
    .mobile .footer2{
        display: block;
        position: fixed;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 60px;
        border-top: 1px solid #CCCCCC;
        background: #FFFFFF;
        z-index: 9;
    }
    .footer2 li{
        width: 24%;
        display: inline-block;
        text-align: center;
        position: relative;
        height: 60px;
    }
    .footer2 li a{
        color:#8a8a8a!important;
    }
    .footer2 li:first-child img{
        width: 20px;
        height: auto;
        top: 8px;
    }
    .footer2 li img{
        position: absolute;
        height: 20px;
        top: 10px;
        left: 50%;
        margin-left: -11px;
    }
    .footImg2{
        display: none;
    }
    .active .footImg2{
        display: block;
    }
    .active p{
        color: #ef1010;
    }
    .footer2 li p{
        width: 100%;
        position: absolute;
        bottom: -9px;
        font-size: 14px;
    }
    .rwm{
        position: absolute;
        right: 0px;
        top: 0px;
    }
</style>






