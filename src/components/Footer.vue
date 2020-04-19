<template>
    <div class="footer" style="white-space: pre-wrap;">
        <div style="height: 100%; text-align: left; max-width: 1200px; margin: 0 auto;">
            <template v-if="base">{{base.banquan}}</template>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Logo",
        computed: {
            ...mapState({
                device: state => state.app.DEVICE,
                base: state => state.app.BASE,
            }),
        },
        methods: {
            toBr(str){
                return str.replace(/[\n\r]/g,"<br>")
            }
        }
    }
</script>

<style scoped>

</style>






