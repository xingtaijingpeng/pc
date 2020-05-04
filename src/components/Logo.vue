<template>
    <div>
        <div :style="device=='mobile'? {height: '98px'}:{ height: 0}"></div>
        <div class="nav-box" :style="device=='mobile'? {position: 'fixed',top:'0',zIndex:2}:{}">
            <div :class="['content']" v-if="device!='mobile'">
                <a-row :gutter="[8,0]">
                    <a-col :xs="4" :md="6" @click="$router.push('/')"><img class="headImg-l" v-if="base" :src="base.logo" height="70px" /></a-col>
                    <a-col :xs="0" :md="3" @click="$router.push('/')"><span :class="$route.path == '/' ? 'red' : ''">首页</span></a-col>
                    <a-col :xs="5" :md="4" id="nav_list" @mouseover="selectStyle" @mouseleave="aaaaaa">
                        <span>课程分类</span>
                        <div class="navDown" v-if="navDown">
                            <div v-for="item in options">
                                <h1 @click="aaadd(item.id)">{{item.name}}</h1>
                                <div class="navList">
                                    <span v-for="ite in item.children" @click="aaadd(item.id)">{{ite.name}}</span>
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
                                <a-menu-item :key="item.id" v-for="item in options">
                                    <a @click="$router.push('/healthy/'+item.id)">{{item.name}}</a>
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
    </div>

</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Logo',
        data(){
            return {
                navDown: false,
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
            aaadd(id){
                window.location.href='/index.html#/healthy/'+id
			},
            aaaaaa(){
                this.navDown = false;
            },
            selectStyle(){
                this.navDown = true;
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
        width: 300px;
        z-index: 1;
        background: rgba(0,0,0,0.6); /* rgba(0,154,255,0.2) */
        box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
        padding:10px 15px;
        font-weight: normal;
		color: #fff;
        border-radius:0 0 5px 5px;
    }
    .navDown h1{
        font-size: 16px;
        line-height: 26px;
        cursor: pointer;
		color: #fff;
        background: url("/static/right.png") right center no-repeat;
        background-size: 20px auto;
	}
    .navDown>div{
        overflow: hidden;
		margin-bottom: 20px;
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
        color: #fff;
        font-weight: bold;
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
