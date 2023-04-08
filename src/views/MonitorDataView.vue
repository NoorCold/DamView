<template>
  <sidebar :bar-data="$store.state.mData"></sidebar>
  <div class="containers">
    <div class="container damView">
      <div class="box" id="mdata-dam-view"></div>
    </div>
    <div class="container monitorDataList">
      <div class="box">
        <div class="subtitle">大坝监测数据表</div>
        <h1 class="title">监测仪器:温度计</h1>
        <div class="listHeader">
          <span class="left">
            <p>日期</p>
          </span>
          <span class="right">
            <p>温度(℃)</p>
          </span>
        </div>
        <ul class="list">
          <template v-for="item in $store.state.mListData" :key="item.ID">
            <li class="item">
              <span class="key">
                <p class="text">{{ item["日期"] }}</p>
              </span>
              <span class="value">
                <p class="text">{{ item["温度(℃)"] }}</p>
              </span>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="container monitorDataChart">
      <div class="box" id="monitorChart"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import * as echarts from 'echarts';

import useBimface from '@/hooks/useBimface';
import Sidebar from '@/components/Sidebar.vue'

const store = useStore()
let monitorChart

const viewToken = store.state.viewToken
onMounted(() => {
  store.state.viewer3D = null
  useBimface(viewToken, "mdata-dam-view", store)

  monitorChart = echarts.init(document.getElementById('monitorChart'));
  const option = store.state.echartsOption
  monitorChart.setOption(option);
})

window.onresize = function () {
  monitorChart.resize();
};


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
    width: 70%;
    height: 50%;
  }
  .monitorDataList {
    top: 0;
    right: 0;
    bottom: 0;
    width: 30%;

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

    .listHeader {
      display: flex;
      height: 40px;
      background-color: rgba(255,255,255,.1);
      
      span {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          white-space: nowrap;
          text-overflow: clip;
        }
      }

      .left {
        flex-basis: 50%;
      }

      .right {
        flex-basis: 50%;
      }
    }
  
    .list {
      display: flex;
      height: calc(100% - 86px);
      flex-direction: column;
  
  
      .item {
        font-size: 18x;
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
        }
  
        &:nth-child(odd) {
          background-color: rgba(255,255,255,.05);
        }
      }
    }
  }
  .monitorDataChart {
    left: 0;
    bottom: 0;
    height: 50%;
    width: 70%;
  }
}
</style>