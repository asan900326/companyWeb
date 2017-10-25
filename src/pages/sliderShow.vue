<template>
	<!-- 设置定时器，即鼠标移入和移出事件 -->
	<div class="slideshow" @mouseover="clearInv" @mouseout="runInv">
	      <div class="slide-img">
	      	<a :href="slides[nowIndex].href">
	      		<transition name="slide-trans">
	      			<img v-if="isShow" :src="slides[nowIndex].src">
	      		</transition>
	      		<transition name="slide-trans-old">
	      			<img v-if="isShow" :src="slides[nowIndex].src">
	      		</transition>
	      	</a>
	      </div>
		<div class="list">
	    	<ul class="slide-pages">
	    		<li @click="goto(prevIndex)">&lt;</li>
	    		<li v-for="(item,index) in slides"
	    		@click="goto(index)">
	    		<a :class="{on: index===nowIndex}">{{ index + 1 }}</a>
	    		</li>
	    		<li @click="goto(nextIndex)">&gt;</li>
	    	</ul>
	    </div>
 	</div>
</template>

<script>
// import swiper from 'vue-awesome-swiper'
// import swiperSlide from 'vue-awesome-swiper'

export default{
	props: {
		slides: {
			type: Array,
			default: []
		},
		inv: {
			type: Number,
			default: 1000
			}		
	},
	data (){
		return{
			nowIndex:0,
			isShow: true
		}

	},
	computed:{
		prevIndex (){
			if(this.nowIndex ===0){
				return this.slides.length -1
			}
			else{
				return this.nowIndex -1
			}
		},
		nextIndex (){
			if(this.nowIndex === this.slides.length -1){
				return 0
			}
			else{
				return this.nowIndex +1
			}
		}
	},
	methods:{
		goto (index){
			this.isShow = false
			setTimeout(()=> {
				this.isShow = true
				this.nowIndex = index
			},3000 )
		},
		runInv (){
			this.invId = setInterval(()=>{
				this.goto(this.nextIndex)
			},this.inv)
		},
		clearInv(){
			clearInterval(this.invId)
		}
	},
	mounted (){
		this.runInv()
	}
}


</script>

<style>
	.slide-trans-enter-active{
		transition: all 1s;
	}
	.slide-trans-enter{
		transform: translateX(900px;);
	}
	.slide-trans-old-leave-active{
		transition: all 1s;
		transform: translateX(-900px;);
	}

	.slideshow{overflow: hidden;width:1000px;height: 310px;margin-bottom: 10px;position: relative;}
	.slide-img{width: 100%;}
	.slide-img img{width: 100%;position: absolute;top:0;}
	.list{width:1000px;position: absolute;bottom: 10px;}
	.slide-pages{width:200px;margin:0 auto;}
	.slide-pages li{display: inline-block;padding:0 10px;cursor: pointer;color:#fff;}
	.slide-pages li .on{text-decoration: underline;}
</style>





