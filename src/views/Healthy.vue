<template>
    <div>
        <logo choose="2"></logo>
        <!-- ddd -->
        <div class="Healthy-banner" ></div>
        <div class="content">

            <div class="title"><img src="/static/Healthy-title.png" alt=""></div>
            <!-- 最新上线 -->
            <div class="nav-list">
                <span :class="Gindex == 0 ? 'choose' : ''" @click="categoryByList(0)">全部</span>
				<template v-for="item in lists">
					<span :class="Gindex == item.id ? 'choose' : ''" :key="item.id" @click="categoryByList(item.id)">{{item.name}}</span>
				</template>
            </div>
            <a-row :gutter="[26,26]">
                <template v-for="item in videos">
                    <a-col :xs="24" :sm="12" :md="6">
                        <list-font
                                :id="item.id"
                                :cover="item.cover"
                                :title="item.title"
                                :price="item.price"
                                :oldprice="item.old_price"
                        ></list-font>
                    </a-col>
                </template>
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
    mounted(){
        axios.post('category/index',{
            guard: 'video',
            pageSize: 30,
            merge: 1,
            parent_id: 5
        }).then((response) => {
            if(!response.status){
                return this.$message.error(response.message);
            }
            this.lists = response.data;
            this.getlist(this.lists.map(function (item) {
                return item.id;
            }));
        });
    },
    methods: {
        categoryByList(id){
            this.Gindex = id;
            this.getlist(id ? [id] : this.lists.map(function (item) {
                return item.id;
            }));
		},
        getlist(categoryids = []){
            axios.post('article/index',{
                guard: 'video',
                pageSize: 30,
				categorys: categoryids
            }).then((response) => {
                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.videos = response.data;
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
