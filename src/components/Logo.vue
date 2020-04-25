<template>
  <div class="nav-box">
    <div class="content">
      <a-row :gutter="[8,0]">
        <a-col :xs="4" :md="9" @click="$router.push('/')"><img class="headImg-l" v-if="base" :src="base.logo" height="70px" /></a-col>
        <a-col :xs="0" :md="3" @click="$router.push('/')"><span :class="$route.path == '/' ? 'red' : ''">首页</span></a-col>
        <a-col :xs="5" :md="3" @click="$router.push('/healthy')"><span :class="choose == 2 ? 'red' : ''">健康管理师</span></a-col>
        <a-col :xs="5" :md="3" @click="$router.push('/fireControl')"><span :class="choose == 3 ? 'red' : ''">消防工程师</span></a-col>
        <a-col :xs="5" :md="3" @click="$router.push('/company')"><span :class="$route.path == '/company' ? 'red' : ''">公司介绍</span></a-col>
        <a-col :xs="5" :md="3" @click="tocenter" :class="choose == 5 ? 'red' : ''">
          <!--<span>登录</span>/
          <span>注册</span>-->
          <span>个人中心</span>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Logo',
        props:{
          choose: {
              type: [Number,String],
              default: 5
          }
        },
        computed: {
            ...mapState({
                device: state => state.app.DEVICE,
                base: state => state.app.BASE,
            }),
        },
        mounted(){

        },
		methods: {
            tocenter(){

                let _this = this;
                axios.post('userinfo').then((response) => {
                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    _this.$router.push('/PersonalClass');
                });
            }
		}
    }
</script>

<style scoped>

  .nav-box{
   /* position: fixed;
    top:0;*/
    background: #fff;
    width: 100%;
    line-height: 98px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  }
  .nav-box span{
    cursor:pointer;
  }
  .nav-box .ant-col{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


</style>
