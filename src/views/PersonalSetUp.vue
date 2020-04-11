<template>
    <div>
        <logo></logo>
        <div>
            <div class="content" style="position: relative;">
                <div class="personalCassFont">
                    <div>个人中心</div>
                    <span>依托大数据系统、协助企业快速对接办理</span>
                </div>
            </div>
            <img src="/static/Personal-banner.jpg" width="100%" alt="">
        </div>

        <div class="content">
            <a-row :gutter="[26,26]">
                <a-col :xs="24" :sm="24" :md="6">
                    <littleNav :choose="4"></littleNav>
                </a-col>

                <a-col :xs="24" :sm="24" :md="18">
                    <ul class="tab-box">
                        <li class="choose">账号设置</li>
                    </ul>
                    <div>
                        <div class="setUp">
                            <a-row>
                                <a-col :span="2"><img src="/static/phone.png"/></a-col>
                                <a-col :span="22">
                                    <h1>账户绑定手机</h1>
                                    <p>18731133002</p>
                                </a-col>
                            </a-row>
                        </div>
                        <div class="setUp">
                            <a-row>
                                <a-col :span="2"><img src="/static/message.png"/></a-col>
                                <a-col :span="22" style="margin-bottom: 0;">
                                    <h1>修改密码：</h1>
                                    <div>原始密码：<input type="password" placeholder="请输入原始密码"></div>
                                    <div>最新密码：<input type="password" placeholder="请输入最新密码"></div>
                                    <div>再次输入：<input type="password" placeholder="请输入再次输入"></div>
                                </a-col>
                            </a-row>
                            <div class="but-red">提交</div>
                        </div>
                    </div>

                </a-col>
            </a-row>
        </div>

        <Footer></Footer>
    </div>

</template>

<script>
// https://www.antdv.com/components/radio-cn/
	import '../assets/css/common.css'
    import Logo from '@/components/Logo'
    import ListFont from '@/components/ListFont'
    import Footer from '@/components/Footer'
    import LittleNav from '@/components/LittleNav'
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

/* 复制 */

export default {
    components: {
        Logo,ListFont,Footer,LittleNav
    },
    data() {
        return {
            data,
        };
    },
};




</script>


<style scoped>
    .setUp{
        padding: 20px 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
        color: #666666;
        margin-bottom: 20px;
    }
    .setUp h1{
        font-size: 20px;
    }
    .setUp p{
        font-size: 18px;
        margin: 0;
    }
    .setUp input{
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 8px 10px;
    }
    .setUp div{
        font-size: 16px;
        margin-bottom: 10px;
    }
    .but-red{
        position: absolute;
        bottom:60px;
        right: 40px;
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #f31111;
        border-radius: 10px;
        color:#fff;
        font-size: 18px;
    }
</style>
