<template>
    <div>
        <logo></logo>
        <div class="Personal-banner" ></div>

        <div class="content">
            <a-row :gutter="[26,26]">
                <a-col :xs="24" :sm="24" :md="6">
                    <littleNav :choose="2"></littleNav>
                </a-col>

                <a-col :xs="24" :sm="24" :md="18">
                    <ul class="tab-box">
                        <li class="choose" @click="$router.push('/PersonalOrder')">已支付</li>
                        <li @click="$router.push('/PersonalOrderUnpaid')" >未支付</li>
                    </ul>
                    <div class="personal">
                        <a-row :gutter="[10,30]" type="flex" align="middle" justify="space-around">
                            <a-col :xs="24" :sm="6" :md="6">
                                <img src="/static/News-img.png" width="100%" alt="">
                            </a-col>
                            <a-col :xs="24" :sm="18" :md="18">
                                <h1>北京时代亿信科技股份</h1>
                                <div class="aaaaa">&nbsp;</div>
                                <div>
                                    <span class="">支付价格：300元</span>
                                    <span class="time">支付时间：2019-03-11</span>
                                </div>
                                <div class="personal-positionA but-xx but1">立即学习</div>
                                <div class="personal-positionA but-xx but2 but-hui">已支付</div>
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
    .aaaaa{
        line-height: 40px;
        height:40px
    }

    .mobile .aaaaa{
        display: none !important;
        line-height: 0px !important;
        height:0px !important;
    }

</style>
