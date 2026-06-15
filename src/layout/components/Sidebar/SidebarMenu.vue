<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :collapse="!$store.getters.sidebarOpened"
    :uniqueOpened="true"
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
  >
    <SidebarItem v-for="item of routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script setup>
import SidebarItem from './SidebarItem'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { generateMenus, filterRouters } from '@/utils/route.js'
const router = useRouter()
const routes = computed(() => {
  return generateMenus(filterRouters(router.getRoutes()))
})

const route = useRoute()
const activeMenu = computed(() => {
  return route.path
})
console.log(routes.value)
</script>
