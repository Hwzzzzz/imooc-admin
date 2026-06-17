<template>
  <el-config-provider :locale="store.getters.language === 'en' ? en : zhCn">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { useStore } from 'vuex'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const store = useStore()
</script>
