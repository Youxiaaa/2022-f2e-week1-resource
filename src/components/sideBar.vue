<script setup>
import { ref } from 'vue'
import infoImg from '../assets/images/btn_menu_info.png'
import listImg from '../assets/images/btn_menu_list.png'
import strategyImg from '../assets/images/btn_menu_strategy.png'
import jobImg from '../assets/images/btn_menu_job.png'

const isOpen = ref(false)

const menuList = ref([
  { id: 1, label: '關卡資訊', imgUrl: infoImg, path: 'https://2022.thef2e.com/news'},
  { id: 2, label: '作品列表', imgUrl: listImg, path: 'https://2022.thef2e.com/works'},
  { id: 3, label: '攻略資源', imgUrl: strategyImg, path: 'https://hackmd.io/ofJD4K7iSI65V19zxC7d0w'},
  { id: 4, label: '求職專區', imgUrl: jobImg, path: 'https://2022.thef2e.com/jobs'}
])
</script>

<template>
  <div>
    <div class="w-135px h-full fixed top-0 bg-#007FAB z-9999 duration-300" :class="[!isOpen ? '-left-135px' : '-left-0']">
      <!-- 左邊線條 -->
      <img src="../assets/images/menuSide.png" alt="left_side" class="absolute top-0 right-0 xl:-right-20px h-full w-20px">
      <!-- 左側按鈕 -->
      <img v-if="!isOpen" @click="isOpen = true" src="../assets/images/btn_burger.png" alt="btn_burger" class="absolute top-5% xl:top-1/2 -right-60px xl:-right-75px -translate-y-1/2 cursor-pointer">
      <img v-else @click="isOpen = false" src="../assets/images/btn_burger_close.png" alt="btn_burger_close" class="absolute top-5% xl:top-1/2 -right-60px xl:-right-75px -translate-y-1/2 cursor-pointer">

      <ul class="flex flex-col gap-40px items-center pt-40px">
        <li v-for="(item, idx) in menuList" :key="item.id">
          <a :href="item.path" target="_blank" class="flex flex-col gap-4px w-full decoration-none duration-300" :class="[`delay-${(idx * 1000)}`, isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20px opacity-0']">
            <img :src="item.imgUrl" :alt="item.label" class="w-60px h-60px">
            <p class="text-#FFC37D">{{ item.label }}</p>
          </a>  
        </li>
      </ul>
      
    </div>
  </div>
</template>