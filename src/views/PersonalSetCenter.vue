<template>
    <div>
        <logo></logo>
        <!--<div class="Personal-banner" ></div>-->

        <div class="content">
            <a-row :gutter="[26,26]">
                <a-col :xs="24" :sm="24" :md="6">
                    <littleNav :choose="4"></littleNav>
                </a-col>

                <a-col :xs="24" :sm="24" :md="18">
                    <ul class="tab-box">
                        <li class="choose">个人中心</li>
                        <li>账号设置</li>
                    </ul>
                    <div class="personalSetCenter">
                        <div>
                            <b>基本信息：</b>自我介绍一下，我叫图博教育，你呢？
                        </div>
                        <!-- 头像 -->
                        <div>
                            <b>头像：</b>
                            <a-upload
                                    name="file"
                                    :headers="authHeader()"
                                    listType="picture-card"
                                    class="avatar-uploader"
                                    :showUploadList="false"
                                    :action="baseUrl('upload/image')"
                                    @change="handleChangeLogo"
                                    :style="{border:'none'}"
                            >
                                <div v-if="imageUrl">
                                    <img :src="imageUrl" alt="avatar" class="img_cover" width="100%" />
                                </div>

                                <div v-else>
                                    <a-icon :type="loading ? 'loading' : 'plus'" />
                                    <div class="ant-upload-text">Upload</div>
                                </div>
                            </a-upload>
                        </div>
                        <!-- 昵称 -->
                        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
                            <!-- 输入框 -->
                            <a-form-model-item label="昵称">
                                <a-input placeholder="请输入您的昵称" v-model="form.name" />
                            </a-form-model-item>
                            <!-- 单选 -->
                            <a-form-model-item label="性别">
                                <a-radio-group v-model="form.resource">
                                    <a-radio value="1">男</a-radio>
                                    <a-radio value="2">女</a-radio>
                                </a-radio-group>
                            </a-form-model-item>


                            <a-form-model-item label="个性签名">
                                <a-input placeholder="请输入您的签名"  v-model="form.desc" type="textarea" />
                            </a-form-model-item>
                            <a-form-model-item label="身份信息">
                                12345678925487
                            </a-form-model-item>
                            <a-form-model-item label="真实姓名">
                                <a-input placeholder="请输入您的真实姓名" v-model="form.name" />
                            </a-form-model-item>
                            <a-form-model-item label="身份证">
                                <a-input placeholder="请输入您的身份证" v-model="form.name" />
                            </a-form-model-item>
                            <!-- 按钮 -->
                            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                                <a-button type="primary" ><!--@click="onSubmit"-->
                                    Create
                                </a-button>
                                <a-button style="margin-left: 10px;">
                                    Cancel
                                </a-button>
                            </a-form-model-item>
                        </a-form-model>
                        <!--<div><b>昵称：</b><input type="text" placeholder="请输入您的昵称"></div>
                        <div><b>性别：</b><input type="radio"></div>
                        <div><b>个性签名：</b><input type="text" placeholder="请输入您的签名"></div>
                        <div><b>身份信息：</b>身份信息身份信息身份信息身份信息</div>
                        <div><b>真实姓名：</b>1872154651356893</div>
                        <div><b>身份证：</b><input type="text" placeholder="请输入您的身份证"></div>-->
                    </div>

                </a-col>
            </a-row>
        </div>

        <Footer></Footer>
    </div>

</template>

<script>

	import '../assets/css/common.css'
    import Logo from '@/components/Logo'
    import ListFont from '@/components/ListFont'
    import Footer from '@/components/Footer'
    import LittleNav from '@/components/LittleNav'

    import { mapState } from 'vuex'

    export default {
        components: {
            Logo,ListFont,Footer,LittleNav
        },
        data() {
            return {
                imageUrl: 'static/head-icon.png',
                /* 组件  */
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                form: {
                    name: '',
                    region: undefined,
                    date1: undefined,
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
            };
        },

        computed:{
            ...mapState({
                mobile: state => state.user.mobile,
                avatar: state => state.user.avatar,
            }),
        },
        methods: {
            handleChangeLogo({file}) {
                if (file.status === 'uploading') {
                    this.loading = true;
                    return;
                }
                if (file.status === 'done') {
                    // Get this url from response in real world.
                    this.loading = false;
                    this.imageUrl = file.response.data
                    //设置头像
                    axios.post('change/cover',{
                        cover: this.imageUrl
                    }).then((response) => {
                        if(!response.status){
                            return this.$message.error(response.message);
                        }

                    });
                }
            },
        }
    };




</script>


<style scoped>
    .personalSetCenter{
        text-align: left;
    }
    .ant-upload-picture-card-wrapper{
        width: 88px;
    }
    .personalSetCenter>div{
        margin-bottom: 20px;
    }
    .personalSetCenter>div b{
        width: 80px;
        display: inline-block;
    }
    .personalSetCenter>div input{
        width: 200px;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 5px 10px;
        display: inline-block;
    }
    .mobile .ant-form-item-control{
        line-height: 0!important;
    }
    .mobile .ant-form-item-control-wrapper{
        line-height: 0!important;
    }
</style>
