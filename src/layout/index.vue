<template>
  <div class="app-wrapper">
    <sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fiexd-header">
        <navbar></navbar>
      </div>
      <app-main />
    </div>
  </div>
</template>

<script setup>
import variables from '@/styles/variables.module.scss'
import AppMain from './components/AppMain'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar/index'

console.log(variables)
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
