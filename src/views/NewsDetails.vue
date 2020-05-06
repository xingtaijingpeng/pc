<template>
    <div>
        <logo></logo>
        <div class="newBannerFont">
        </div>


        <div class="content2 center-box">
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
        width: 100%;
        height: 380px;
        background: url("/static/News-banner.png") center no-repeat;
        background-size: auto 380px;
    }
    .mobile .newBannerFont{
        width: 100%;
        height: 190px;
        background: url("/static/News-banner.png") center no-repeat;
        background-size: auto 190px;
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
