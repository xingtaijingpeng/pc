<template>
  <div class="font" @click="$router.push('/ClassDetails')">
    <img src="/static/index-content2-1.png" width="100%" alt="">
    <h1>特聘请交大、矿大、武警学院等院校资深导师任教</h1>
    <div>￥388.00 <span>原价：999元</span></div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style scoped>

  .nav-box{
    position: fixed;
    top:0;
    background: #fff;
    width: 100%;
    line-height: 98px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  }
  .nav-box span{
    cursor:pointer;
  }

  .font h1{
    font-size: 18px;
    color:#07111b;
    font-weight: normal;
    overflow: hidden;
    display: -webkit-box;
    margin-top: 5px;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  /*  .font div{
      font-size: 26px;
      color: #ed1010; !* red*!
    }*/
  .font div{
    font-size: 18px;
    color: #ed1010; /* red*/
  }
  .font span{
    margin-left: 10px;
    font-size: 14px;
    color: #9199a1; /* 灰色*/
  }

</style>
