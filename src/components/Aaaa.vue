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
				<div class="diandao" style="font-weight: bolder; line-height: 40px;">
                    <img src="../../public/static/qiandao1.png" width="50%" alt=""> <!-- 签到 -->
                    <!--<img src="../../public/static/qiandao2.png" width="50%" alt="">--> <!-- 已签到 -->
                </div>
			</a-col>
		</a-row>
		<a-modal :title="false" :footer="false" v-model="visible" @ok="handleOk">
			777777
		</a-modal>
	</div>
</template>

<script>
    import VueHorizontalCalendar from 'vue-horizontal-calendar';
    import { Empty } from 'ant-design-vue';
    import ARow from "ant-design-vue/es/grid/Row";
    export default {
        name: "aaaa",
		data(){
            return {
                visible: true,
                loading: false,
				btype: 'primary',
				words: '签到',
                bdisabled: false,
                bcurrent: 1,
				btitle: '待签到',
                Gindex: 0
			}
		},
        beforeCreate() {
            this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
        },
		mounted(){
            //判断是否签到
            var now = new Date();
            var year = now.getFullYear(); //得到年份
            var month = now.getMonth();//得到月份
            var date = now.getDate();//得到日期

            let sign = sessionStorage.getItem('qiandao:'+year+month+date)

            if(sign){
                this.loading = false
                this.bdisabled = true
                this.btype = 'dashed'
                this.words = '已签到'
                this.btitle = '已签到'
                this.bcurrent = 2
			}
		},
		computed: {
            signdays(){
                return sessionStorage.getItem('signdays') ? sessionStorage.getItem('signdays') : 0;
			}
		},
		components:{
            ARow,
            VueHorizontalCalendar
		},
		methods: {
            qiandaoa(){
				this.loading = true
				setTimeout(()=>{
                    this.loading = false
                    this.bdisabled = true
                    this.btype = 'dashed'
                    this.words = '已签到'
                    this.btitle = '已签到'
                    this.bcurrent = 2
                    this.Gindex = 1

                    //判断是否签到
                    var now = new Date();
                    var year = now.getFullYear(); //得到年份
                    var month = now.getMonth();//得到月份
                    var date = now.getDate();//得到日期

                    sessionStorage.setItem('qiandao:'+year+month+date,1)
                    sessionStorage.setItem('signdays',(this.signdays+1))

                },2000)
			}
		}
    }
</script>

<style scoped>
    .diandao{
        width: 100%;
        height: 200px;
        background:url("../../public/static/qiandao-back.png") no-repeat;
        padding-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
