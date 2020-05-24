<template>
    <div>
        <logo choose="2"></logo>
        <!-- ddd -->
        <div v-if="$route.params.id==35" class="Healthy-banner" ></div>
        <div v-else class="FireControl-banner" ></div>
        <div class="content">

            <div class="title" v-if="$route.params.id==35"><img src="/static/Healthy-title.png" alt=""></div>
            <div class="title" v-else><img src="/static/fire-title.png" alt=""></div>

            <a-row :gutter="[26,26]">
                <template v-for="item in lists" v-if="item.article">
                    <a-col :xs="24" :sm="12" :md="6">
                        <list-font
                                :id="item.article.id"
                                :cover="item.article.cover"
                                :title="item.article.category"
                                :price="item.article.price"
                                :oldprice="item.old_price"
                        ></list-font>
                    </a-col>
                </template>
            </a-row>
        </div>
        <Footer :choose="2"></Footer>
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
            lists: [],
            videos: [],
			Gindex: 0,
        };
    },
    components: {
        Logo,ListFont,Footer
    },
	watch:{
        '$route': function (newVal) {
            axios.post('category/index',{
                guard: 'video',
                pageSize: 30,
                merge: 1,
                parent_id: this.$route.params.id
            }).then((response) => {
                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.lists = response.data;
                this.getlist(this.$route.params.id);
            });
        },
	},
    mounted(){
        this.getlist(this.$route.params.id)
    },
    methods: {
        getlist(pid){
            axios.post('category/index',{
                guard: 'video',
                pageSize: 30,
                merge: 1,
                parent_id: pid,
                article: 1,
            }).then((response) => {
                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.lists = response.data;
            });
        }
    }

}
</script>


<style scoped>
    .healthy-banner-font{
        position: absolute;
        top:0;
    }

    .choose{
        border: 1px solid #f31111;
        color: #f31111;
    }


</style>
