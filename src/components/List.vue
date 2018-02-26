<script src="../router/index.js"></script>
<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content">
      <ul>
        <router-link :to="{name:'detail',params:{bid:book.bookId}}" v-for="(book,index) in books" tag="li" key="index">
          <img :src="book.bookCover" alt="">
          <h5>{{book.bookName}}</h5>
          <p>{{book.bookInfo}}</p>
          <p>{{book.bookPrice}}</p>
          <button @click.stop="remove(book.bookId)">删除</button>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/HMeader.vue'
  import {getBooks, removeBook} from '../api'

  export default {
    created() {
      this.getData()
    },
    data() {
      return {books: []}
    },
    methods: {
      async getData() {
        this.books = await getBooks()
      },
      async remove(id) {
        await removeBook(id);
        this.books = this.books.filter(item => item.bookId !== id)
      }
    },
    computed: {},
    components: {MHeader}////
  }
</script>
<style scoped>
  .content ul {
    padding: 20px;
  }

  .content ul li {
    display: flex;
    padding: 16px 0;
    border-bottom: 1px solid #f1f1f1;
  }

  .content ul img {
    width: 100px;
    height: 120px;
  }

  .content h5 {
    font-size: 20px;
    line-height: 35px;
  }

  .content p {
    color: #2a2a2a;
    line-height: 35px;
  }

  .content b {
    color: red;
  }

  .content button {
    display: block;
    width: 80px;
    height: 25px;
    background-color: orange;
    color: white;
    border: none;
    border-radius: 5px;
    outline: none;
  }
</style>
