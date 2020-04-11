<template>
    <div>
        <logo class="nav"></logo>

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
            <div>
                <img src="/static/banner.jpg" width="100%" alt="">
            </div>
            <div>
                <img src="/static/banner.jpg" width="100%" alt="">
            </div>
            <div>
                <img src="/static/banner.jpg" width="100%" alt="">
            </div>
        </a-carousel>


        <!-- ddd -->
        <div class="content">
            <!-- 精选课程 -->
            <div class="title"><img src="/static/index-title.png" alt=""></div>
            <div class="list-first">
                <img src="/static/index-content1-1.jpg" width="100%" alt="">
                <div class="font">
                    <h1>特聘请交大、矿大、武警学院等院校资深导师任教特聘请交大、矿大</h1>
                    <div class="ccc">特聘请交大、矿大、武警学院等院校资深导师任教特聘请交大、矿大特聘请交大、矿大、武警学院等院校资深导师任教特聘请交大、矿大特聘请交大、矿大、武警学院等院校资深导师任教特聘请交大、矿大</div>
                    <div style="color: #ed1010">￥388.00 <span>原价：999元</span></div>
                </div>
            </div>
            <a-row :gutter="[26,26]">
                <a-col :xs="24" :sm="12" :md="8">
                    <ListFont></ListFont>
                </a-col>
                <a-col :xs="24" :sm="12" :md="8">
                    <ListFont></ListFont>
                </a-col>
                <a-col :xs="24" :sm="12" :md="8">
                    <ListFont></ListFont>
                </a-col>
            </a-row>
            <!-- 最新上线 -->
            <div class="title"><img src="/static/index-title.png" alt=""></div>
            <a-row :gutter="[26,26]">
                <a-col :xs="24" :sm="12" :md="6"><!--{ xs: 8, sm: 16, md: 24, lg: 32 }-->
                    <ListFont ></ListFont>
                </a-col>
                <a-col :xs="24" :sm="12" :md="6">
                    <ListFont></ListFont>
                </a-col>
                <a-col :xs="24" :sm="12" :md="6">
                    <ListFont></ListFont>
                </a-col>
                <a-col :xs="24" :sm="12" :md="6">
                    <ListFont></ListFont>
                </a-col>
                <a-col :xs="24" :sm="12" :md="6">
                    <ListFont></ListFont>
                </a-col>
                <a-col :xs="24" :sm="12" :md="6">
                    <ListFont></ListFont>
                </a-col>
                <a-col :xs="24" :sm="12" :md="6">
                    <ListFont></ListFont>
                </a-col>
                <a-col :xs="24" :sm="12" :md="6">
                    <ListFont></ListFont>
                </a-col>
            </a-row>
            <!-- 新闻咨询 -->
            <div class="title"><img src="/static/index-title.png" alt=""></div>
            <div class="news">
                <a-row :gutter="[26,26]">
                    <a-col :xs="24" :sm="24" :md="5">
                        <img src="/static/news-1.jpg" width="100%" alt="">
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="19">
                        <div class="time">----2020.03.17</div>
                        <h1>北京时代亿信科技股份有限公司</h1>
                        <div class="font">
                            时代亿信凭借对信息安全行业的深刻理解和丰富的实践经验，应邀多次参与了国家课题研究与信息安全标准制定
                            工作，研发的密级标志、安全保密邮件等系列产品在国家部委和政府机关均有部署和应用。
                        </div>
                    </a-col>
                </a-row>
                <a-row :gutter="[26,26]">
                    <a-col :xs="24" :sm="24" :md="5">
                        <img src="/static/news-1.jpg" width="100%" alt="">
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="19">
                        <div class="time">----2020.03.17</div>
                        <h1>北京时代亿信科技股份有限公司</h1>
                        <div class="font">
                            时代亿信凭借对信息安全行业的深刻理解和丰富的实践经验，应邀多次参与了国家课题研究与信息安全标准制定
                            工作，研发的密级标志、安全保密邮件等系列产品在国家部委和政府机关均有部署和应用。
                        </div>
                    </a-col>
                </a-row>
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
export default {
  name: 'Home',
  components: {
        Logo,ListFont,Footer
  }
}
</script>


<style scoped>

    .mobile .title img{
        width: 100%;
    }
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
        font-size: 20px;
    }



</style>
