<template>
    <div class="foot">
      <router-link to="/home"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
      <router-link to="/list"><i class="iconfont icon-liebiaoyemian"></i><span>列表</span></router-link>
      <router-link to="/collect"><i class="iconfont icon-shoucang"></i><span>收藏</span></router-link>
      <router-link to="/add"><i class="iconfont icon-add"></i><span>添加</span></router-link>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .foot{
    z-index: 100;
    background: white;
    border: 1px solid #ccc;
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    height: 100px;
    display: flex;
    color: blue;
    a.router-link-active{
      color: red;
    }
    a{
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
