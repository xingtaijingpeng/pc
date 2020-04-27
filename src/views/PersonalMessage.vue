<template>
    <div>
        <logo></logo>
        <!--<div class="Personal-banner" ></div>-->

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
                        <a-list itemLayout="horizontal" :dataSource="data" :locale="{emptyText: ' '}">
                            <a-list-item slot="renderItem" slot-scope="item, index">
                                <a-list-item-meta
                                        :description="item.content"
                                >
                                    <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                                </a-list-item-meta>
                                <div>{{item.created_at}}</div>
                            </a-list-item>
                        </a-list>
                        <a-empty v-if="!data.length" :image="simpleImage" style="margin-top: 150px;" description="暂无数据" />

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
import { Empty } from 'ant-design-vue';

    export default {
        data(){
            return {
                data: []
            }
        },
        beforeCreate() {
            this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
        },
        components: {
            Logo,ListFont,Footer,LittleNav
        },
        mounted(){
            this.list()
        },
        methods: {
            list(){
                let _this = this;
                axios.post('user/message').then((response) => {
                    if(!response.status){
                        return _this.$message.error(response.message);
                    }
                    _this.data = response.data
                });
            }
        }
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
