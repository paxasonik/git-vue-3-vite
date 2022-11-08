<template>
  <h1 class="text-5xl mb-5">Спискок постов</h1>
  <router-link :to="{name: 'Main'}" class="no-underline hover:underline">Главная</router-link>
  <div class="divide-y divide-blue-200 mt-4">
    <div class="flex gap-1.5 pt-4 pb-4" v-for="post in postList">
      <div class="flex-none w-10 ">
      {{ post.id }}
      </div>
      <div class="flex-1 w-80">
        <div class="text-3xl mb-3">
          {{ post.title }}
        </div>
        <div class="">
          {{ post.body }}
        </div>
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
