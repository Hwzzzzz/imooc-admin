<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) of breadcrumbData"
        :key="item.path"
      >
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect">
          {{ generateTitle(item.meta.title) }}</span
        >
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{
          generateTitle(item.meta.title)
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { generateTitle } from '@/utils/i18n.js'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const router = useRouter()
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  { immediate: true }
)

const onLinkClick = (item) => {
  router.push(item.path)
}

const store = useStore()
const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .redirect {
    color: #666;
    font-weight: 600;
  }
  .no-redirect {
    color: v-bind(linkHoverColor);
  }
}

::v-deep .no-redirect {
  color: #97a8be;
  cursor: text;
}
</style>
