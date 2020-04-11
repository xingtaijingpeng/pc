<template>
    <div>
        <logo choose="4"></logo>
        <!-- ddd -->
        <div>
            <img src="/static/company-button.jpg" width="100%" alt="">
        </div>

        <div class="content">
            <ul class="tab-box">
                <li @click="$router.push('/company')">公司介绍</li>
                <li class="choose" @click="$router.push('/CompanyTeam')">师资团队</li>
            </ul>
            <div>
                <a-row :gutter="[60,60]">
                    <a-col :xs="24" :sm="12" :md="12">
                        <a-list itemLayout="horizontal" :dataSource="data" >
                            <a-list-item slot="renderItem" slot-scope="item, index" >
                                <a-list-item-meta
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                >
                                    <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                                    <a-avatar slot="avatar" src="/static/news-1.jpg"/>
                                </a-list-item-meta>
                            </a-list-item>
                        </a-list>
                    </a-col>
                    <a-col  :xs="24" :sm="12" :md="12">
                        <a-list itemLayout="horizontal" :dataSource="data" >
                            <a-list-item slot="renderItem" slot-scope="item, index" >
                                <a-list-item-meta
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                >
                                    <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                                    <a-avatar slot="avatar" src="/static/news-1.jpg"/>
                                </a-list-item-meta>
                            </a-list-item>
                        </a-list>
                    </a-col>
                </a-row>

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
export default {
  name: 'Home',
    data() {
        return {
            data,
        };
    },
  components: {
        Logo,ListFont,Footer
  }
}
</script>


<style scoped>
    .ant-avatar-image{
        width: 100px;
        height:100px;
    }
    .ant-list-item-meta-content{
        margin-top: 23px;
    }
    .healthy-banner-font{
        position: absolute;
        top:0;
    }



</style>
