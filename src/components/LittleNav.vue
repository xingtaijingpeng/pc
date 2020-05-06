<template>
  <div>
      <a-row type="flex" justify="space-around" align="middle">
        <a-col  :xs="24" :sm="24" :md="24">
            <div class="head">

                <a-upload
                        name="file"
                        :headers="authHeader()"
                        listType="picture-card"
                        class="avatar-uploader"
                        :showUploadList="false"
                        :action="baseUrl('upload/image')"
                        @change="handleChangeLogo"
                        :style="{border:'none'}"
                >
                    <div v-if="imageUrl">
                        <img :src="imageUrl" alt="avatar" class="img_cover" width="100%" />
                    </div>

                    <div v-else>
                        <a-icon :type="loading ? 'loading' : 'plus'" />
                        <div class="ant-upload-text">Upload</div>
                    </div>
                </a-upload>
                <p>{{mobile}}</p>
                <div class="dao">距离考试还有 <span>{{needay}}</span> 天</div>
            </div>
            <ul class="list-nav">
                <a-row>
                    <a-col :xs="12" :sm="12" :md="24">
                        <li :class="choose == 1 ? 'choose' : ''" @click="$router.push('/PersonalClass')">
                            <i class="tab-nav tab-nav1"></i><span>我的课程</span>
                        </li>
                    </a-col>
                    <a-col :xs="12" :sm="12" :md="24" >
                        <li :class="choose == 2 ? 'choose' : ''" @click="$router.push('/PersonalOrder')">
                            <i class="tab-nav tab-nav2"></i><span>订单管理</span>
                        </li>
                    </a-col>
                    <a-col :xs="12" :sm="12" :md="24">
                        <li :class="choose == 3 ? 'choose' : ''" @click="$router.push('/PersonalMessage')">
                            <i class="tab-nav tab-nav3"></i><span>我的消息</span>
                        </li>
                    </a-col>
                    <a-col :xs="12" :sm="12" :md="24">
                        <li :class="choose == 4 ? 'choose' : ''" @click="$router.push('/PersonalSetCenter')">
                            <i class="tab-nav tab-nav4"></i><span>个人中心</span>
                        </li>
                    </a-col>
                </a-row>
            </ul>
        </a-col>
      </a-row>
  </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'LittleNav',
        data(){
            return {
                loading: false,
                needay: 0,
                imageUrl: 'static/head-icon.png',
            }
        },
        props:{
            choose:{
              type: Number,
            }
        },
        watch: {

        },
        mounted(){
            axios.post('userinfo').then((response) => {
                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.$store.commit('user/SET_MOBILE',response.data.mobile);
                this.$store.commit('user/SET_AVATAR',response.data.avatar);
                if(response.data.avatar)
                {
                    this.imageUrl = response.data.avatar
                }
                this.needay = response.data.needay
                if(!response.data.name || !response.data.address){
                    this.jump('/PersonalSetCenter');
                }
            });
        },
        computed:{
            ...mapState({
                mobile: state => state.user.mobile,
                avatar: state => state.user.avatar,
            }),
        },
        methods: {
            handleChangeLogo({file}) {
                if (file.status === 'uploading') {
                    this.loading = true;
                    return;
                }
                if (file.status === 'done') {
                    // Get this url from response in real world.
                    this.loading = false;
                    this.imageUrl = file.response.data
                    //设置头像
                    axios.post('change/cover',{
                        cover: this.imageUrl
                    }).then((response) => {
                        if(!response.status){
                            return this.$message.error(response.message);
                        }

                    });
                }
            },
        }
    }
</script>
<style>
    .ant-upload-select-picture-card{
        border: none !important;
        float: none !important;
        margin: 0 auto !important;
        background:none!important;
    }
</style>

<style scoped>
    .head{
        margin-top: 40px;
        text-align: center;
    }
    .head .img_cover{
        width: 110px;
        height: 110px;
        border-radius:110px;
        overflow: hidden;
    }
    .head p{
        margin-bottom: 0px;
    }
    .dao{
        font-size: 14px;
        color:#b5bfce;
        margin-bottom: 20px;
    }
    .dao span{
        font-size: 22px;
        color:#ff8e25;
        font-weight: bold;
    }
    .list-nav li{
        height: 66px;
        line-height: 66px;
        font-size: 20px;
        padding-left: 30px;
        cursor: pointer;
    }
    .list-nav li span{
        float: left;
    }
    .tab-nav{
        display: inline-block;
        width: 30px;
        height: 66px;
        margin-right: 10px;
        float: left;
    }
    .choose{
        color:#fff!important;
        background: url("/static/choose.png") left center no-repeat;
        background-size: 100%;
    }
    .choose .tab-nav1{
        background: url("/static/nav1-w.png") center center no-repeat;
        background-size: auto 30px;
    }
    .choose .tab-nav2{
        background: url("/static/nav2-w.png") center center no-repeat;
        background-size: auto 30px;
    }
    .choose .tab-nav3{
        background: url("/static/nav3-w.png") center center no-repeat;
        background-size: auto 30px;
    }
    .choose .tab-nav4{
        background: url("/static/nav4-w.png") center center no-repeat;
        background-size: auto 30px;
    }
    .tab-nav1{
        background: url("/static/nav1.png") center center no-repeat;
        background-size: auto 30px;
    }
    .tab-nav2{
        background: url("/static/nav2.png") center center no-repeat;
        background-size: auto 30px;
    }
    .tab-nav3{
        background: url("/static/nav3.png") center center no-repeat;
        background-size: auto 30px;
    }
    .tab-nav4{
        background: url("/static/nav4.png") center center no-repeat;
        background-size: auto 30px;
    }
/*-------------------*/
    .mobile .choose .tab-nav1{
        background: url("/static/nav1-w.png") center center no-repeat;
        background-size: auto 25px;
    }
    .mobile .choose .tab-nav2{
        background: url("/static/nav2-w.png") center center no-repeat;
        background-size: auto 25px;
    }
    .mobile .choose .tab-nav3{
        background: url("/static/nav3-w.png") center center no-repeat;
        background-size: auto 25px;
    }
    .mobile .choose .tab-nav4{
        background: url("/static/nav4-w.png") center center no-repeat;
        background-size: auto 25px;
    }
    .mobile .tab-nav1{
        background: url("/static/nav1.png") center center no-repeat;
        background-size: auto 25px;
    }
    .mobile .tab-nav2{
        background: url("/static/nav2.png") center center no-repeat;
        background-size: auto 25px;
    }
    .mobile .tab-nav3{
        background: url("/static/nav3.png") center center no-repeat;
        background-size: auto 25px;
    }
    .mobile .tab-nav4{
        background: url("/static/nav4.png") center center no-repeat;
        background-size: auto 25px;
    }

</style>
