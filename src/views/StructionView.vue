<template>
  <sidebar :bar-data="$store.state.dsData"></sidebar>
  <div class="containers">
    <div class="container damView">
      <div class="box" id="s-dam-view"></div>
    </div>
    <div class="container structionData">
        <div class="box">
          <h1 class="title">坝段详情</h1>
          <ul class="list">
            <li class="item">
              <span class="key">
                <p class="text">坝高</p>
              </span>
              <span class="value">
                <p class="text">56m</p>
              </span>
            </li>
            <li class="item">
              <span class="key">
                <p class="text">坝长</p>
              </span>
              <span class="value">
                <p class="text">140m</p>
              </span>
            </li>
            <li class="item">
              <span class="key">
                <p class="text">坝顶宽度</p>
              </span>
              <span class="value">
                <p class="text">7m</p>
              </span>
            </li>
            <li class="item">
              <span class="key">
                <p class="text">坝底宽度</p>
              </span>
              <span class="value">
                <p class="text">40m</p>
              </span>
            </li>
            <li class="item">
              <span class="key">
                <p class="text">坝顶高程</p>
              </span>
              <span class="value">
                <p class="text">104m</p>
              </span>
            </li>
            <li class="item">
              <span class="key">
                <p class="text">坝底高程</p>
              </span>
              <span class="value">
                <p class="text">48m</p>
              </span>
            </li>
            <li class="item">
              <span class="key">
                <p class="text">坝体材料</p>
              </span>
              <span class="value">
                <p class="text">混凝土</p>
              </span>
            </li>
          </ul>
        </div>
    </div>
    <div class="container structionImg">
      <div class="box">
        <h1 class="title">坝段剖面图</h1>
        <img src="@/assets/img/左岸溢流坝段剖面图.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

import useBimface from '@/hooks/useBimface';
import Sidebar from '@/components/Sidebar.vue'

const store = useStore()

const viewToken = store.state.viewToken
onMounted(() => {
  store.state.viewer3D = null
  useBimface(viewToken, "s-dam-view", store)
})

</script>

<style lang='less' scoped>
.containers {
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
  .damView {
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
  }
  .structionData {
    top: 0;
    right: 0;
    height: 50%;
    width: 20%;
  
    .title {
      font-size: 23px;
      text-align: center;
      margin-bottom: 13px;
      white-space: nowrap;
      text-overflow: clip;
    }
  
    .list {
      display: flex;
      height: calc(100% - 50px);
      flex-direction: column;
  
  
      .item {
        font-size: 20px;
        display: flex;
        flex: 1 1 0%;
        border-bottom: 2px dashed #AAAAAA;
        
  
        span {
          flex-basis: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
  
          p {
            white-space: nowrap;
            text-overflow: clip;
          }
  
          &:first-child {
            border-right: 2px dashed #AAAAAA;
          }
        }
  
        &:last-child {
          border-bottom: none;
        }
  
        &:nth-child(odd) {
          background-color: rgba(255,255,255,.05);
        }
      }
    }
  }
  
  .structionImg {
    bottom: 0;
    right: 0;
    height: 50%;
    width: 20%;
  
    .title {
      font-size: 23px;
      text-align: center;
      margin-bottom: 13px;
      
      white-space: nowrap;
      text-overflow: clip;
    }
  
    img {
      width: 100%;
    }
  }
}

</style>