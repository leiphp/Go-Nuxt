<template>
  <div class="container">
    <div>
      <h1 class="title">
        Article index page
      </h1>
      <ul>
        <li>
          <nuxt-link :to="{name:'index'}">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name:'article-id',params:{id:123}}">
            article-123
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name:'article-id',params:{id:456}}">
            article-456
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  transition: 'test'
}
</script>
