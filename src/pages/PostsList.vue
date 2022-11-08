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
      <button class="" @click="deletePost(post.id)">
        Удалить
      </button>
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
    this.getPosts()
  },
  methods: {
    getPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.postList = res.data
        // console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },
    deletePost(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        this.postList = this.postList.filter(post => post.id !== id)
        // console.log(res)
      })
      .catch(error => [
          console.log(error)
      ])
    }
  },
}
</script>

<style scoped>

</style>
