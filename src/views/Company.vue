<template>
    <div>
        <logo choose="4"></logo>
        <!-- ddd -->
        <div>
            <img src="/static/company-button.jpg" width="100%" alt="">
        </div>

        <div class="content">
            <ul class="tab-box">
                <li class="choose" @click="$router.push('/company')">公司介绍</li>
                <li @click="$router.push('/CompanyTeam')">师资团队</li>
            </ul>
            <div class="company-font">
                <a-row :gutter="[60,60]">
                    <a-col :xs="24" :sm="8" :md="8">
                        <img src="/static/company-img.png" width="80%" style="margin-top: 100px" alt="">
                    </a-col>
                    <a-col  :xs="24" :sm="16" :md="16">
                        <div class="company-title">
                            <h1>标题标题标题标题标题标题</h1>
                        </div>
                        <p>有些人担心受新冠病毒疫情影响，会出现食品短缺，市场上出现一些囤积抢购米面粮油的情况，4月4日国务院联防联控机制就做好疫情期间粮食供给和保障工作情况召开的发布会上，农业农村部发展规划司司长魏百刚介绍了我国粮食产量、人均粮食占有量、粮食库存量、我国谷物进口量四组数据，告诉你囤粮真没必要。</p>
                        <p>“我国连年丰收，粮食产量连续五年稳定在1.3万亿斤以上，小麦多年供求平衡有余，稻谷供大于求，人均粮食占有量470公斤，库存消费比远高于联合国粮农组织提出的17%—18%的水平，特别是两大口粮，小麦和稻谷库存大体相当于全国人民一年的消费量。我国谷物进口数量不大，主要调剂需求结构。”魏百刚说，“所以市场上的粮食以及各类副食品都是货足价稳，谁买谁有，没必要屯粮，粮食还是要吃新的好。”</p>
                        <p>在新闻发布会上，科技日报记者提问随着疫情在全球蔓延，一些国家限制粮食出口，国际粮食价格出现上涨，国际粮价上涨会不会传导到国内？</p>
                        <p>农业农村部发展规划司司长魏百刚回应，受新冠肺炎疫情影响，近期国际粮食价格确实有所上涨，粮食安全现在又成为国际上的一个热点问题，对此我们应该冷静理性看待。</p>
                        <p>据了解，当前世界粮食供给是充足的，2019/2020年度世界粮食（不包含大豆）供给量为34.7亿吨，总需求量为26.7亿吨，期末库存近8亿吨，库存消费比近30%，从全球供应总量来看，不存在短缺问题。近期国际粮价上涨更多是疫情造成恐慌性消费的影响，我国谷物净进口量1468万吨，不到300亿斤，占我国谷物总消费量的2%左右，国际粮价上涨对国内粮价的影响十分有限。</p>
                    </a-col>
                </a-row>
            </div>
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
export default {
  name: 'Home',
    data() {
        return {
            data,
        };
    },
  components: {
        Logo,ListFont,Footer
  }
}
</script>


<style scoped>
    .healthy-banner-font{
        position: absolute;
        top:0;
    }

    .company-title{
        text-align: right;
        padding-top: 35px;
        background: url('/static/company-title.png') right no-repeat;
    }
    .company-font p{
        font-size: 16px;
        text-indent: 2rem;
    }

</style>
