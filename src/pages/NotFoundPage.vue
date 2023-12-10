<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div
    class="h-screen w-screen bg-black text-white flex justify-center items-center"
  >
    <div class="text-center">
      <h1 class="mb-1 text-9xl">404</h1>
      <p class="mb-3">Упс! Страница не найдена.</p>
      <el-button @click="router.push({ name: 'index' })" size="large">
        Вернуться в панель
      </el-button>
    </div>
  </div>
</template>


<style scoped></style>
