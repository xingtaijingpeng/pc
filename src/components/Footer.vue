<template>
    <div class="footer" style="white-space: pre-wrap;" v-if="false">
        <div style="height: 100%; text-align: left; max-width: 1200px; margin: 0 auto;">
            <template v-if="base">{{base.banquan}}</template>
        </div>
    </div>
    <div v-else>
        <div class="footer2">
            <ul>
                <li class="active">
                    <a href="#">
                        <img class="footImg1" src="/static/foo.png" >
                        <img class="footImg2" src="/static/foot1_1.png" >
                        <p>首页</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="footImg1" src="/static/foot2.png" >
                        <img class="footImg2" src="/static/foot2_1.png" >
                        <p>贷款产品</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="footImg1" src="/static/foot3.png" >
                        <img class="footImg2" src="/static/foot3_1.png" >
                        <p>关于我们</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="footImg1" src="/static/foot4.png" >
                        <img class="footImg2" src="/static/foot4_1.png" >
                        <p>会员中心</p>
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
        methods: {
            toBr(str){
                return str.replace(/[\n\r]/g,"<br>")
            }
        }
    }
</script>

<style scoped>
    .footer2{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        border-top: 1px solid #CCCCCC;
        background: #FFFFFF;
        z-index: 1;
    }
    .footer2 li{
        width: 24%;
        display: inline-block;
        text-align: center;
        position: relative;
        height: 60px;
    }
    .footer2 li:first-child img{
        width: 17px;
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
        color: #517698;
    }
    .footer2 li p{
        width: 100%;
        position: absolute;
        bottom: -9px;
        font-size: 14px;
    }
</style>






