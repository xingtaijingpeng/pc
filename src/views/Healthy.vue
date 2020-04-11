<template>
    <div>
        <logo choose="2"></logo>
        <!-- ddd -->
        <div>
            <img src="/static/Healthy-banner.jpg" width="100%" alt="">
        </div>
        <div class="content">
            <!-- 最新上线 -->
            <div class="title"><img src="/static/Healthy-title.png" alt=""></div>
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
