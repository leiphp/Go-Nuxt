<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Go-Nuxt
      </h1>
      <div class="links">
        <ul>
          <li>
            <nuxt-link :to="{name:'index'}">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name:'article'}">
              Article
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name:'article-detail',params:{id:3226}}">
              Detail
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name:'about'}">
              About
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
