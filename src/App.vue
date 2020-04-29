<template>
    <div id="app" :class="[device]">
		<login :loginshow="$store.state.app.LOGIN"></login>
		<a-spin :spinning="loading ? true : false" size="large" :style="{background:'#000'}">
            <a-icon slot="indicator" type="loading" spin />
            <router-view :style="{background:'#fff'}" />
        </a-spin>
    </div>
</template>
<script>

    import { deviceEnquire } from '@/plugins/device'
    import Login from '@/components/Login'
    import wx from 'weixin-js-sdk'

    export default {
        name: 'app',
        data(){
            return {
                device: ''
            }
        },
		components: {
            Login
		},
        created(){
            let open = localStorage.getItem('openid');
            if(!open && this.isWeiXin()){
                let code = this.getUrlKey('code');
                if(!code){
                    let url = window.location.href;
                    window.location.href= "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx90105c6e46750e7c&response_type=code&scope=snsapi_userinfo&state=STATE&redirect_uri="+encodeURI(url)+"#wechat_redirect"
                }else{
                    //请求openid
                    axios.post('/getWeixinUser',{
                        code: code
                    }).then(function(res){
                        localStorage.setItem('openid',res.data.openid);
                    })
                }
            }
        },
        mounted(){
            deviceEnquire(deviceType => {
                this.$store.commit('app/setDevice',deviceType);
                this.device = deviceType;
            })

            //设置 store 的base
            axios.post('base').then((response) => {

                if(!response.status){
                    return this.$message.error(response.message);
                }
                this.$store.commit('app/setBase',response.data);
            });
        },
        computed: {
            loading(){
                return this.$store.state.loading.index;
            }
        },
        methods: {
            getUrlKey: function(name){
                return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(window.location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
            },
            isWeiXin:function() {
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>
<style>
    body,#app{
        padding: 0;
        margin: 0;
    }
</style>
