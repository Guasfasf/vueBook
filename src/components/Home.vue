<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="container">
        <ul>
          <li v-for="hot in hotBooks">
            <img :src="hot.bookCover" alt="">
            <b>{{hot.bookName}}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/HMeader.vue'
  import Swiper from '../base/Swiper.vue'
  import {getSliders, getHot} from '../api'

  export default {
    created() {
      this.getData()
    },
    data() {
      return {sliders: [], hotBooks: []}
    },
    methods: {
      async getData() {
        this.sliders = await getSliders();
        this.hotBooks = await getHot()
      }
    },
    computed: {},
    components: {MHeader, Swiper}
  }
</script>
<style scoped lang="less">
  .container {
    width: 90%;
    margin: 0 auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;

  li {
    width: 50%;
    margin: 10px auto;

  img {
    width: 90%;
  }

  }
  }
  }
</style>
