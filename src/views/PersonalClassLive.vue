<template>
    <div>
        <logo></logo>
        <div class="Personal-banner" ></div>

        <div class="content">
            <a-row :gutter="[26,26]">
                <a-col :xs="24" :sm="24" :md="6">
                    <littleNav :choose="1"></littleNav>
                </a-col>

                <a-col :xs="24" :sm="24" :md="18">
                    <ul class="tab-box">
                        <li @click="$router.push('/PersonalClass')">我的课程</li>
                        <li class="choose" @click="$router.push('/PersonalClassLive')">直播目录</li>
                    </ul>
                    <div class="personal">
                        <a-row :gutter="[10,30]" type="flex" align="middle" justify="space-around">
                            <a-col :xs="12" :sm="12" :md="12">
                                <div>
                                    <a-steps :current="1" direction="vertical">
                                        <a-step>
                                            <span slot="icon"><a-icon type="clock-circle" /></span>
                                            <template slot="title">
                                                开始时间：<br/>
                                                2019-03-11日 星期三  20:00时 -- 22：00时
                                            </template>
                                            <span slot="description">电风扇电风扇</span>
                                            <span slot="description">演讲老师：张三</span>
                                            <span slot="description" class="but1 but-blue">待开始</span>
                                        </a-step>
                                        <a-step>
                                            <span slot="icon"><a-icon type="check-circle" /></span>
                                            <template slot="title">
                                                开始时间：<br/>
                                                2019-03-11日 星期三  20:00时 -- 22：00时
                                            </template>
                                            <span slot="description">电风扇电风扇</span>
                                            <span slot="description">演讲老师：张三</span>
                                            <span slot="description" class="but1 but-blue">待开始</span>
                                        </a-step>
                                        <a-step>
                                            <span slot="icon"><a-icon type="check-circle" /></span>
                                            <template slot="title">
                                                开始时间：<br/>
                                                2019-03-11日 星期三  20:00时 -- 22：00时
                                            </template>
                                            <span slot="description">电风扇电风扇</span>
                                            <span slot="description">演讲老师：张三</span>
                                            <span slot="description" class="but1 but-blue">待开始</span>
                                        </a-step>
                                    </a-steps>
                                </div>
                            </a-col>
                            <a-col :xs="12" :sm="12" :md="12">
                                <a-steps :current="1" direction="vertical">
                                    <a-step>
                                        <span slot="icon"><a-icon type="clock-circle" /></span>
                                        <template slot="title">
                                            回放时间: <br/>
                                            2019-03-11日 星期三  20:00时 -- 22：00时
                                        </template>
                                        <span slot="description">电风扇电风扇</span>
                                        <span slot="description">演讲老师：张三</span>
                                        <span slot="description" class="but1 but-hui-back">立即播放</span>
                                    </a-step>
                                    <a-step>
                                        <span slot="icon"><a-icon type="check-circle" /></span>
                                        <template slot="title">
                                            回放时间: <br/>
                                            2019-03-11日 星期三  20:00时 -- 22：00时
                                        </template>
                                        <span slot="description">电风扇电风扇</span>
                                        <span slot="description">演讲老师：张三</span>
                                        <span slot="description" class="but1 but-hui-back">立即播放</span>
                                    </a-step>
                                    <a-step>
                                        <span slot="icon"><a-icon type="check-circle" /></span>
                                        <template slot="title">
                                            回放时间: <br/>
                                            2019-03-11日 星期三  20:00时 -- 22：00时
                                        </template>
                                        <span slot="description">电风扇电风扇</span>
                                        <span slot="description">演讲老师：张三</span>
                                        <span slot="description" class="but1 but-hui-back">立即播放</span>
                                    </a-step>
                                </a-steps>
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
