<template>
  <div>
    <!--顶部-->
    <div id="header">
      <div class="center-box clear-fix">
        <div class="header-logo">
          <nuxt-link to="/"><img src="../assets/images/logo.jpg" alt="雷小天科技"></nuxt-link>
        </div>
        <div class="header-menu">
          <ul>
            <li class="menu-active">股票</li>
            <li><a href="/funds">基金</a></li>
            <li>大盘</li>
            <li>科技</li>
          </ul>
        </div>
        <div class="header-search">
          <div class="header-search-box ">
            <el-input  placeholder="复制（淘宝的标题或者关键字）找优惠券!" size="small"></el-input>
          </div>
          <div class="header-search-btn">
            <el-button type="danger" size="small">搜索</el-button>
          </div>
        </div>
      </div>
    </div>
     <!--导航-->
    <div id="nav">
      <div class="leftbar"></div>
      <ul class="navbar">
        <li>
          <div>
            <a target="_blank" href="javascript:;" class="title">新闻</a>
            <a target="_blank" href="/list/9">科技信息</a>
            <a target="_blank" href="/list/10">科技产业</a>
            <a target="_blank" href="/list/11">业界资讯</a>
          </div>
          <div class="navbar-item">
            <a target="_blank" href="javascript:;" class="title">金融</a>
            <a target="_blank" href="/list/12">股票基金</a>
            <a target="_blank" href="/list/13">理财投资</a>
            <a target="_blank" href="/list/14">经济热点</a>
          </div>
        </li>
        <li>
          <div>
            <a target="_blank" href="javascript:;" class="title">业界</a>
            <a target="_blank" href="/list/15">通信</a>
            <a target="_blank" href="/list/16">互联网</a>
            <a target="_blank" href="/list/17">IT</a>
            <a target="_blank" href="/list/18">云计算</a>
          </div>
          <div class="navbar-item">
            <a target="_blank" href="javascript:;" class="title">酷玩</a>
            <a target="_blank" href="/list/19">游戏</a>
            <a target="_blank" href="/list/20">汽车</a>
            <a target="_blank" href="/list/21">生活</a>
            <a target="_blank" href="/list/32">房产</a>
          </div>
        </li>
        <li>
          <div>
            <a target="_blank" href="javascript:;" class="title">数码</a>
            <a target="_blank" href="/list/22">手机</a>
            <a target="_blank" href="/list/23">电脑</a>
            <a target="_blank" href="/list/24">家电</a>
          </div>
          <div class="navbar-item">
            <a target="_blank" href="javascript:;" class="title">智能</a>
            <a target="_blank" href="/list/25">VR</a>
            <a target="_blank" href="/list/26">人工智能</a>
            <a target="_blank" href="/list/27">硬件</a>
          </div>
        </li>
        <li>
          <div>
            <a target="_blank" href="javascript:;" class="title">科普</a>
            <a target="_blank" href="/list/28">科教</a>
            <a target="_blank" href="/list/29">医学健康</a>
          </div>
          <div class="navbar-item">
            <a target="_blank" href="javascript:;" class="title">科学</a>
            <a target="_blank" href="/list/30">探索</a>
            <a target="_blank" href="/list/31">自然地理</a>
          </div>
        </li>
      </ul>
      <div class="rightbar"></div>
    </div>
    <Nuxt />
    <!--底部-->
     <!-- <div id="footer">
      <div class="center-box">
        <div class="footer-link">
          <ul class="clear-fix">
            <li>
              联系我们
            </li>
            <li>
              人才招聘
            </li>
            <li>
              广告投放
            </li>
            <li>
              网店加盟
            </li>
            <li>
              常见问题
            </li>
            <li>
              友情连接
            </li>
          </ul>
        </div>
        <div class="size-info">
          <p>&COPY;2019 taobaounion.cn 粤IPC备 1209832号-11 code by TrillGates</p>
        </div>
      </div>
    </div> -->
    <div class="nav-bottom">
      <div class="container">
          <span style="top: 20px; position: relative;"><img src="https://www.lxtkj.cn/template/keji/static/picture/newskj_hit2018.png"></span>
          <span>&#169;copy 2010-2018雷小天科技版权所有 <a href="https://www.lxtkj.cn/">lxtkj.cn</a></span>
          <span>|</span>
          <a href="http://www.beian.miit.gov.cn">粤ICP备16001325号-5</a>
          <span>|</span>
          <a target="_blank" href="/about">关于我们</a>
          <span>|</span>
          <a target="_blank" href="{:url('index/index/webmap')}">网站地图</a>
          <!-- <span style="top: 8px; position: relative;"><a target="_blank" href="https://v.pinpaibao.com.cn/cert/site/?site=www.lxtkj.cn&amp;at=realname"><img src="__PIC__/aqkx_83x30.png"></a></span> -->
          <span style="top: 8px; position: relative;"><a href="https://webscan.360.cn/index/checkwebsite/url/lxtkj.cn"><img border="0" src="https://static.anquan.org/static/outer/image/aqkx_83x30.png" style="height:30px;"/></a></span>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('state:', this.$store.state)
  }
}
</script>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    width: 1000px;
    position: relative;
    display: block;
  }
  aside {
      width: 335px;
      height: auto;
      position: relative;
      float: right;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
  .size-info {
    color: #fff;
    line-height: 30px;
    padding-bottom: 20px;
    text-align: center;
  }

  .footer-link ul {
    display: inline-block;
  }

  .footer-link {
    padding-top: 20px;
    text-align: center;
  }

  .footer-link li {
    float: left;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    margin-right: 10px;
    line-height: 30px;
  }

  .footer-link ul {
    list-style: none;
  }

  #footer {
    background: #c9302c;
  }
  .menu-active {
    background: #0000000a;
  }

  .header-search-btn {
    margin-left: 20px;
  }

  .header-search-box {
    margin-left: 20px;
  }

  .header-search-box .el-input {
    width: 300px;
  }

  .header-search-btn .el-button--danger {
    width: 100px;
  }

  .header-search-box, .header-search-btn {
    line-height: 70px;
  }

  #header {
    box-shadow: 0px 5px 10px #d4d4d4;
    background: #fff;
    height: 70px;
  }
  /*通用*/
  html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  html, body {
    font-family: "Microsoft YaHei","微软雅黑","SimSun","宋体";
    font-size: 12px;
    min-width: 1240px;
    height: auto;
    background-color: #fff;
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  .clear {
    clear: both;
  }
  .red a {
    color: #ba2636;
    margin-left: 5px;
  }

  /*导航*/
  #nav {
    /* width: 100%; */
    /* float: left; */
    background: url(../assets/images/repeat-x.gif) repeat-x 0px top;
    height: 69px;
    display: flex;
    justify-content: space-between;
  }
  #nav .leftbar {
    width: 20%;
    background: url(../assets/images/repeat-x.gif) no-repeat -59px 0px;
    /* float: left; */
    height: 69px;
  }
  #nav .rightbar {
    width: 20%;
    background: url(../assets/images/repeat-x.gif) no-repeat -71px 0px;
    /* float: right; */
    height: 69px;
  }
  #nav .navbar {
    font-size: 14px;
    margin-top: 12px;
    overflow: hidden;
    /* float: left; */
    /* margin-left: 30px; */
    width: 1000px;
    display: flex;
    justify-content: space-between;
  }
  #nav .navbar li {
    height: 42px;
    border-right: 2px solid #e8e8e8;
    float: left;
    padding: 0 30px;
    box-sizing: border-box;
  }
  #nav .navbar li:first-child {
    padding: 0 20px 0 0;
  }
  #nav .navbar li:last-child {
    border: none;
    padding-left: 25px;
    padding-right: 0;
  }
  #nav .navbar .navbar-item {
    margin-top: 5px;
  }
  #nav .navbar .title {
    font-weight: bold;
  }
  #nav .navbar a {
    color: #404040;
  }
  #nav .navbar a+a {
    padding-left: 10px;
  }
  #nav:after {
    /* content: ""; */
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }

  .clear-fix {
    zoom: 1;
    overflow: auto;
  }

  .header-menu {
    margin-right: 135px;
  }
  .header-menu li:hover {
    background: #0000000a;
  }

  .header-menu li {
    cursor: pointer;
    float: left;
    color: #112a82;
    font-size: 16px;
    font-weight: 600;
    line-height: 70px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .header-menu ul {
    list-style: none;
  }

  .header-logo {
    font-size: 24px;
    line-height: 70px;
    font-weight: 600;
    color: #c9302c;
  }
  .header-search {
    display: flex;
    justify-content: space-between;
  }

  .center-box {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  /* 底部样式 */
  .nav-bottom {
    width: 100%;
    height: 84px;
    line-height: 84px;
    background-color: #333;
    text-align: center;
    color: #fff;
    overflow: hidden;
  }
  .nav-bottom a {
    color: #fff;
  }
  .nav-bottom span {
    display: inline-block;
    padding: 0 15px;
  }
  .nav-bottom span:first-child {
    padding: 0;
  }
  .nav-bottom span:hover {
    color: #f33;
  }
  /*排行榜*/
.hot-box {
	border: #ddd 1px solid;
	margin-top: 10px;
	width: 333px;
	background: #efefef;
}
#tab {
	background: #fff;
	margin: 0px 10px;
	padding: 10px;
	margin-bottom: 10px;
}
.hot-box-title {
	border-bottom: #ddd 1px solid;
	text-indent: 10px;
	font: 14px/40px Microsoft YaHei;
	height: 40px;
	position: relative;
	margin: 10px 10px 0px 10px;
	background: #fff;
}
#tab .up {
	background: #fff;
	color: #333;
	font-weight: 700;
	border-top: 4px solid #004276;
}
#tab h3 {
	float: left;
	/*width: 103px;*/
	width: 50%;
	height: 30px;
	line-height: 30px;
	margin: 0 0 0 0;
	font-size: 12px;
	cursor: pointer;
	background-color: #c5c5c5;
	text-align: center;
	color: #5a5a5a;
	font-family: Microsoft YaHei;
	font-weight: normal;
}
#tab div {
	left: 0;
}
#tab ul li {
	border-bottom: #ddd 1px solid;
	line-height: 34px;
	height: 34px;
  overflow: hidden;
  text-align: left;
}
#tab ul li span.first {
	text-indent: 4px !important;
	width: 16px;
	display: inline;
	background: url(../assets/images/sprite.gif) no-repeat left -35px;
	float: left;
	color: #fff;
	margin-right: 10px;
}
#tab ul li span.num01 {
	padding-left: 4px;
	width: 22px;
	float: left;
	color: #666;
}
</style>
