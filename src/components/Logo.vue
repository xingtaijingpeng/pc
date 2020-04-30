<template>
  <div class="nav-box">
    <div :class="['content']" v-if="device!='mobile'">
      <a-row :gutter="[8,0]">
        <a-col :xs="4" :md="6" @click="$router.push('/')"><img class="headImg-l" v-if="base" :src="base.logo" height="70px" /></a-col>
          <a-col :xs="0" :md="3" @click="$router.push('/')"><span :class="$route.path == '/' ? 'red' : ''">首页</span></a-col>
          <a-col :xs="5" :md="4" id="nav_list" @mouseover="selectStyle">
              <span>课程分类</span>
              <div class="navDown" v-if="true">
                  <div>
                      <h1>建筑aaa</h1>
                      <div class="navList">
                          <span>啊啊1</span>
                          <span>啊啊啊啊2</span>
                          <span>啊啊啊3</span>
                          <span>啊啊啊啊4</span>
                          <span>啊啊啊5</span>
                      </div>
                  </div>
              </div>
          </a-col>
          <a-col :xs="5" :md="4" @click="$router.push('/company')"><span :class="$route.path == '/company' ? 'red' : ''">公司介绍</span></a-col>
          <a-col :xs="5" :md="4" @click="tocenter" :class="choose == 5 ? 'red' : ''"><span>个人中心</span></a-col>
          <a-col :xs="5" :md="3">服务热线：1111111111</a-col>
      </a-row>
    </div>
      <div :class="['content']" v-else>
          <a-row :gutter="[8,0]">
              <a-col span="16" @click="$router.push('/')"><img class="headImg-l" v-if="base" :src="base.logo" height="70px" /></a-col>
              <a-col span="8">
                  <a-dropdown :trigger="['click']">
                      <a class="ant-dropdown-link" @click="e => e.preventDefault()" style="color: #2e3033 !important;">
                          导航菜单 <a-icon type="down" />
                      </a>
                      <a-menu slot="overlay">
                          <a-menu-item key="111">
                              <a @click="$router.push('/')">首页</a>
                          </a-menu-item>
                          <a-menu-item key="222">
                              <a @click="$router.push('/healthy')">健康管理师</a>
                          </a-menu-item>
                          <a-menu-item key="333">
                              <a @click="$router.push('/fireControl')">消防工程师</a>
                          </a-menu-item>
                          <a-menu-item key="444">
                              <a @click="$router.push('/company')">公司介绍</a>
                          </a-menu-item>
                          <a-menu-item key="1">
                              <a @click="tocenter">个人中心</a>
                          </a-menu-item>
                      </a-menu>
                  </a-dropdown>
            </a-col>
          </a-row>
      </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Logo',
        data(){
            return {
                options: [
                    {
                        value: '1',
                        label: ' 健康管理师 ',
                        children: [
                            {
                                value: 'nanjing',
                                label: 'Nanjing',
                            },
                        ],
                    },
                ],
            }
        },
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
                islogin: state => state.user.mobile
            }),
        },
        created(){
            this.$store.commit('app/setLogin',false);
        },
		mounted(){
            //获取分类
            axios.post('category/index',{
                guard: 'video',
                pageSize: 30,
            }).then((response) => {
                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.options = response.data
            });
		},
		methods: {
            selectStyle(){
                // if(document.getElementsByClassName('ant-cascader-menus').length == 0 || document.getElementsByClassName('ant-cascader-menus')[0].style.display == 'none'){
                //     document.getElementById('nav_list').getElementsByClassName('ant-cascader-picker')[0].click()
                // }
            },
            displayRender({ labels }) {
                return labels[labels.length - 1];
            },
            tocenter(){

                let _this = this;
                axios.post('userinfo').then((response) => {
                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    _this.$router.push('/PersonalClass');
                });
            },
            tozhuce(type='login'){
                this.$store.commit('app/setLogin',true);
                this.$store.commit('app/setLoginType',type);
            },
            onChange(value, selectedOptions){
                window.location.href = '/?q='+Math.ceil(Math.random()*10000)+'#/healthy/'+value[0]
            }
		}
    }
</script>
<style>
    #nav_list input{
        border: none !important;
        box-shadow: none !important;
    }

    #nav_list input::placeholder{
        color:#888;
    }


    .ant-cascader-menu .ant-cascader-menu-item-expand{
        min-width:180px;
    }
    .ant-cascader-menu-item{
        padding: 10px 12px;
    }
    .ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled), .ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled):hover{
        color:#1d79c2!important;
    }
    .ant-cascader-menu-item{
        min-width:180px;
    }
</style>
<style scoped>
    /* 导航下拉 */
    .navDown {
        position: absolute;
        top:98px;
        width: 250px;
        z-index: 1;
        background: rgba(255,255,255,0.9);
        box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
        padding:10px 15px;
        font-weight: normal;
    }
    .navDown>h1{
        font-size: 16px;
        line-height: 26px;
        cursor: pointer;
    }
    .navDown>div{
        overflow: hidden;
    }
    .navDown .navList{

    }
    .navDown span{
        font-weight: normal;
        font-size: 14px;
        display: inline-block;
        width: 33%;
        line-height: 26px;
        margin-bottom: 10px;
        float: left;
    }
    .navDown span:hover{
        color: #f31111;
    }
    /* 导航下拉 结束 */
  .nav-box{
      position: relative;
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
    /*overflow: hidden;*/
    text-overflow: ellipsis;
    white-space: nowrap;
  }
    .dl,.zc{
        border: 1px solid #37f;
        font-size: 14px;
        color:#37f;
        height: 26px;
        line-height: 26px;
        border-radius: 26px;
        width: 60px;
        display: inline-block;
        text-align: center;
    }
    .dl{
        background: #37f;
        font-size: 14px;
        color:#fff;
        height: 26px;
    }
    .zc{ margin-left: 10px; }


</style>
