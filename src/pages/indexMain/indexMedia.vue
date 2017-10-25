<template>
	<div class="indexMedia">
		<div class="title">
			<h2 class="title_left">媒体聚焦</h2>
			<span class="title_right"><a href="#">More&gt;&gt;</a></span>
		</div>
		<div class="video">
			<embed src='http://player.youku.com/player.php/sid/XMzAxOTQ4ODU1Mg==/v.swf' allowFullScreen='true' quality='high' width='220' height='140' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>
		</div>
		<div class="image">
			<a href="#"><img src="../../assets/indexMain/app.jpg" ></a>
		</div>
			
	</div>

</template>

<script>
export default{
	data (){
		return{
		
		}
	}
}
</script>

<style scoped>
	.title{height: 35px;border-bottom: 2px solid #E8E8E8;font-family: "微软雅黑";}
	.title_left{width:70%;float:left;line-height: 35px;font-size:14px;font-weight:bold;color:#786F66;padding-left:20px;}
	.title_right{width:20%;float:right;line-height: 35px;color: #999999;}
	a:hover{color: red;}
	
	.video{margin:5px;border:1px solid #E8E8E8;}
	.image{border:1px solid #E8E8E8;}
</style>







