<template>
  <div class="container">
    <div class="details-header clearfix">
<div class="position"><a href="/">首页</a>&nbsp;>&nbsp;<a href="{:url('index/content/lists?model=article',array('id'=>$id))}">互联网</a> &gt;  列表</div>
<div class="search">
  <form action="{:url('index/search/index')}" method="post" target="_blank" id="subform">
		<input type="hidden" name="show" value="title"/>
		<input type="hidden" name="tempid" value="1" />
		<input type="hidden" value="news" name="tbname"/>
		<input type="text" id="keyboard" class="bdan" name="keyboard" placeholder="请输入关键字"/>
	</form>
	<a href="#" onclick="document.getElementById('subform').submit();return false"><span class="submit"></span></a> </div>
</div>
<section class="list-l">
<!--列表框-->
<div class="list-box">
	<div class="list-items">
		<ul>
      <li v-for="(item, i) in info.rows" :key="i"><a :href="'/article/'+item.id" target="_blank" :title="item.title">{{item.title}}</a> <h4>2018-12-15</h4></li>
      <li v-if="key%5==0" style="height: 1px;border-bottom: #d4d4d4 dashed 1px;width: 100%;margin: 15px auto;"></li>
      <!-- <li>&nbsp;&nbsp;<a href="/article/detail-184.html" target="_blank" title="支付宝刷脸支付产品，即将开启支付新时代">支付宝刷脸支付产品 "蜻蜓"，即将开启支付新时代</a> <h4>2018-12-15</h4></li>
      <li>&nbsp;&nbsp;<a href="/article/detail-171.html" target="_blank" title="抖音短视频海外市场强势扩张 Facebook有点尴尬">抖音短视频海外市场强势扩张 Facebook有点尴尬</a> <h4>2018-11-03</h4></li>
      <li>&nbsp;&nbsp;<a href="/article/detail-169.html" target="_blank" title="为什么会有1024程序员节？">为什么会有1024程序员节？</a> <h4>2018-10-24</h4></li>
      <li>&nbsp;&nbsp;<a href="/article/detail-26.html" target="_blank" title="第三届互联网大会 探访乌镇黑科技">第三届互联网大会 探访乌镇黑科技</a> <h4>2017-08-19</h4></li>
      <li>&nbsp;&nbsp;<a href="/article/detail-25.html" target="_blank" title="PC流量越来越低？隐藏在背后的转型">PC流量越来越低？隐藏在背后的转型</a> <h4>2017-08-19</h4></li>
      <li style="height: 1px;border-bottom: #d4d4d4 dashed 1px;width: 100%;margin: 15px auto;"></li>
      <li>&nbsp;&nbsp;<a href="/article/detail-23.html" target="_blank" title="企业网站中如何打造中国古典style？">企业网站中如何打造中国古典style？</a> <h4>2017-08-19</h4></li>
      <li>&nbsp;&nbsp;<a href="/article/detail-22.html" target="_blank" title="婚纱摄影网站制作中要注意哪些事项呢">婚纱摄影网站制作中要注意哪些事项呢</a> <h4>2017-08-19</h4></li>
      <li>&nbsp;&nbsp;<a href="/article/detail-17.html" target="_blank" title="网站色彩的搭配小妙招">网站色彩的搭配小妙招</a> <h4>2017-06-12</h4></li>
      <li>&nbsp;&nbsp;<a href="/article/detail-16.html" target="_blank" title="网站内页与首页要怎样保持风格一致呢">网站内页与首页要怎样保持风格一致呢</a> <h4>2017-06-12</h4></li>
      <li>&nbsp;&nbsp;<a href="/article/detail-13.html" target="_blank" title="电商网站怎么建设才不会令人反感">电商网站怎么建设才不会令人反感</a> <h4>2017-06-10</h4></li>
      <li style="height: 1px;border-bottom: #d4d4d4 dashed 1px;width: 100%;margin: 15px auto;"></li>
      <li>&nbsp;&nbsp;<a href="/article/detail-12.html" target="_blank" title="网站导航如何做SEO优化？">网站导航如何做SEO优化？</a> <h4>2016-06-06</h4></li> -->
		</ul>
	</div>
</div>
<div class="clear"></div>
<div class="paging">
	<!-- {$page} -->
</div>
</section>
<aside class="list-r">
<article class="hot-box">
        <div class="hot-box-title">
          <div style="text-align:left;"><p>点击排行</p></div>
          <div style="position: absolute; top: 8px; left: 185px"> <img border="0" src="https://www.lxtkj.cn/template/keji/static/picture/pic001.jpg" width="113" height="27"> </div>
        </div>
        <div id="tab">
          <h3 :class="dayclass" id="two1"  @mouseover="mouseOver" @mouseleave="mouseLeave">今日点击</h3>
          <h3 id="two2" @mouseover="mouseOverWeek" @mouseleave="mouseLeaveWeek" :class="weekclass">本周点击</h3>
          <div class="clear"></div>
          <div class="block" id="con_two_1" :style="daystyle">
            <ul>
              <li><span class="first">1</span><a class="tab_title" href="/article/detail-178.html">电脑网络连接中的以太网和本地连接有什么区别?</a></li>
              <li><span class="num01">2</span><a class="tab_title" href="/article/detail-175.html">王者荣耀为什么在上分最后一把总容易遇到坑B？</a></li>
              <li><span class="num01">3</span><a class="tab_title" href="/article/detail-11.html">京东再强又怎样 百度竞价排名坐地收钱无成本</a></li>
              <li><span class="num01">4</span><a class="tab_title" href="/article/detail-154.html">中国互联网市场下沉 三四五线城市会出下一个BAT?</a></li>
              <li><span class="num01">5</span><a class="tab_title" href="/article/detail-59.html">牛津大学开发VR成功治疗恐高症</a></li>
              <li><span class="num01">6</span><a class="tab_title" href="/article/detail-43.html">苹果升级iPhone安全性：拒绝暴力破解</a></li>
              <li><span class="num01">7</span><a class="tab_title" href="/article/detail-158.html">小白配电脑被奸商给吓跑，预算8000块就只配了GTX1050Ti？</a></li>
              <li><span class="num01">8</span><a class="tab_title" href="/article/detail-134.html">qq号微信号能作为遗产留给后人继承吗？</a></li>
              <li><span class="num01">9</span><a class="tab_title" href="/article/detail-40.html">适合程序员开发的电脑组装配置</a></li>
              <li><span class="num01">10</span><a class="tab_title" href="/article/detail-66.html">苹果奖励了库克价值1.2亿美元的苹果股票</a></li>
          </ul>
          </div>
          <div class="clear"></div>
          <div id="con_two_2" :style="weekstyle">
            <ul>
              <li><span class="first">1</span><a class="tab_title" href="/article/detail-178.html">33电脑网络连接中的以太网和本地连接有什么区别?</a></li>
              <li><span class="num01">2</span><a class="tab_title" href="/article/detail-175.html">王者荣耀为什么在上分最后一把总容易遇到坑B？</a></li>
              <li><span class="num01">3</span><a class="tab_title" href="/article/detail-11.html">京东再强又怎样 百度竞价排名坐地收钱无成本</a></li>
              <li><span class="num01">4</span><a class="tab_title" href="/article/detail-154.html">中国互联网市场下沉 三四五线城市会出下一个BAT?</a></li>
              <li><span class="num01">5</span><a class="tab_title" href="/article/detail-59.html">牛津大学开发VR成功治疗恐高症</a></li>
              <li><span class="num01">6</span><a class="tab_title" href="/article/detail-43.html">苹果升级iPhone安全性：拒绝暴力破解</a></li>
              <li><span class="num01">7</span><a class="tab_title" href="/article/detail-158.html">小白配电脑被奸商给吓跑，预算8000块就只配了GTX1050Ti？</a></li>
              <li><span class="num01">8</span><a class="tab_title" href="/article/detail-134.html">qq号微信号能作为遗产留给后人继承吗？</a></li>
              <li><span class="num01">9</span><a class="tab_title" href="/article/detail-40.html">适合程序员开发的电脑组装配置</a></li>
              <li><span class="num01">10</span><a class="tab_title" href="/article/detail-66.html">苹果奖励了库克价值1.2亿美元的苹果股票</a></li>
            </ul>
          </div>
        </div>
      </article>

<!--科技新闻页热门图片信息流 -->
	<!--科技新闻页热门图片信息流 end-->
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
</aside>
  </div>
</template>
<script>
import api from '../../utils/api'
export default {
  data () {
    return {
      name: 'Hello World',
      info: {},
      active: 'background-color:red',
      daystyle: 'display: block;',
      weekstyle: 'display: none;',
      dayclass: 'up',
      weekclass: ''
    }
  },
  async asyncData (ctx) {
    console.log('asyncData...', ctx.params.id)
    const res = await api.getCategoryContent(ctx.params.id, 2, 25)
    console.log('result', res)
    if (res.code === api.SUCCESS_CODE) {
      // 拿到文章分类分页数据
      const articles = res.data
      return { info: articles }
    }
  },
  methods: {
    // 移入
    mouseOver () {
      this.daystyle = 'display: block;'
      this.weekstyle = 'display: none;'
      this.dayclass = 'up'
      this.weekclass = ''
      console.log(111111111)
    },
    // 移出
    mouseLeave () {
      console.log(22222222222222)
    },
    // 周排行移入
    mouseOverWeek () {
      this.daystyle = 'display: none;'
      this.weekstyle = 'display: block;'
      this.dayclass = ''
      this.weekclass = 'up'
      console.log(33333333333333)
    },
    // 移出
    mouseLeaveWeek () {
      console.log(4444444444444)
    }
  }
}
</script>
<style>
 @import '../../assets/css/pages2018.css';
 </style>
