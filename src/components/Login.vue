<template>
  <div class="login-box">
    <div class="login">
        <h1>登录</h1>
        <div class="login-inp">
            <div><input type="text"  placeholder="请输入您的手机号"></div>
            <div class="p-r">
                <input type="text" placeholder="请输入验证码">
                <span class="login-yzm">获取验证码</span>
            </div>
            <div><input type="text" placeholder="请输入您的密码"></div>
        </div>
        <div class="login-but">登录</div>
        <!-- <span class="login-wang">忘记密码</span> -->
        <span class="login-zhu">去登录</span>
    </div>

    <div class="register">
        <h1>注册</h1>
        <div class="login-inp">
            <div><input type="text"  placeholder="请输入您的手机号"></div>
            <div class="p-r">

                <input type="text" placeholder="请输入验证码">
                <span class="login-yzm">获取验证码</span>
            </div>
            <div><input type="text" placeholder="请输入您的密码"></div>
            <div><input type="text" placeholder="请再次输入您的密码"></div>
        </div>
        <div class="login-but">注册</div>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Login',
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
    z-index: 99999;
}
.login,.register{
    width:375px;
    padding:30px 20px;
    background: #fff;
    border-radius:10px;
}
.register{
    display: none;
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
    height: 26px;
    margin-top: 10px;
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
