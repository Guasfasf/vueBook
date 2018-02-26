<template>
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
        <button @click="set">修改</button>
      </ul>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/HMeader.vue'
  import {findBook, setBook} from "../api"

  export default {
    created() {
      this.getData()
    },
    data() {
      return {book: {}}
    },
    methods: {
      async set() {
        await setBook(this.bid, this.book);
        this.$router.push('/list')
      },
      async getData() {
        this.book = await findBook(this.bid)
      }

    },
    computed: {
      bid() {
        return this.$route.params.bid //获取路径后面的参数
      }
    },
    components: {MHeader}
  }
</script>
<style scoped>
  input {
    width: 150px;
    margin: 20px auto;
  }

  .content {
    margin: 20px 50px;
  }

  ul li {
    width: 100%;
  }

  button {
    background: skyblue;
    width: 80px;
    height: 20px;
  }
</style>
