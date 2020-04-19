<template>
    <div>
        <logo choose="4"></logo>
        <!-- ddd -->
        <div class="company-button"></div>

        <div class="content">
            <ul class="tab-box">
                <li @click="$router.push('/company')">公司介绍</li>
                <li class="choose" @click="$router.push('/CompanyTeam')">师资团队</li>
            </ul>
            <div>
                <a-row :gutter="[60,60]">
                    <a-col :xs="24" :sm="12" :md="12">
                        <a-list itemLayout="horizontal" :dataSource="data1" >
                            <a-list-item slot="renderItem" slot-scope="item, index" >
                                <a-list-item-meta
                                        :description="item.description"
                                >
                                    <a slot="title">{{ item.title }}</a>
                                    <a-avatar slot="avatar" :src="item.cover"/>
                                </a-list-item-meta>
                            </a-list-item>
                        </a-list>
                    </a-col>
                    <a-col  :xs="24" :sm="12" :md="12">
                        <a-list itemLayout="horizontal" :dataSource="data2" >
                            <a-list-item slot="renderItem" slot-scope="item, index" >
                                <a-list-item-meta
                                        :description="item.description"
                                >
                                    <a slot="title">{{ item.title }}</a>
                                    <a-avatar slot="avatar" :src="item.cover"/>
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
export default {
    name: 'Home',
    data() {
        return {
            data1: [],
            data2: []
        };
    },
    components: {
        Logo,ListFont,Footer
    },
    mounted(){
        axios.post('article/index',{
            guard: 'teacher',
            pageSize: 20,
        }).then((response) => {
            if(!response.status){
                return this.$message.error(response.message);
            }
            for(var i in response.data){
                if(i%2 == 0){
                    this.data1.push(response.data[i]);
                }else{
                    this.data2.push(response.data[i]);
                }
            }
        });
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
