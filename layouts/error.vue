<template>
  <div>
    <h2 v-if="error.statusCode==404">
      404页面，你需要的页面没找到
    </h2>
    <h2 v-else>
      505页面，服务器错误
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
