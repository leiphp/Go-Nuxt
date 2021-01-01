<template>
  <div>
    <h2>Article-detail</h2>
    <p>article id:{{ $route.params.id }}</p>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </div>
</template>
<script>
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
  }
}
</script>
