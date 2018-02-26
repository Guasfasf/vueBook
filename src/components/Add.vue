<template>
  <div>
  <MHeader>添加</MHeader>
  <div class="content">
    <div>
      <ul>
        <li>
          <input type="text" v-model="book.bookName">
        </li>
        <li>
          <input type="text" v-model="book.bookInfo">
        </li>
        <li>
          <input type="text" v-model="book.bookPrice">
        </li>
        <button @click="add">添加</button>
      </ul>
    </div>
  </div>
  </div>
</template>
<script>
  import MHeader from '../base/HMeader.vue'
  import {addBook} from '../api'
  export default {
    data(){
      return {book:{}}
    },
    methods: {
       async add(){
            await addBook(this.book);
            this.$router.push('/list')
        }
    },
    computed: {},
    components: {MHeader}
  }
</script>
<style scoped>
  input{
    width: 150px;
    margin: 20px auto;
  }
  .content{
    margin: 20px 50px;
  }
  ul li{
    width: 100%;
  }
  button{
    background: skyblue;
    width: 80px;
    height: 20px;
  }
</style>
