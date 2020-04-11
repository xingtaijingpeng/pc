<template>
    <div>
        <logo></logo>
        <!-- ddd -->
        <div>
            <div class="content" style="position: relative">
                <div class="healthy-banner-font">
                    <img src="/static/FireControl-banner-font.png" width="80%" alt="">
                </div>
            </div>
            <img src="/static/FireControl-banner.jpg" width="100%" alt="">
        </div>

        <div class="content">
            <!-- 最新上线 -->
            <div class="title"><img src="/static/fire-title.png" alt=""></div>
            <a-row :gutter="[26,26]">
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
                <a-col :xs="24" :sm="12" :md="6">
                    <ListFont></ListFont>
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
export default {
  name: 'Home',
  components: {
        Logo,ListFont,Footer
  }
}
</script>


<style scoped>
    .healthy-banner-font{
        position: absolute;
        top:0;
    }



</style>
