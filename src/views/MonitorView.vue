<template>
  <sidebar :bar-data="$store.state.mData"></sidebar>
  <div class="containers">
    <div class="container damView">
      <div class="box" id="m-dam-view"></div>
    </div>
    <div class="container monitorList">
        <div class="box">
          <div class="subtitle">环境量类</div>
          <h1 class="title">温度计</h1>
          <ul class="list">
            <li class="item">
              <span class="key">
                <p class="text">长度</p>
              </span>
              <span class="value">
                <p class="text">60.0mm</p>
              </span>
            </li>
            <li class="item">
              <span class="key">
                <p class="text">直径</p>
              </span>
              <span class="value">
                <p class="text">8.0mm</p>
              </span>
            </li>
            <li class="item">
              <span class="key">
                <p class="text">型号</p>
              </span>
              <span class="value">
                <p class="text">RT-2</p>
              </span>
            </li>
            <li class="item">
              <span class="key">
                <p class="text">测量范围</p>
              </span>
              <span class="value">
                <p class="text">-55~+125℃</p>
              </span>
            </li>
            <li class="item">
              <span class="key">
                <p class="text">测量精度</p>
              </span>
              <span class="value">
                <p class="text">±0.3℃</p>
              </span>
            </li>
            <li class="item">
              <span class="key">
                <p class="text">制造商</p>
              </span>
              <span class="value">
                <p class="text">四川葛南仪器有限公司</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    <div class="container monitorImg">
      <div class="box">
        <h1 class="title">监测器剖面图</h1>
        <img src="@/assets/img/温度计模型图.png" alt="">
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
  useBimface(viewToken, "m-dam-view", store)
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
  .monitorList {
    top: 0;
    right: 0;
    height: 50%;
    width: 20%;

    .box {
      border-top-left-radius: 0 !important;
    }
  
    .subtitle {
      position: absolute;
      top: 13px;
      left: 18px;
      font-size: 15px;
      color: #aaa;
    }

    .title {
      font-size: 23px;
      text-align: center;
      margin-top: 8px;
      margin-bottom: 13px;
      white-space: nowrap;
      text-overflow: clip;
    }
  
    .list {
      display: flex;
      height: calc(100% - 58px);
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
          font-size: 16px;
          
          .value {
            padding: 0 7px;
          }
        }
  
        &:nth-child(odd) {
          background-color: rgba(255,255,255,.05);
        }
      }
    }
  }
  .monitorImg {
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
      padding-top: 30%;
      width: 100%;
    }
  }
}

</style>