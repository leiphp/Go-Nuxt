<template>
  <div>
    {{ name }}
    <h1>
      姓名：{{ info.name }}
    </h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: 'Hello World',
      info: {}
    }
  },
  pasyncData () {
    return axios.get('xxx').then((res) => {
      return { info: res.data }
    })
  },
  async asyncData () {
    const { data } = await axios.get('http/www.baidu.com')
    return { info: data }
  }
}
</script>
