<template>
    <div id="app" :class="[device]">
        <router-view/>
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
