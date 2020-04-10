<template>
    <div>
        <logo></logo>
        <div>
            <div class="content" style="position: relative;">
                <div class="newBannerFont">
                    <!--<img src="/static/Healthy-banner-font.png" width="80%" alt="">-->
                    <div>新闻咨询</div>
                    <span>新闻咨询，了解行业动态</span>
                </div>
            </div>
            <img src="/static/News-banner.png" width="100%" alt="">
        </div>


        <div class="content2">
            <div class="newFont">
                <div>
                    <h1>青海省四项措施助力直销企业复工复业</h1>
                    <span>发布时间：2020.11.12</span>
                </div>

                <div class="newFont-con">
                    <p>新冠肺炎疫情发生以来，青海省市场监管局认真贯彻党中央、国务院和省委、省政府决策部署，严格落实属地监管责任，采取有四项项措施助力在青直销企业复工复业。截止目前，共有12家直销企业青海分公司、43家经销商已复工复业。该省本土直销企业金诃藏药股份有限公司已于2月3日复产。</p>
                    <img src="/static/News-img.png" alt="">
                    <p>新冠肺炎疫情发生以来，青海省市场监管局认真贯彻党中央、国务院和省委、省政府决策部署，严格落实属地监管责任，采取有四项项措施助力在青直销企业复工复业。截止目前，共有12家直销企业青海分公司、43家经销商已复工复业。该省本土直销企业金诃藏药股份有限公司已于2月3日复产。</p>
                </div>
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
    .content2{
        width: 800px;
        margin: 0 auto;
    }
    .newBannerFont{
        position: absolute;
        top:0;
        font-size: 36px;
        margin-top: 100px;
        color:#fff;
    }
    .newBannerFont span{
        font-size: 20px;
    }
    .newFont{
        text-align: center;
    }
    .newFont span{
        display: inline-block;
        border-bottom: 1px solid #ccc;
        padding:0 10px 10px;
        font-size: 16px;
        margin-bottom: 20px;
    }
    .newFont h1{
        font-size: 26px;
        margin-top: 50px;
    }
    .newFont-con p{
        text-indent: 2rem;
        text-align: left;
        font-size: 16px;
        margin-bottom: 20px;
    }
    .newFont-con img{
        margin-bottom: 20px;
    }

</style>
