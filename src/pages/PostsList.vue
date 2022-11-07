<template>
  <h1>Спискок постов</h1>
  <router-link :to="{name: 'Main'}">Главная</router-link>
  <div class="">
    <div class="" v-for="post in postList">
      <span>
      {{ post.id }}
      </span>
      <div class="">
        {{ post.title }}
      </div>
      <div class="">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostsList",
  data() {
    return {
      postList: null,
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          this.postList = res.data
          // console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
  },
}
</script>

<style scoped>

</style>
