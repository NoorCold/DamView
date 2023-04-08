<template>
  <div class="app">
    <page-header></page-header>

    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script setup>

import PageHeader from "./components/PageHeader.vue"

</script>

<style lang="less" scoped>
.main {
  position: absolute;
  left: 0;
  right: 0;
  top: 77px;
  bottom: 0;
  
  display: flex;
}
</style>