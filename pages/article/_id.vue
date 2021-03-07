<template>
  <!-- <div>
    <h2>Article-detail</h2>
    <p>article id:{{ $route.params.id }}</p>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </div> -->
  <div class="container">
  <!--搜索框-->
  <div class="details-header clearfix">
    <div class="position"><a href="/">首页</a>&nbsp;>&nbsp;<a href="#">互联网</a> &gt;  正文</div>
    <div class="search">
      <form action="{:url('index/search/index')}" method="post"  target="_blank" id="subform">
        <input type="hidden" name="show" value="title" />
        <input type="hidden" name="tempid" value="1" />
        <input type="hidden" value="news" name="tbname"/>
        <input type="text" id="keyboard" class="bdan" name="keyboard" placeholder="请输入关键字"/>
      </form>
      <a href="#" onclick="document.getElementById('subform').submit();return false"><span class="submit"></span></a> </div>
  </div>
  <div class="details-con clearfix">
    <div class="article-main clearfix">
      <h1>支付宝刷脸支付产品 "蜻蜓"，即将开启支付新时代</h1>
      <div class="articleInfo"> <span class="data">2018-12-15 10:41:09</span> <span>雷小天科技</span> <span>1169</span>
        <div class="comment">
          <div class="social clearfix">
            <div class="t">分享到：</div>
            <div class="bdsharebuttonbox bdshare-button-style0-16" id="share-bd" text="" desc="" url="">
              <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
              <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
              <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
              <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="article-content">
        <div class="synopsis_buttom"></div>
        <!--<div class="ad630_80"><script type="text/javascript" src="__JS__/thea15.js"></script></div>-->
        <div class="detail_content">
          <div id="main_content">
&nbsp; &nbsp; &nbsp; &nbsp;【雷小天科技】刷脸支付有多快？少了掏手机的步骤，用户买一瓶饮料的时间从12秒缩短到5秒。据支付宝方面介绍，卜蜂莲花是首家接入支付宝刷脸支付的超市，其市场部助理副总裁袁林化表示，在引入刷脸支付后，1个收银员可以维护3台自助收银机，收银效率提升了50%，按照收银员3200元的平均工资计算，每年便可节省1344万元的综合成本。
          </div>
        </div>
        <div class="detail_banquan">
          <!--二维码-->
          <div class="erweima">
            <p><img src="../../assets/images/2weima.jpg"></p>
          </div>
          <!--声明-->
          <div class="shengming">
            <p> 免责声明：本文仅代表作者个人观点，与雷小天科技网无关。其原创性以及文中陈述文字和内容未经本站证实，对本文以及其中全部或者部分内容、文字的真实性、完整性、及时性本站不作任何保证或承诺，请读者仅作参考，并请自行核实相关内容。</p>
            <p> 本网站有部分内容均转载自其它媒体，转载目的在于传递更多信息，并不代表本网赞同其观点和对其真实性负责，若因作品内容、知识产权、版权和其他问题，请及时提供相关证明等材料并与我们联系，本网站将在规定时间内给予删除等相关处理. </p>
          </div>
        </div>
        <div class="ad630_80">

        </div>
        <!--猜你喜欢-->
        <div class="like">
          <p>精彩推荐</p>
          <div class="new_content_list">
            <!--科技新闻列表-->
            <!--科技新闻列表 end-->
            <!-- {volist name="like" id="item"} -->
              <dl class="imgtext mb10">
              <dt> <a href="{:url('index/content/detail?model_id='.$item['model_id'],array('id'=>$item['id']))}" target="_blank"><img src="https://www.lxtkj.cn/public/images/default.png" width="149" height="100" alt=""></a> </dt>
              <dd>
                <h2 class="f18"><a href="{:url('index/content/detail?model_id='.$item['model_id'],array('id'=>$item['id']))}" target="_blank">智能革命席卷前台 好易住亮相中国饭店协会展</a></h2>
                <p class="fn st" style="padding-top:50px">
                  <span>2018-12-15 10:41:09  更新</span> <span class="fr"><a href="#" class="read_button" target="_blank">阅读</a></span> </p>
              </dd>
            </dl>
            <!-- {/volist} -->

             </div>
        </div>
      </div>
    </div>
  </div>

  <aside class="list-r">
   <div class="div1">
     <!--广告-->
      <div class="ad300">
        <div class="ad300-box">
          <!-- 科技新闻右侧一 -->
          <a href="https://www.chuanboyi.com/design/search.html" target="_parent">
            <img src="https://www.newskj.org/d/file/p/2020-11-11/665c3ec36fe8dcf1516078c40515e9c3.png" border="0" width="300" height="250" alt="">
          </a>
          <!-- 科技新闻右侧一 end-->
        </div>
      </div>
    <article class="hot-box">
      <div class="hot-box-title"> 点击排行</div>
      <div id="tab">
        <div class="clear"></div>
        <div class="block" id="con_two_1" style="display: block;">
          <ul>
            <li><span class="first">1</span>
                <a class="tab_title" href="/article/detail-178.html">电脑网络连接中的以太网和本地连接有什么区别?</a>
              </li>
              <li><span class="num01">2</span>
                <a class="tab_title" href="/article/detail-175.html">王者荣耀为什么在上分最后一把总容易遇到坑B？</a>
              </li>
              <li><span class="num01">3</span>
                <a class="tab_title" href="/article/detail-11.html">京东再强又怎样 百度竞价排名坐地收钱无成本</a>
              </li>
              <li><span class="num01">4</span>
                <a class="tab_title" href="/article/detail-154.html">中国互联网市场下沉 三四五线城市会出下一个BAT?</a>
              </li>
              <li><span class="num01">5</span>
                <a class="tab_title" href="/article/detail-59.html">牛津大学开发VR成功治疗恐高症</a>
              </li>
              <li><span class="num01">6</span>
                <a class="tab_title" href="/article/detail-43.html">苹果升级iPhone安全性：拒绝暴力破解</a>
              </li>
              <li><span class="num01">7</span>
                <a class="tab_title" href="/article/detail-43.html">苹果升级iPhone安全性：拒绝暴力破解</a>
              </li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
    </article>
    <!--广告-->
      <div class="ad300">
        <div class="ad300-box">
            <!-- 科技新闻页右侧二 -->
            <a href="https://www.chuanboyi.com/design/search.html" target="_parent">
              <img src="https://www.newskj.org/d/file/p/2019-05-31/4c0dd5082f6a300f4d913eac5237d177.gif" border="0" width="300" height="250" alt="">
            </a>
        </div>
      </div>
      <article class="hot-pic">
        <div class="hot-pic-title">热门图片</div>
        <ul class="splendid-con">
                <li class="splendid-items"> <a href="/gdsp/153794.html" target="_blank">
          <div class="img-box"><img src="https://www.newskj.org/d/file/news/gdsp/2021-02-26/955b31c0bcdcd2a8ab008bdccde3cb58.jpg" alt="滑盖直板掌机 GPD WIN 3"></div>
          <p>
            滑盖直板掌机 GPD WIN 3          </p>
          </a> </li>
                <li class="splendid-items"> <a href="/kjxx/153793.html" target="_blank">
          <div class="img-box"><img src="https://www.newskj.org/d/file/news/kjxx/2021-02-26/468d2d9046aa21ec7fe8b80abe9a40d0.jpg" alt="红魔游戏手机官方宣布新"></div>
          <p>
            红魔游戏手机官方宣布新          </p>
          </a> </li>
                <li class="splendid-items"> <a href="/kjsh/153792.html" target="_blank">
          <div class="img-box"><img src="https://www.newskj.org/d/file/news/kjsh/2021-02-26/d2fbe85f45ec31fe039cc036255a05b5.jpg" alt="诺基亚 6300 4G 和 8000"></div>
          <p>
            诺基亚 6300 4G 和 8000          </p>
          </a> </li>
                <li class="splendid-items"> <a href="/kjcy/153791.html" target="_blank">
          <div class="img-box"><img src="https://www.newskj.org/d/file/news/kjcy/2021-02-26/55a259351bf31f12cc20fb5eac75cb37.jpg" alt="三星开始向部分旗舰级智"></div>
          <p>
            三星开始向部分旗舰级智          </p>
          </a> </li>
                <li class="splendid-items"> <a href="/it/153790.html" target="_blank">
          <div class="img-box"><img src="https://www.newskj.org/d/file/news/it/2021-02-26/af108f4a7cd5ee2bafe1bc54a3ca8c87.jpg" alt="微软将为 Surface Pro 7"></div>
          <p>
            微软将为 Surface Pro 7          </p>
          </a> </li>
                <li class="splendid-items"> <a href="/shuma/153789.html" target="_blank">
          <div class="img-box"><img src="https://www.newskj.org/d/file/news/shuma/2021-02-26/631004cee574d09a4be4a1907e70ef85.jpg" alt="联想拯救者 R7000P 2021"></div>
          <p>
            联想拯救者 R7000P 2021          </p>
          </a> </li>
        </ul>
      </article>
    </div>
    <div id="fixed_box">
     <div id="div_fixed" class="">
    <!--广告-->
      <div class="ad300">
        <div class="ad300-box">
          tttt
        </div>
      </div>
      <div class="ad300" style="margin-top:10px;">
        <div class="ad300-box">
            xxx
        </div>
      </div>
     </div>
   </div>
  </aside>
  </div>
</template>
<script>
import api from '../../utils/api'
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      title: this.$route.params.title
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'article-123', content: 'this is detail page' }
      ]
    }
  },
  asyncData () {
    console.log('test load data...')
    api.getCategories().then((res) => {
      console.log('result', res)
    })
  },
  methods: {
    created () {
      const id = this.$route.params.id
      console.log('id is:', id)
    }
  }
}
</script>
<style>
 @import '../../assets/css/pages2018.css';
 </style>
