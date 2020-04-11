<template>
    <div>
        <logo></logo>
        <div>
            <div class="content" style="position: relative;">
                <div class="personalCassFont">
                    <div>个人中心</div>
                    <span>依托大数据系统、协助企业快速对接办理</span>
                </div>
            </div>
            <img src="/static/Personal-banner.jpg" width="100%" alt="">
        </div>

        <div class="content">
            <a-row :gutter="[26,26]">
                <a-col :xs="24" :sm="24" :md="6">
                    <littleNav :choose="1"></littleNav>
                </a-col>

                <a-col :xs="24" :sm="24" :md="18">
                    <ul class="tab-box">
                        <li class="choose" @click="$router.push('/PersonalClass')">我的课程</li>
                        <li @click="$router.push('/PersonalClassLive')">直播目录</li>
                    </ul>
                    <div class="personal">
                        <a-row :gutter="[10,30]" type="flex" align="middle" justify="space-around">
                            <a-col :xs="6" :sm="6" :md="6">
                                <img src="/static/News-img.png" width="100%" alt="">
                            </a-col>
                            <a-col :xs="18" :sm="18" :md="18">
                                <h1>北京时代亿信科技股份有限公司北京时代亿信科技股份有限公司北京时代亿信科技股份有限公司</h1>
                                <div class="font">
                                    时代亿信凭借对信息安全行业的深刻理解和丰富的实践经验，应邀多次参与了国家课题研究与信息安全标准制定
                                    工作，研发的密级标志、安全保密邮件等系列产品在国家部委和政府机关均有部署和应用。
                                </div>
                                <div style="margin-top: 20px">
                                    <span class="">课程类型：健康管理师</span>
                                    <span class="time">到期时间：2019-03-11</span>
                                </div>
                                <div class="personal-positionA but-xx but1">立即学习</div>
                                <!--<div class="personal-positionA but-xx but2">立即学习</div>-->
                            </a-col>
                        </a-row>
                    </div>


                </a-col>
            </a-row>
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
export default {
  name: 'Home',
  components: {
        Logo,ListFont,Footer,LittleNav
  }
}
</script>


<style scoped>


</style>
