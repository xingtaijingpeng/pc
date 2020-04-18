<template>
    <div id="app" :class="[device]">
        <a-spin :spinning="loading ? true : false" size="large" :style="{background:'#000'}">
            <a-icon slot="indicator" type="loading" spin />
            <router-view :style="{background:'#fff'}" />
        </a-spin>
    </div>
</template>
<script>

    import { deviceEnquire } from '@/plugins/device'

    export default {
        name: 'app',
        data(){
            return {
                device: ''
            }
        },
        mounted(){
            deviceEnquire(deviceType => {
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
        }
    }
</script>
<style>
    body,#app{
        padding: 0;
        margin: 0;
    }
</style>
