## 项目支持less
## icon图标
- 添加
  icon-add
- 后退
  icon-fanhui
- 首页
  icon-shouye
- 列表页
  icon-liebiaoyemian
- 收 藏
  icon-shoucang

## 服务端跨域
```
res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
```


## 需要完成的接口
- /hot GET 获取热门图书
- /book GET 获取所有图书 返回数组
- /book?id=x GET 获取某一本图书 返回对象
- /book?id=x DELETE 删除某一本图书 返回空对象
- /book?id=x reqbody(修改的内容) PUT 修改某一本图书 返回修改后的那一项
- /book reqbody(添加的内容) POST 增加图书 返回增加后的那一项


## 轮播图README
```
//import
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)

//data example
<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    }
  }
</script>
```

1.npm install配置文件
2.根目录创建 index。html，里面写id=app
3.创建src文件夹
	main.js：app模块，new vue实例
	App.vue：主页面，电脑要显示的窗口，router-view
  创建base文件夹，Tab.vue;MHeader.vue
  创建components文件夹里面有多个路由
  创建路由router里面设置路由的转化（参数）
  之后的轮播图引入swiper插件模块，所有的代码文件都是api上面复制粘贴的
4.server文件：pathname-》端口
	里面写的条件判断基本上都是根据pathname端口号（hash）进行页面跳转
	setheader：设置头部属性；end结束
10:55

轮播图
 2.Swiper 粘贴大div套上小div-content
 3.写api---index
 4.Home 引入api 和 Swiper  |看|  （methods和created）
 5.写server、开启服务run
 6.修改Swiper中细节并写样式
 */

0.main中引入import三步
1.Home中引入注册三步    div class=content 写样式{position :fix;overflow }
2.Swiper。js中加索引 key  加上style：width100%
3.server 后台let http --  let sliders =require('./sliders')+
         创建服务读取res.end并右键run 访问3000
         粘贴跨域头
4.把图片地址粘贴到mock文件夹的sliders中
6.api --index 写import axios，3000
7.home中调用api{getSliders  async created(){getSliders()}}  return:sliders:[]
server  ：封装read，write方法
          上条数据要return
