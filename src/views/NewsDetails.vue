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
                    <h1>{{detail.title}}</h1>
                    <span>发布时间：{{detail.created_at}}</span>
                </div>

                <div class="newFont-con" v-html="detail.content">
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
    data(){
        return {
            id: 0,
            detail: []
        }
    },
    components: {
        Logo,ListFont,Footer
    },
    mounted(){
        this.id = this.$route.params.id;
        axios.post('article/detail/'+this.id).then((response) => {
            if(!response.status){
                return this.$message.error(response.message);
            }
            this.detail = response.data;
        });
    }
}
</script>


<style scoped>
    .content2{
        max-width: 1200px;
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
