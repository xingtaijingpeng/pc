<template>
    <div>
        <logo choose="3"></logo>
        <!-- ddd -->
        <div class="FireControl-banner"></div>

        <div class="content">
            <!-- 最新上线 -->
            <div class="title"><img src="/static/fire-title.png" alt=""></div>
            <div class="nav-list">
                <span>全部</span>
                <span>消防工程师</span>
                <span>消防工程师</span>
                <span>消防工程师</span>
                <span>消防工程师</span>
            </div>
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
