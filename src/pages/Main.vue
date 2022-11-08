<template>
  <h1 class="text-5xl mb-5">Главная</h1>
  <router-link :to="{name: 'PostsList'}" class="no-underline hover:underline decoration-sky-500">Список постов</router-link>
  <div class="mt-6">
    Главная страница
  </div>
</template>

<script>
export default {
  name: "Main",
}
</script>

<style scoped>

</style>
