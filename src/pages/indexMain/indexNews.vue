<template>
	<div class="indexnews">
		<div class="title">
			<h2 class="title_left">新闻中心</h2>
			<span class="title_right"><a href="#">More&gt;&gt;</a></span>
		</div>

		<div class="pic_news">
			<span class="pic_news_left"><a href="#"><img src="../../assets/indexMain/news.jpg" alt=""></a></span>
			<div class="pic_news_right">
			 	<h2><a href="">520 幕女神喊你来表白！</a></h2>
				<p>
					活动时间: 5月20日——5月25日<br>获奖公布事件:5月26日<br><span><a href="#">Learn More&gt;&gt;</a></span>
				</p>
			</div>
			
		</div>

		<div class="news_list">
			<ul v-for="item in newsList">
				<li>
					<a :href="item.href"> {{ item.title }}</a>
					<span> {{ item.time }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data (){
		return{
			newsList:[
				{
					title: '【慕课访谈 用户篇】“有为屌丝”在路上',
					time: '2014-06-20',
					href:'#'
				},
				{
					title: '【有奖活动】给父亲的三行书信',
					time: '2014-06-10',
					href:'#'
				},
				{
					title: '《程序员，请晒出你的童年》',
					time: '2014-06-07',
					href:'#'
				},
				{
					title: '【慕课访谈】破茧成蝶--美女程序员的蜕变史',
					time: '2014-06-05',
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
	
	.pic_news{height:100px;padding:5px 0;border-bottom: 2px solid #E8E8E8;}
	.pic_news_left{float:left;padding-left:5px;}
	.pic_news_right{float:left;margin-left:20px;}
	.pic_news_right h2{font-size:14px;padding-bottom: 5px;}
	.pic_news_right h2 a{color: red;}
	.pic_news_right p{font-size:12px;line-height: 25px;}
	.pic_news_right p span{color:red;}

	.news_list{height: 100px;}
	.news_list ul li{
		height: 22px;
		line-height: 22px;
		background: url('../../assets/indexMain/li_bg2.gif') no-repeat left center; 
		padding-left:10px;
		border:1px dotted #E8E8E8;
	}
	.news_list ul li a{
		width:250px;
		float: left;
		/*设置文本超出部分使用省略号表示	*/
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.news_list ul li span{float: right;margin-right: 5px;color: #E8E8E8;}
</style>







