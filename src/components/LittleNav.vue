<template>
  <div>
      <a-row type="flex" justify="space-around" align="middle">
        <a-col  :xs="24" :sm="24" :md="24">
            <div class="head">
                <img src="/static/news-1.jpg" alt="">
                <p>励志语录励志语录励志语录励</p>
            </div>
            <ul class="list-nav">
                <a-row>
                    <a-col :xs="6" :sm="12" :md="24">
                        <li class="choose" @click="$router.push('/PersonalClass')">
                            <i class="tab-nav tab-nav1"></i><span>我的课程</span>
                        </li>
                    </a-col>
                    <a-col :xs="6" :sm="12" :md="24" >
                        <li @click="$router.push('/PersonalOrder')">
                            <i class="tab-nav tab-nav2"></i><span>订单管理</span>
                        </li>
                    </a-col>
                    <a-col :xs="6" :sm="12" :md="24">
                        <li @click="$router.push('/PersonalMessage')">
                            <i class="tab-nav tab-nav3"></i><span>我的消息</span>
                        </li>
                    </a-col>
                    <a-col :xs="6" :sm="12" :md="24">
                        <li @click="$router.push('/PersonalSetUp')">
                            <i class="tab-nav tab-nav4"></i><span>账户管理</span>
                        </li>
                    </a-col>
                </a-row>

                <!--<li><i class="tab-nav tab-nav2"></i><span>订单管理</span></li>
                <li><i class="tab-nav tab-nav3"></i><span>我的消息</span></li>
                <li><i class="tab-nav tab-nav4"></i><span>账户管理</span></li>-->
            </ul>
        </a-col>
      </a-row>
  </div>
</template>

<script>
export default {
  name: 'LittleNav',
}
</script>

<style scoped>
    .head{
        margin-top: 40px;
        text-align: center;
    }
    .head img{
        width: 110px;
        height: 110px;
        border-radius:110px;
        margin-bottom: 20px;
        overflow: hidden;
    }
    .head p{
        margin-bottom: 30px;
    }
    .list-nav li{
        height: 66px;
        line-height: 66px;
        font-size: 20px;
        padding-left: 30px;
        cursor: pointer;
    }
    .list-nav li span{
        float: left;
    }
    .tab-nav{
        display: inline-block;
        width: 30px;
        height: 66px;
        margin-right: 10px;
        float: left;
    }
    .choose{
        color:#fff!important;
        background: url("/static/choose.png") left center no-repeat;
        background-size: 100%;
    }
    .choose .tab-nav1{
        background: url("/static/nav1-w.png") center center no-repeat;
        background-size: auto 30px;
    }
    .choose .tab-nav2{
        background: url("/static/nav2-w.png") center center no-repeat;
        background-size: auto 30px;
    }
    .choose .tab-nav3{
        background: url("/static/nav3-w.png") center center no-repeat;
        background-size: auto 30px;
    }
    .choose .tab-nav4{
        background: url("/static/nav4-w.png") center center no-repeat;
        background-size: auto 30px;
    }
    .tab-nav1{
        background: url("/static/nav1.png") center center no-repeat;
        background-size: auto 30px;
    }
    .tab-nav2{
        background: url("/static/nav2.png") center center no-repeat;
        background-size: auto 30px;
    }
    .tab-nav3{
        background: url("/static/nav3.png") center center no-repeat;
        background-size: auto 30px;
    }
    .tab-nav4{
        background: url("/static/nav4.png") center center no-repeat;
        background-size: auto 30px;
    }


</style>
