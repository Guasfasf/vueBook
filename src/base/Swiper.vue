<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,key) in swiperSlides" :key="key"><img :src="slide" ></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    props:['swiperSlides'],
    name: 'carousel',
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
      }
    }
  }
</script>
<style>
  img{
    width: 100%;
  }
</style>
