<template>
	<div class="news">
		<div class="image">
			<a href="#"><img src="../assets/slidershow/ad3.jpg"></a>
		</div>

		<div class="new_list">
			<div class="new_list_left">
				<h2>新闻中心</h2>
				<div class="new_list_left_container">
					<ul v-for="label in newsCenter">
						<li> <a href="#">{{ label.title }}</a></li>
					</ul>
				</div>
				
			</div>

			<div class="new_list_right">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data (){
 		return{
 			newsCenter:[
 				{
 					title: '公司新闻',
 					href: '#'
 				},
 				{
 					title: '行业新闻',
 					href: '#'
 				},
 				{
 					title: '媒体新闻',
 					href: '#'
 				},
 				{
 					title: '活动专题',
 					href: '#'
 				},
 				{
 					title: '精彩视频',
 					href: '#'
 				},
 				{
 					title: '资源下载',
 					href: '#'
 				},
 				{
 					title: '公司内刊',
 					href: '#'
 				},
 			]
		}
	}
}
</script>

<style>
	.news{width:100%;}
	.image{width:1000px;margin:0 auto;}
	
	.new_list{width:1000px;margin:0 auto;height: 350px;}
	.new_list_left{width:220px;min-height:350px;border:1px solid #E8E8E8;float:left;}
	.new_list_right{width:770px;min-height:350px;border:1px solid #E8E8E8;float: left;margin-left:6px;}

	.new_list_left h2{height: 35px;line-height: 35px;font-size:18px;font-weight: bold;color: #666;padding-left:20px;
		background: url('../assets/images/titile_bg.gif') repeat-x;
	}
	.new_list_left_container li{height: 30px;line-height: 30px;border:1px dotted #E8E8E8;}
	.new_list_left_container li a{color:#666;background: url('../assets/images/arrow.jpg') no-repeat left center;cursor: pointer; padding-left:15px;display: block;}
	.new_list_left_container li a:hover{color:#009CDF;background: url('../assets/images/li_bg.gif') no-repeat left center;background-color: #F0F0F0;}
</style>



