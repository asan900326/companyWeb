<template>
  <div id="container">

    <header class="header">

       <div class="header-index">
         <div class="header-index-list">
            <ul v-for="item in messages">
              <li><a href="#">{{ item.title}}</a></li>
            </ul>
         </div>
       </div>

      <div class="wrap">
        <div class="logo">
          <div class="logo_left">
            <img src="./assets/imageHeader/logo.jpg" alt="慕课网">
          </div>
          <div class="logo_right">
            <img src="./assets/imageHeader/tel.jpg" alt="服务热线">
            24小时服务热线:<span class="text">123-456-7890</span>
          </div>
        </div>
      </div> 

      <div class="nav">
        <div class="nav_container">
          <div class="nav_left"></div>
          <div class="nav_list">
              <div class="nav_list_left">
                  <ul v-for="nav in navLists">
                    <li><a href="#">{{ nav.title }}</a></li>
                  </ul>
              </div>
              <div class="nav_list_right">
                <form action="" method="post" >
                  <input type="text" class="search_text">
                </form>
              </div>
          </div>
          <div class="nav_right"></div>
        </div>
      </div>

    </header>

    <router-view></router-view>

    <footer class="footer">

      <div class="footer-container">
        <div class="footer-container-list"> 
            <div class="footer-container-text">        
              <ul v-for="content in contentList ">
                 <li>
                    <a href="#">{{ content.title  }}</a>
                    <ul v-for="textList in content.list">
                      <li><a href="#">{{ textList.label }}</a></li>
                    </ul>
                 </li>
              </ul> 
            </div>

            <div class="footer-container-msg">
                <div><img src="./assets/imageFooter/weixin.png">微信关注</div>
                <div><img src="./assets/imageFooter/qrcode.jpg"></div>
            </div>        
        </div>
        
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data (){
    return{
      navLists:[
        {
          title:'首页',
          href:'#'
        },
        {
          title:'关于慕课',
          href:'#'
        },
        {
          title:'新闻动态',
          href:'#'
        },
        {
          title:'课程中心',
          href:'#'
        },
        {
          title:'在线课程',
          href:'#'
        },
        {
          title:'人才招聘',
          href:'#'
        }
      ],
      messages:[
        {
          title:'联系我们',
          href:'#'
        },
        {
          title:'加入收藏',
          href:'#'
        },
        {
          title:'设为首页',
          href:'#'
        }
      ],
      contentList:[
        {
          title:'关于',
          list:[
          {
            label:'品牌故事',
            herf:'#'
          },
          {
            label:'联系我们',
            herf:'#'
          },
          {
            label:'加入我们',
            herf:'#'
          },
          {
            label:'版权声明',
            herf:'#'
          }
          ]
        },
        {
          title:'课程',
          list:[
          {
            label:'PHP开发',
            herf:'#'
          },
          {
            label:'前端开发',
            herf:'#'
          },
          {
            label:'JAVA开发',
            herf:'#'
          },
          {
            label:'Android开发',
            herf:'#'
          }
          ]
        },
        {
          title:'关注',
          list:[
          {
            label:'新浪微博',
            herf:'#'
          },
          {
            label:'腾讯微博',
            herf:'#'
          },
          {
            label:'企业微信',
            herf:'#'
          },
          {
            label:'QQ空间',
            herf:'#'
          }
          ]
        },
        {
          title:'留言',
          list:[
          {
            label:'意见反馈',
            herf:'#'
          },
          {
            label:'问题留言',
            herf:'#'
          },
          {
            label:'媒体联络',
            herf:'#'
          },
          {
            label:'在线客服',
            herf:'#'
          }
          ]
        }
      ]
    }
  }
}
</script>

<style>
  *{padding:0;margin:0;}
  body{font-size:12px;background-color: #F5F5F5;}
  li{list-style:none;cursor: pointer;}
  a{text-decoration: none;}
  .header-index{
    background:url(./assets/imageHeader/top_bg.jpg) repeat-x;
    width:100%;    
    height:27px;
  }
  .header-index-list{
    width:1000px;
    /*设置列表位于居中*/
    margin:0 auto;
  }
  .header-index-list ul li{
    list-style-image: url(./assets/imageHeader/li_bg.gif);
    float: right;
    width:70px;
    /*设置height和line-height一样,可以实现垂直居中*/
    line-height: 27px;
  }
  .header-index-list a:visited,.header-index-list a:link{
    color:#8E8E8E;
    text-decoration: none;
  }
  .header-index-list a:hover,.header-index-list a:active{
    color:#900;
    text-decoration: none;
  }
  
  .wrap{width:100%;height: 80px;}
  .logo{width:1000px;margin:0 auto;height: 80px;background-color: #FFF;}
  .logo_left{float:left;width:200px;}
  .logo_right{float:right;width:300px;height: 28px;margin-top:30px;color:#E8E8E8;}
  .logo_right img{vertical-align: middle;margin-right:10px;}
  .text{
    font-family: '微软雅黑';
    font-size:16px;
    color:#C00;
  }

  .nav{height:40px;width:100%;}
  .nav_container{width:1000px;height: 40px;margin:0 auto;position: relative;}
  .nav_left{background:url(./assets/imageHeader/nav_left.jpg) no-repeat;width:10px;height: 40px;float:left;position: absolute;}
  .nav_list{background:url(./assets/imageHeader/nav_bg.jpg) repeat-x;width:980px;height: 40px;float:left;line-height: 40px;position: absolute;margin-left:10px;}
  .nav_right{background:url(./assets/imageHeader/nav_right.jpg) no-repeat;width:10px;height: 40px;float:left;position: absolute;margin-left: 990px;}
  .nav_list_left{width:680px;float:left;}
  .nav_list_left ul li{ width:100px;float:left;text-align: center;}
  .nav_list_right{float:left;width: 300px;}
  .nav_list_left a:link,.nav_list_left a:visited{
    color:#FFF;
    font-size:16px;
    font-family: '微软雅黑'；
  }
  .nav_list_left a:hover,.nav_list_left a:active{
    color:#FF0;
    font-size:16px;
    font-family: '微软雅黑'；
  }
  .search_text{
    width: 190px;
    height: 25px;
    margin-top: 5px;
    background:url(./assets/imageHeader/search.jpg) no-repeat right center;
    background-color:#FFF;
    padding-right:25px;
    border:1px solid #FFF;
  }
  
  .footer{clear:both; padding-top:5px;} /*清除底部版权区的左右浮动，避免上面的内容影响*/
  .footer-container{width:100%;height: 200px;background-color: #E8E8E8;margin-top:10px;}
  .footer-container-list{width:1000px;margin:0 auto;padding-top:20px; }
  .footer-container-text{width:800px;text-align: center;}
  .footer-container-text li{
    list-style:none;
    float: left;
    width:200px;
    background:url(./assets/imageFooter/line.png) no-repeat right center;
    line-height: 30px;
    font-family: "微软雅黑";
  }
    .footer-container-text a{
      text-decoration: none;
      color:#999;
      font-size:18px;
    }
    .footer-container-text ul li ul li a{
      font-size:14px;
    }
  .footer-container-msg{
    background:url(./assets/imageFooter/line.png) no-repeat right;
    text-align: center;
    font-family: "微软雅黑";
    color:#999;
    font-size:18px;
    line-height: 30px;
  }
</style>






