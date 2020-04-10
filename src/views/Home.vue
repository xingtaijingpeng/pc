<template>
    <div class="header">
        <a-row :gutter="[8,8]">
            <a-col :xs="24" :md="12" :style="{background:'#000'}">col-8</a-col>
            <a-col :xs="24" :md="12" :style="{background:'#000'}">col-8</a-col>
        </a-row>
    </div>
</template>

<script>
// https://www.antdv.com/components/radio-cn/
	import '../assets/css/common.css'
export default {
  name: 'Home',
  components: {

  }
}
</script>


<style scoped>
 .header{
     max-width: 1200px;
     margin: 0 auto;
 }





</style>
