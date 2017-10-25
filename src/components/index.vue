<template>
  <div class="index">
    
     <div class="index-container">
      <slider-show :slides="slides" :inv="invTime"></slider-show>
     </div>

     <div class="main">
       <div class="news">
        <index-news></index-news>
       </div>
       <div class="course">
         <index-course></index-course>
       </div>
       <div class="media" >
         <index-media></index-media>
       </div>
     </div>

  </div>
</template>

<script>
import SliderShow from '../pages/sliderShow'
import IndexNews from '../pages/indexMain/indexNews'
import IndexCourse from '../pages/indexMain/indexCourse'
import IndexMedia from '../pages/indexMain/indexMedia'


export default {
  components:{
    SliderShow,
    IndexNews,
    IndexCourse,
    IndexMedia
  },
  data () {
    return {
      invTime:3000,
        slides:[
      {
        title:'1',
        src: require('../assets/slidershow/ad1.jpg'),
        href:'#'
      },
      {
        title:'2',
        src: require('../assets/slidershow/ad2.jpg'),
        href:'#'
      },
      {
        title:'3',
        src: require('../assets/slidershow/ad3.jpg'),
        href:'#'
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{width:100%;}
.index-container{width: 1000px;margin:0 auto;height: 310px;}
.main{width: 1000px;margin:0 auto;height: 250px;background:#FFF;margin-top: 5px;}
.news{width: 340px;height: 250px;border:1px solid #E8E8E8;}
.course{width: 410px;height: 250px;border:1px solid #E8E8E8;margin:0 7px;}
.media{width: 230px;height: 250px;}
.news,.course,.media{float:left;}

</style>
