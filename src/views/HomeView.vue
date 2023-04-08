<template>
  <div class="home-view">
    <div class="container dam-view">
      <div class="box" id="home-dam-view"></div>
    </div>
  </div>
</template>

<script setup>
import useBimface from '@/hooks/useBimface';
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const viewToken = store.state.viewToken

onMounted(() => {
  store.state.viewer3D = null
  useBimface(viewToken, "home-dam-view", store)
})

</script>

<style lang='less' scoped>
.home-view {
  position: relative;
  box-sizing: border-box;
  height: calc(100% - 10px);
  margin-right: 10px;

  flex: 1;

  .container {
    position: absolute;
    box-sizing: border-box;
    padding: 10px 0 0 10px;

    .box {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 10px;
      background-color: rgb(34, 34, 34);
      border-radius: 20px;
      overflow: hidden;
    }
  }

  .dam-view {
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // transition: all .1s ease;
  }

}
</style>