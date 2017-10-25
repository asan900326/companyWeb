<template>
	<div class="list_box">
		<div class="container">
			<h2>新闻列表</h2>
			<div class="news_list">
				<ul v-for="news in newsList">
					<li> 
						<a href="#">{{ news.title }}</a>
						<span>{{ news.time }}</span>
					</li>
				</ul>
			</div>
			<div class="pages_num">
				<ul v-for="(num,index) in pageNum">
					<li>
						<a href="#" >
							{{ num.title }}
						</a>
				</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data (){
		return{
			pageNum:[
				{
					title: '首页',
					href: '#'
				},
				{
					title: '<',
					href: '#'
				},
				{
					title: '1',
					href: '#'
				},
				{
					title: '2',
					href: '#'
				},
				{
					title: '3',
					href: '#'
				},
				{
					title: '...',
					href: '#'
				},
				{
					title: '>',
					href: '#'
				},
				{
					title: '末页',
					href: '#'
				}
				
			],
			newsList:[
				{
					title:'【慕课访谈 用户篇】"有为屌丝"在路上',
					time:'2014-06-20',
					href: '#'
				},
				{
					title:'【有奖活动】给父亲的三行书信',
					time:'2014-06-10',
					href: '#'
				},
				{
					title:'《程序员，请晒出你的童年》活动获奖公告',
					time: '2014-06-07',
					href: '#'
				},
				{
					title:'【慕课访谈】破茧成蝶--美女程序员的蜕变史',
					time: '2014-06-05',
					href: '#'
				},
				{
					title:'【慕课访谈 用户篇】"有为屌丝"在路上',
					time:'2014-06-20',
					href: '#'
				},
				{
					title:'【有奖活动】给父亲的三行书信',
					time:'2014-06-10',
					href: '#'
				},
				{
					title:'《程序员，请晒出你的童年》活动获奖公告',
					time: '2014-06-07',
					href: '#'
				},
				{
					title:'【慕课访谈】破茧成蝶--美女程序员的蜕变史',
					time: '2014-06-05',
					href: '#'
				},
				{
					title:'【慕课访谈 用户篇】"有为屌丝"在路上',
					time:'2014-06-20',
					href: '#'
				},
				{
					title:'【有奖活动】给父亲的三行书信',
					time:'2014-06-10',
					href: '#'
				},
				{
					title:'《程序员，请晒出你的童年》活动获奖公告',
					time: '2014-06-07',
					href: '#'
				},
				{
					title:'【慕课访谈】破茧成蝶--美女程序员的蜕变史',
					time: '2014-06-05',
					href: '#'
				},
		
			]
		}
	}
}
</script>

<style scoped>
.list_box{width:770px;}
.container h2{
	font-size: 14px;
	font-family: "微软雅黑";
	color: #666;
	height: 35px;
	background: url('../../assets/images/type_bg.png') repeat-x;
	line-height: 35px;
	padding-left: 20px;
}

.news_list li{
	height: 30px;
	line-height: 30px;
	border-bottom: 1px dotted #E8E8E8;
	background: url('../../assets/indexMain/li_bg2.gif') no-repeat left center; 
	padding-left:20px;
	display: block;

}
.news_list li a{
	float:left;
	width:400px;
	color: black;
}
.news_list li span{
	float: right;
	padding-right:20px;
}
.news_list li a:hover{
	color: red;
	text-decoration: underline;
}

.pages_num{width:400px;margin:0 auto;padding:10px 0;}
.pages_num li{float: left;padding:5px;}
.pages_num li a{border:1px solid #E0E0E0;min-width:20px;height: 20px; line-height: 20px;text-align: center;padding:5px;display: inline-block;}
.pages_num li a:link,.pages_num li div a:visited{color: #000;}
.pages_num li a:hover,.pages_num li div a:active{background:#cc1b1b;color: #FFF;}

</style>