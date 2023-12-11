<script setup lang="ts">
import {computed, ref} from "vue";
import {Platform} from "quasar";
import {useRoute, useRouter} from 'vue-router'
import {Icon} from "@iconify/vue";

const route = useRoute()
const router = useRouter()

const isCollapse = ref(false)
const isMobile = Platform.is.mobile

if (isMobile) {
  isCollapse.value = true
}
</script>

<template>
  <el-container class="layout-container-demo">
    <el-header class="flex items-center justify-between" style="background-color: #21eeeb">
      <h2>House search</h2>
    </el-header>

    <el-container>

      <el-main class="">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
</style>