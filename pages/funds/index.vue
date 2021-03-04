<template>
  <div class="container">
    <ul>
      <li v-for = "(item,index) in categoriesList" :key="index">
        <span v-text="item.title"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '../../utils/api'
export default {
  data () {
    return {
      name: 'Hello World',
      active: 'background-color:red',
      daystyle: 'display: block;',
      weekstyle: 'display: none;',
      dayclass: 'up',
      weekclass: '',
      focusNews: {
        0: {
          title: '支付宝刷脸支付产品 "蜻蜓"，即将开启支付新时代',
          imgsrc: 'https://www.newskj.org/d/file/news/yjs/2021-02-27/d2743aa55adc5f06cdbbcffd2e586d33.jpg',
          path: 'https://www.lxtkj.cn/article/detail-184.html'
        },
        1: {
          title: '未来几年VR产品对生活的影响',
          imgsrc: 'https://www.newskj.org/d/file/news/kxts/2021-02-27/28be88dad48885ddf6c86fe2ff7b029c.jpg',
          path: 'https://www.lxtkj.cn/article/detail-184.html'
        },
        2: {
          title: '高通与苹果在华专利纠纷，iPhone手机在国内市场禁售',
          imgsrc: 'https://www.newskj.org/d/file/news/kjsh/2021-02-26/d2fbe85f45ec31fe039cc036255a05b5.jpg',
          path: 'https://www.lxtkj.cn/article/detail-184.html'
        },
        3: {
          title: '王者荣耀为什么在上分最后一把总容易遇到坑B？',
          imgsrc: 'https://www.newskj.org/d/file/news/kejiao/2021-02-27/60cbb0f563f286ce4b4c8c9ffb81278e.jpg',
          path: 'https://www.lxtkj.cn/article/detail-184.html'
        }
      }
    }
  },
  async asyncData () {
    const categoriesResult = await api.getCategories()
    if (categoriesResult.code === api.SUCCESS_CODE) {
      console.log('data', categoriesResult.data)
      const categoriesList = categoriesResult.data
      // 拿到分类数据
      const recommendItem = categoriesList[0]
      const currentCategoryId = recommendItem.id
      const contentResult = await api.getCategoryContent(currentCategoryId, 1)
      if (contentResult.code === api.SUCCESS_CODE) {
        return {
          currentCategoryId,
          categoriesList,
          contentList: contentResult.data
        }
      }
    }
  }
}
</script>
