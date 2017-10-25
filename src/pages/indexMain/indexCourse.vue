<template>
	<div class="indexcourse">
		<div class="title">
			<h2 class="title_left">课程中心</h2>
			<span class="title_right"><a href="#">More&gt;&gt;</a></span>
		</div>

		<div class="pic_news">
			<span class="pic_news_left"><a href="#"><img src="../../assets/indexMain/css.jpg" alt=""></a></span>
			<div class="pic_news_right">
			 	<h2><a href="">CSS圆角进化论</a></h2>
				<p>CSS圆角的实现，经历了三大发展阶段：背景图片方式、CSS2.0+HTML样式模拟、CSS3.0圆角属性。本案例详细讲解每一种的实现方式，并对实现的优缺点进行了对比分析.</p>
			</div>
			
		</div>

		<div class="course_list">
			<div class="container">
				<ul v-for="course in courseList">
					<li><a :href="course.href">{{ course.title }}</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data (){
		return{
			courseList:[
				{
					title: 'PHP开发',
					href:'#'
				},
				{
					title: '前端开发',
					href:'#'
				},
				{
					title: 'JAVA开发',
					href:'#'
				},
				{
					title: 'Android开发',
					href:'#'
				},
			]
		}
	}
}
</script>

<style scoped>
	.title{height: 35px;border-bottom: 2px solid #E8E8E8;font-family: "微软雅黑";}
	.title_left{width:70%;float:left;line-height: 35px;font-size:14px;font-weight:bold;color:#786F66;padding-left:20px;}
	.title_right{width:20%;float:right;line-height: 35px;color: #999999;text-align: right;padding-right:10px;}
	a:hover{color: red;}
	
	.pic_news{height:106px;padding:5px 0;border-bottom: 2px solid #E8E8E8;}
	.pic_news_left{float:left;padding-left:5px;}
	.pic_news_right{float:left;margin-left:10px;width:237px;}
	.pic_news_right h2{font-size:14px;padding-bottom: 5px;}
	.pic_news_right h2 a{color:red;}
	.pic_news_right p{font-size:5px;}

	.course_list{width:410px;height: 95px;}
	.container{width:360px;margin:0 auto;line-height: 95px;}
	.container li{float: left;padding-right: 35px;}
	.container li a{color:#999999;}
	.container li a:hover{color:red;}
	
</style>







