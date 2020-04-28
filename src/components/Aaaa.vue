<template>
	<div class="zhi" style="margin-top: 30px;">
		<a-row>
			<a-col :xs="24" :sm="14" :md="14">
				<h3 style="font-weight: bolder; line-height: 40px;">直播课表</h3>
				<vue-horizontal-calendar></vue-horizontal-calendar>
				<a-empty :image="simpleImage" description="暂无直播安排" />
			</a-col>
			<a-col span="1"></a-col>
			<a-col :xs="24" :sm="9" :md="9">
				<h3 style="font-weight: bolder; line-height: 40px;">每日签到</h3>

			</a-col>
		</a-row>
	</div>
</template>

<script>
    import VueHorizontalCalendar from 'vue-horizontal-calendar';
    import { Empty } from 'ant-design-vue';
    export default {
        name: "aaaa",
        beforeCreate() {
            this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
        },
		components:{
            VueHorizontalCalendar
		}
    }
</script>

<style scoped>

</style>
