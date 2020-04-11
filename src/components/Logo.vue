<template>
  <div class="nav-box">
    <div class="content">
      <a-row :gutter="[8,0]">
        <a-col span="9"><span>LOGO</span></a-col>
        <a-col span="3" @click="$router.push('/')"><span>首页</span></a-col>
        <a-col span="3" @click="$router.push('/healthy')"><span>健康管理师</span></a-col>
        <a-col span="3" @click="$router.push('/fireControl')"><span>消防工程师</span></a-col>
        <a-col span="3" @click="$router.push('/company')"><span>公司介绍</span></a-col>
        <a-col span="3"@click="$router.push('/PersonalClass')">
          <span>登录</span>/
          <span>注册</span>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
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


</style>
