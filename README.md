# Go-Nuxt

NuxtJS +Go开发个人实战项目，让你构建你的下一个 Vue.js 应用程序变得更有信心。这是一个 开源 的框架，让 web 开发变得简单而强大。

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### 修改默认配置  
package.json中修改  
```bash
"config":{
  "nuxt":{
    "host":"127.0.0.1",
    "port":"3000
  }
}
```

## 注意事项  

### 默认模板
app.html 修改默认模板修改重启服务器

### 默认布局  
layouts文件夹里面的文件，修改不需要重启 
