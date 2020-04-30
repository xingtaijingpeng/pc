<template>
    <div>
        <logo choose="4"></logo>
        <!-- ddd -->
        <div class="company-button"></div>

        <div class="content">
            <ul class="tab-box">
                <li class="choose" @click="$router.push('/company')">公司介绍</li>
                <li @click="$router.push('/CompanyTeam')">师资团队</li>
            </ul>
            <div class="company-font">
                <a-row>
                    <a-col :xs="24" :sm="8" :md="8" style="text-align: center">
                        <img class="cImg" src="/static/company-img.png" width="80%" style="margin-top: 100px" alt="">
                    </a-col>
                    <a-col  :xs="24" :sm="16" :md="16">
                        <div class="company-title">
                            <h1 style="visibility: hidden;">标题标题标题标题标题标题</h1>
                        </div>
                        <div v-html="base.content">

                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
        <Footer :choose="3"></Footer>
    </div>

</template>

<script>
// https://www.antdv.com/components/radio-cn/
	import '../assets/css/common.css'
    import Logo from '@/components/Logo'
    import ListFont from '@/components/ListFont'
    import Footer from '@/components/Footer'
import { mapState } from 'vuex'

    export default {
        name: 'Home',
        data() {
            return {

            };
        },
        components: {
            Logo,ListFont,Footer
        },
        computed:{
            ...mapState({
                device: state => state.app.DEVICE,
                base: state => state.app.BASE,
            }),
        }
    }
</script>


<style scoped>
    .healthy-banner-font{
        position: absolute;
        top:0;
    }

    .company-title{
        text-align: right;
        padding-top: 35px;
        background: url('/static/company-title.png') right no-repeat;
    }
    .company-font p{
        font-size: 16px;
        text-indent: 2rem;
    }
    .mobile .cImg{ margin-top: 0!important; width: 50%;}
    .mobile h1{ font-size: 18px!important;}
    .mobile p{ font-size: 14px!important;}
</style>
