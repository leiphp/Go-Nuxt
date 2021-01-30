<template>
  <div>
    <el-container>
      <!-- 顶部 -->
      <el-header>
         <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple-light">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                  <template slot="title">我的工作台</template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
              </el-menu>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <div class="line"></div>
      </el-header>
       <!-- 顶部 end-->
      <el-main>
        <Nuxt />
      </el-main>
      <el-footer>
        <!-- 底部 -->
        <div class="nav-bottom">
          <div class="contentbody">
              <span style="top: 20px; position: relative;"><img src="__PIC__/newskj_hit2018.png"></span>
              <span>&#169;copy 2010-2018雷小天科技版权所有 <a href="https://www.lxtkj.cn/">lxtkj.cn</a></span>
              <span>|</span>
              <a href="http://www.beian.miit.gov.cn">粤ICP备16001325号-5</a>
              <span>|</span>
              <a target="_blank" href="{:url('index/index/about')}">关于我们</a>
              <span>|</span>
              <a target="_blank" href="{:url('index/index/webmap')}">网站地图</a>
              <!-- <span style="top: 8px; position: relative;"><a target="_blank" href="https://v.pinpaibao.com.cn/cert/site/?site=www.lxtkj.cn&amp;at=realname"><img src="__PIC__/aqkx_83x30.png"></a></span> -->
              <span style="top: 8px; position: relative;"><a href="https://webscan.360.cn/index/checkwebsite/url/lxtkj.cn"><img border="0" src="https://webscan.360.cn/status/pai/hash/28b5a61a4da01172dc261b9a4a3bce4c" style="height:30px;"/></a></span>
          </div>
        </div>
        <!-- 底部 end-->
      </el-footer>
    </el-container>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
/* 底部 */
.contentbody {
  width: 1000px;
  position: relative;
  margin: auto;
  display: block;
}
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
</style>
