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
                    <littleNav></littleNav>
                </a-col>

                <a-col :xs="24" :sm="24" :md="18">
                    <ul class="tab-box">
                        <li class="choose">我的消息</li>
                    </ul>
                    <div>
                        <a-list>
                            <virtual-scroller
                                    style="height: 400px"
                                    :items="data"
                                    item-height="73"
                                    v-infinite-scroll="handleInfiniteOnLoad"
                                    :infinite-scroll-disabled="busy"
                                    :infinite-scroll-distance="10"
                            >
                                <a-list-item slot-scope="{item}">
                                    <a-list-item-meta :description="item.email">
                                        <a slot="title" :href="item.href">{{item.name.last}}</a>
                                        <a-avatar
                                                slot="avatar"
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        />
                                    </a-list-item-meta>
                                    <div>Content {{item.index}}</div>
                                </a-list-item>
                            </virtual-scroller>
                            <a-spin v-if="loading" class="demo-loading" />
                        </a-list>
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


/* 复制 */

export default {
    components: {
        Logo,ListFont,Footer,LittleNav
    }
};


</script>


<style scoped>
    .demo-loading {
        position: absolute;
        bottom: 40px;
        width: 100%;
        text-align: center;
    }

</style>
