<template>
  <div class="login-box" v-if="loginshow">
	  <div style="width: 100%; height: 100%; position: absolute; z-index: 2;" @click="guanbishow"></div>
    <div class="login" v-if="$store.state.app.LOGINTYPE=='login'">
        <h1>登录</h1>
        <div class="login-inp">
            <div><input type="text" v-model="mobile" placeholder="请输入您的手机号"></div>
            <div><input type="password" v-model="password" placeholder="请输入您的密码"></div>
        </div>
        <div class="login-but" @click="login">登录</div>
         <span class="login-wang" @click="typeshow('forget')">忘记密码</span>
        <span class="login-zhu" id="login-zhu" @click="typeshow('register')">去注册</span>
    </div>

    <div class="register" v-if="$store.state.app.LOGINTYPE=='register'">
        <h1>注册</h1>
        <div class="login-inp">
            <div><input type="text" v-model="mobile" placeholder="请输入您的手机号"></div>
            <div class="p-r">

                <input type="text" v-model="code" placeholder="请输入验证码">
                <span class="login-yzm" @click="sms">{{tips}}</span>
            </div>
            <div><input type="password" v-model="password" placeholder="请输入您的密码"></div>
            <div><input type="password" v-model="password_confirmation" placeholder="请再次输入您的密码"></div>
        </div>
        <div class="login-but" @click="register">注册</div>
		<span class="login-zhu" @click="typeshow('login')">去登录</span>
	</div>

    <div class="register" v-if="$store.state.app.LOGINTYPE=='forget'">
        <h1>忘记密码</h1>
        <div class="login-inp">
            <div><input type="text" v-model="mobile" placeholder="请输入您的手机号"></div>
            <div class="p-r">
                <input type="text" v-model="code" placeholder="请输入验证码">
                <span class="login-yzm" @click="sms">{{tips}}</span>
            </div>
            <div><input type="password" v-model="password" placeholder="请输入您的密码"></div>
            <div><input type="password" v-model="password_confirmation" placeholder="请再次输入您的密码"></div>
        </div>
        <div class="login-but" @click="forget">找回密码</div>
		<span class="login-zhu" @click="typeshow('login')">去登录</span>
	</div>
  </div>
</template>

<script>

    export default {
        name: 'Login',
		data(){
            return {
                code: '',
                password: '',
                password_confirmation: '',
                mobile: '',
				tips: '获取验证码',
			}
		},
		props:{
            loginshow: false,
		},
		methods: {
            guanbishow(){
                this.$store.commit('app/setLogin',false);
            },
            typeshow(type){
                this.$store.commit('app/setLoginType',type);
            },
            login(){
                axios.post('token',{
                    mobile:this.mobile,
                    password:this.password,
                }).then((response) => {
                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    sessionStorage.setItem('access_token',response.data.token)
                    sessionStorage.setItem('user_mobile',response.data.user.mobile)
                    window.location.reload();
                });
			},
            sms(){
                axios.post('sms',{
                    mobile:this.mobile
				}).then((response) => {
                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    this.tips = 60;
                    let timer = setInterval(()=>{
                        this.tips--
						if(this.tips<=0){
						    clearInterval(timer);
                            this.tips = '获取验证码'
                        }
					},1000)

                });
			},
            register(){
                axios.post('register',{
                    mobile:this.mobile,
                    password:this.password,
                    password_confirmation:this.password_confirmation,
					code:this.code
                }).then((response) => {
                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    sessionStorage.setItem('access_token',response.data.token)
                    sessionStorage.setItem('user_mobile',response.data.user.mobile)
                    window.location.reload();
                });
			},
            forget(){
                axios.post('forget',{
                    mobile:this.mobile,
                    password:this.password,
                    password_confirmation:this.password_confirmation,
                    code:this.code
                }).then((response) => {
                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    sessionStorage.setItem('access_token',response.data.token)
                    sessionStorage.setItem('user_mobile',response.data.user.mobile)
                    window.location.reload();
                });
            }
		}
    }
</script>

<style scoped>
.login-box{
    width: 100%;
    height: 100%;
    position: fixed;
    display:flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.6);
    z-index: 2;
}
 .login, .register{
    width:350px;
    padding:30px 20px;
    background: #fff;
    border-radius:10px;
	position: relative;
	z-index: 999999;
}
.mobile .login,.mobile .register{
    width:80%;
    padding:30px 20px;
    background: #fff;
    border-radius:10px;
	position: relative;
	z-index: 999999;
}

.login h1,.register h1{
    font-size: 24px;
    text-align: center;

}
.login-inp div{
    background:rgba(236,223,254,0.5);
    width:100%;
    height: 46px;
    line-height: 40px;
    margin-bottom: 10px;
    border-radius: 10px;
    padding:0px 20px;
}
.login input,.register input{
    width: 100%;
    height: 46px;
    background: none;
    border:none;
    outline:none;
}
.login-yzm{
    width: 30%;
    height: 46px;
    line-height: 46px;
    text-align: center;
    color:#fff;
    background: #ba8efc;
    border-radius: 0 10px 10px 0;
    position: absolute;
    top:0px;
    right: 0px;
    cursor:pointer;
}
.login-but{
    width:100%;
    height:46px;
    line-height: 46px;
    text-align: center;
    background: #ef1010;
    color:#fff;
    border-radius: 46px;
    cursor: pointer;
}
.login-wang,.login-zhu{
    display: inline-block;
    margin-top: 10px;
    cursor:pointer;
}
.login-wang:hover,.login-zhu:hover{
    color:#ef1010;
}
.login-zhu{
    float: right;
}





/* 注册 */
.register{

}


</style>
