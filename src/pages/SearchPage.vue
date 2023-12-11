<script setup lang="ts">
import {onBeforeRouteLeave, useRoute, useRouter} from "vue-router";
import {computed, ref, watch} from "vue";
import {useHousesStore} from "src/store/houses";
import {House} from "src/shared/models/House.model";

const router = useRouter()
const route = useRoute()
const houseStore = useHousesStore()
let timer: number

const houses = computed<House[]>(() => houseStore.items)

function init()
{
  if (houseStore.items.length <= 0 || Number(route.query.refresh)) {
    houseStore.getList()
  }
}

init()

watch(
    () => [houseStore.page],
    () => {
      houseStore.getList()
      window.scrollTo(0, 0)
    }
)

watch(
    () => [houseStore.name],
    () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        houseStore.getList()
      }, 500)
    }
)

watch(
    () => [houseStore.price_from],
    () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        houseStore.getList()
      }, 500)
    }
)

watch(
    () => [houseStore.price_to],
    () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        houseStore.getList()
      }, 500)
    }
)

watch(
    () => [houseStore.bedrooms],
    () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        houseStore.getList()
      }, 500)
    }
)

watch(
    () => [houseStore.bathrooms],
    () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        houseStore.getList()
      }, 500)
    }
)

watch(
    () => [houseStore.storeys],
    () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        houseStore.getList()
      }, 500)
    }
)

watch(
    () => [houseStore.garages],
    () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        houseStore.getList()
      }, 500)
    }
)

function clearFilters()
{
  houseStore.name = undefined
  houseStore.price_from = undefined
  houseStore.price_to = undefined
  houseStore.bathrooms = undefined
  houseStore.bedrooms = undefined
  houseStore.garages = undefined
  houseStore.storeys = undefined
  houseStore.getList()
}
</script>

<template>

    <div class="flex flex-row grid grid-cols-4 gap-2 mb-6">
      <div class="flex">
        <div class="mr-3 w-2/5">Name</div>
        <el-input
            class="w-3/5 w"
            clearable
            v-model="houseStore.name"
        ></el-input>
      </div>
      <div class="flex">
        <div class="mr-3 w-2/5">Price from</div>
        <el-input-number
            class="w-3/5"
            :min="0"
            :step="1000"
            v-model="houseStore.price_from"
        ></el-input-number>
      </div>
      <div class="flex">
        <div class="mr-3 w-2/5">Price to</div>
        <el-input-number
            class="w-3/5"
            :min="0"
            :step="1000"
            v-model="houseStore.price_to"
        ></el-input-number>
      </div>
      <div class="flex">
        <div class="mr-3 w-2/5">Bathrooms</div>
        <el-input-number
            class="w-3/5"
            :min="0"
            v-model="houseStore.bathrooms"
        ></el-input-number>
      </div>
      <div class="flex">
        <div class="mr-3 w-2/5" >Bedrooms</div>
        <el-input-number
            class="w-3/5"
            :min="0"
            v-model="houseStore.bedrooms"
        ></el-input-number>
      </div>
      <div class="flex">
        <div class="mr-3 w-2/5" >Storeys</div>
        <el-input-number
            class="w-3/5"
            :min="0"
            v-model="houseStore.storeys"
        ></el-input-number>
      </div>
      <div class="flex">
        <div class="mr-3 w-2/5" >Garages</div>
        <el-input-number
            class="w-3/5"
            :min="0"
            v-model="houseStore.garages"
        ></el-input-number>
      </div>
    </div>

  <div class="grid grid-cols-4 gap-4">
    <el-button @click="clearFilters()">
      Clear
    </el-button>
  </div>

  <el-table class="mt-6" ref="tableRef" row-key="date" :data="houses" style="width: 100%">
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="price" label="Price" />
    <el-table-column prop="bedrooms" min-width="100px" label="Bedrooms" />
    <el-table-column prop="bathrooms" min-width="110px" label="Bathrooms" />
    <el-table-column prop="storeys" min-width="100px" label="Storeys" />
    <el-table-column prop="garages" min-width="100px" label="Garages" fixed="right" />
  </el-table>

  <!-- PAGINATION -->
  <el-pagination
      background
      layout="prev, pager, next"
      class="mt-6"
      :total="houseStore.totalCount"
      :page-size="houseStore.limit"
      :current-page="houseStore.page"
      @current-change="houseStore.page = $event"
  />
</template>

<style scoped>
</style>