<template>
	<div>

		<div class="container"></div>

		<!-- 客服部分 -->
		<div style="right:-230px;" class="contactusdiyou">
			<div class="hoverbtn">
				<span>联</span><span>系</span><span>我</span><span>们</span>
				<img class="hoverimg" src="images/hoverbtnbg.gif" height="9" width="13">
			</div>
			<div class="conter">
				<div class="con1">
					<dl class="fn_cle">
						<dt><img src="images/tel.png" height="31" width="31"></dt>
						<dd class="f1">咨询热线：</dd>
						<dd class="f2"><span class="ph_num">188-9999-8888</span></dd>
					</dl>
				</div>
				<div class="blank0"></div>
				<div class="qqcall">
					<dl class="fn_cle">
						<dt><img src="images/zxkfqq.png" height="31" width="31"></dt>
						<dd class="f1 f_s14">在线客服：</dd>
						<dd class="f2 kefuQQ">
							<span>客服一</span>
							<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1111111111&amp;site=qq&amp;menu=yes"></a>
							<span>客服二</span>
							<a target="_blank" href="http://sc.chinaz.com/jiaoben/"></a>
						</dd>
					</dl>
					<div class="blank0"></div>
				</div>
				<div class="blank0"></div>
				<div class="weixincall">
					<dl class="fn_cle">
						<dt><img src="images/weixin.png" height="31" width="31"></dt>
						<dd class="f1">官方微信站：</dd>
						<dd class="f3"><img src="images/wechat_code.png" height="73" width="73"></dd>
					</dl>
				</div>
				<div class="blank0"></div>
				<div class="dytimer">
					<span style="font-weight: bold;">公司官网：</span>
					<span><a href="">sc.chinaz.com</a></span>
				</div>
			</div>
		</div>

		<div class="diyoumask" ></div>
	</div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "Qq",
		mounted(){
            $(function() {
                $(".contactusdiyou").hover(function() {
                    $(".hoverimg").attr("src","images/hoverbtnbg1.gif");
                    $('.diyoumask').fadeIn();
                    $('.contactusdiyou').animate({right:'0'},300);
                }, function() {
                    $(".hoverimg").attr("src","images/hoverbtnbg.gif");
                    $('.contactusdiyou').animate({right:'-230px'},300,function(){});
                    $('.diyoumask').fadeOut();
                });
            });
		}
    }
</script>

<style scoped>
	/*优胜空间 */
	.contactusdiyou {position: fixed; right: -230px; bottom: 0px; _position: absolute; width: 230px; height: 100%; background: #009aff; z-index: 99999999999;  _margin-bottom:0px; _top: expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0))); transition:all .5s ease; }
	.contactusdiyou .hoverbtn{width:30px; height:129px; padding-top:20px; cursor: pointer; position:absolute; top:50%; margin-top:-66px;left:-30px; font-size:14px; color:#fff; background:#009aff; -webkit-border-radius: 3px 0px  0px 3px; -moz-border-radius: 3px 0px  0px 3px; -o-border-radius: 3px 0px  0px 3px;      border-radius: 3px 0px  0px 3px; -moz-box-shadow: -4px 4px 4px -4px #000; -webkit-box-shadow: -4px 4px 4px -4px #000; box-shadow: -4px 4px 4px -4px #000;} .contactusdiyou .hoverbtn span{width:30px; height:19px;line-height: 19px; text-align: center; overflow:hidden; float:left;}
	.contactusdiyou .hoverbtn .hoverimg{width:13px; height:9px; margin:10px 0px 0px 10px; float:left; display:inline;background-repeat: no-repeat;}
	.hoverimg2{background:url(/static/images/hoverbtnbg1.png) no-repeat; }
	.contactusdiyou .conter{width:186px; height:560px; margin-left:22px;   position:absolute; top:55%;*margin-top:-140px;margin-top:-280px;}
	.contactusdiyou .conter .con1{ border-bottom:1px solid #6a6a6a; padding-bottom:22px;}
	.contactusdiyou .conter .con1 dl dt{width:31px; height:31px; float:left;    position: relative;
		top: 32px;}
	.contactusdiyou  dl .f1{width:142px; height:36px;line-height: 36px; float:right; font-size:14px;_font-size: 14px;*font-size: 15px; color:#fff;vertical-align: top; font-weight: bold;}
	.contactusdiyou  dl .f2{ width:142px; float:right; font-size:12px; color:#fff; height:30px;line-height: 30px; float:right;}
	.kefuQQ a{ background:url(/static/images/button-custom-qq.gif)  no-repeat; width:70px; height:20px; display:inline-block; vertical-align:middle;}
	.kefuQQ a:hover{ background:url(/static/images/button-custom-qq-h.gif)  no-repeat;}
	.contactusdiyou .conter .con1 dl dd .ph_num{ font:18px 'Microsoft yahei';*font-size: 16px;_font-size: 16px; color:#fff; height:25px;}

	.contactusdiyou .qqcall{padding:22px 0px;border-bottom:1px solid #6a6a6a;}
	.contactusdiyou .qqcall dl dt{width:31px; height:31px; float:left; position: relative;
		top: 32px;}

	.contactusdiyou .weixincall{float:right;padding:22px 0; border-bottom:1px solid #6a6a6a;}
	.contactusdiyou .weixincall dl dt{width:31px; height:31px; float:left; position: relative;
		top: 32px;}


	.contactusdiyou .weixincall .f3{float: right;width:73px; height:auto; margin-right:69px; display:inline;}
	.contactusdiyou .weixincall .f3 img{width: 73px;height: auto;}
	.contactusdiyou .dytimer{    float: right; width: 160px; height: 40px; padding: 16px 0px 15px 0px; /* background: #007b77; */ margin: 20px 0px 0px 0px;} .contactusdiyou .dytimer span{display:block; height:20px; line-height:20px; font-size:14px; color:#fff;} .diyou{_position: absolute; _bottom: auto;_margin-bottom:0px; z-index:99999999999; _top: expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));} .diyoumask { position:fixed; left: 0; top: 0; z-index: 100000; width:100%; height:100%; opacity:0.3;filter:alpha(Opacity=30); background:#000; display:none;} .fn_cle:after {visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; } /***联系我们***/


</style>
