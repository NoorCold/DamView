<template>
  <div class="page-header">
    <div class="logo">
      <img src="@/assets/img/DUT_logo.webp" alt="">
      <span class="text">大坝监测可视端</span>
    </div>
    <div class="navbar">
      <ul class="list">
        <router-link to="/home" active-class="active" class="item" id="index">首页</router-link>
        <router-link to="/struction" active-class="active" class="item" id="struction">大坝结构数据展示</router-link>
        <router-link to="/monitorData" active-class="active" class="item" id="monitorData">监测数据查询</router-link>
        <router-link to="/monitor" active-class="active" class="item" id="monitor">监测仪器及其位置查看</router-link>
      </ul>
    </div>
  </div>
  <div class="under-header"></div>
</template>

<script setup>



</script>

<style lang='less' scoped>
.page-header {
  display: flex;
  height: 70px;
  background-color: rgb(32, 38, 50);
  justify-content: space-between;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);


  .logo {
    img {
      margin: 5px 12px;
      height: 60px;
    }

    .text {
      font-size: 29px;
      line-height: 64px;
      letter-spacing: 4px;
    }
  }

  .navbar {
    height: 100%;
    margin-right: 30px;

    .list {
      display: flex;
      height: 100%;

      .item {
        position: relative;
        padding: 0 20px;
        font-size: 18px;
        line-height: 70px;
        background-color: rgba(42, 84, 156, 0);
        color: #e1e1e1;
        transition: all .25s ease;
        cursor: pointer;
        
        white-space: nowrap;
        text-overflow: clip;

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          width: 0px;
          margin: 0 auto;
          content: "";
          background-color: rgb(225, 225, 225);
          transition: all .3s ease;
        }

        &:hover, &.active {
          background-color: rgba(42, 84, 156, .2);

          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}

.under-header {
  height: 5px;
  background-color: rgb(58, 69, 91);
  border-bottom: 1px solid #4e4e4e;
  border-top: 1px solid #4e4e4e;
}
</style>