<template>
  <div class="font" @click="$router.push('/ClassDetails/'+id)">
    <div class="title-img">
      <img :src="cover" width="100%" alt="">
    </div>
    <h1 style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">{{title}}</h1>
	  <div><span style="font-size: 12px; color: #2e3033; margin-right: 20px;">{{1500+id*6}}人在学习</span>￥{{price}} <span>原价：<span style="text-decoration: line-through;">{{oldprice}}</span>元</span></div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
    props:{
      id:{
          type: Number,
          required: false,
          default: 0
      },
      cover: {
          type: String,
          required: false,
          default: '/static/index-content1-2.png'
      },
      title:{
          type: String,
          required: false,
          default: ''
      },
      price:{
          type: String,
          required: false,
          default: '0.00'
      },
      oldprice:{
          type: String,
          required: false,
          default: '0.00'
      },
    }
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
