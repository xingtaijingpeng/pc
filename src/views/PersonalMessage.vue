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
                    <littleNav :choose="3"></littleNav>
                </a-col>

                <a-col :xs="24" :sm="24" :md="18">
                    <ul class="tab-box">
                        <li class="choose">我的消息</li>
                    </ul>
                    <div>
                        <a-list itemLayout="horizontal" :dataSource="data">
                            <a-list-item slot="renderItem" slot-scope="item, index">
                                <a-list-item-meta
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                >
                                    <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                                    <a-avatar slot="avatar" src=""/>
                                </a-list-item-meta>
                                <div>2019-10-11</div>
                            </a-list-item>
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
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

/* 复制 */

export default {
    components: {
        Logo,ListFont,Footer,LittleNav
    },
    data() {
        return {
            data,
        };
    },
};




</script>


<style scoped>
    .demo-infinite-container {
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        overflow: auto;
        padding: 8px 24px;
        height: 300px;
    }
    .demo-loading-container {
        position: absolute;
        bottom: 40px;
        width: 100%;
        text-align: center;
    }

</style>
