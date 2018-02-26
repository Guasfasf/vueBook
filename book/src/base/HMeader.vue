<template>
    <div class="header">
      <i class="iconfont icon-fanhui" @click="goback" v-if="back"></i>
      <slot></slot>
    </div>
</template>
<script>
    export default {
        props:{
            back:{
              type:Boolean,
              default:false
    }
        },
        data(){
            return {}
        },
        methods: {
            goback(){
                this.$router.go(-1)
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .header{
    position: fixed;
    z-index: 100;
    background: cornflowerblue;
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    width: 100%
  }
  a{
    position: fixed;
    left: 20px;
    top: 60px;

  }
</style>
