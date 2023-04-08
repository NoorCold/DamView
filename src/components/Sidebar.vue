<template>
  <div class="sidebar">
    <ul class="list">
      <template v-for="family in barData.families" :key="family.fname">
        <li class="item" @click='Chosefamily(family.f, $store.state.viewer3D)'>
          <i :class="{'bx bx-checkbox-square icon':!family.isTransparent, 'bx bx-checkbox icon':family.isTransparent}"
             @click.stop='Activefamily(family, $store.state.viewer3D); family.isTransparent=!family.isTransparent'></i>
          <span class="text">{{ family.fname }}</span>
          <i :class="{'bx bx-chevron-down icon':family.isClose && family.HavefType, 'bx bx-chevron-up icon':!family.isClose && family.HavefType}"
             @click.stop='family.isClose=!family.isClose'></i>
        </li>
        <ul :class="{menu:true, close:family.isClose}">
          <template v-for="struction in family.structions">
            <li class="mitem" @click='ChoseStruction(struction.sid, $store.state.viewer3D)'>
              <i :class="{'bx bx-checkbox-square icon':!struction.isTransparent, 'bx bx-checkbox icon':struction.isTransparent}"
                @click.stop='Activestruction(struction, $store.state.viewer3D); struction.isTransparent=!struction.isTransparent'></i>
              <span class='text'>{{struction.sname}}</span>
            </li>
          </template>
        </ul>
      </template>
    </ul>
  </div>
</template>

<script setup>

import { ChoseStruction, Chosefamily, Activefamily, Activestruction } from '@/hooks/bimfaceActions.js'

defineProps({
  barData: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang='less' scoped>
.sidebar {
  width: 260px;
  background-color: rgb(32, 38, 50);
  height: 100%;

  .list {
    display: flex;
    height: 100%;
    overflow-y: scroll;
    flex-direction: column;
    
    &::-webkit-scrollbar {
      height: 8px;
      width: 8px;
      transition: all 0.3s ease-in-out;
      border-radius: 2px;
    }
    &::-webkit-scrollbar-button {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      width: 4px;
      min-height: 15px;
      background: rgba(100, 100, 100, 0.2) !important;
      transition: all 0.3s ease-in-out;
      border-radius: 2px;
    }
    .item {
      position: relative;
      background-color: rgba(82, 100, 113, 0);
      padding: 10px 0 20px 10px;

      cursor: pointer;
      transition: all .2s ease;

      .icon {
        position: relative;
        top: 5px;
        left: 3px;
        font-size: 25px;
      }

      .text {
        margin-left: 8px;
        font-size: 18px;
      }

      &:nth-child(2n) {
        background-color: rgba(82, 100, 113, .06);
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 0px;
        background-color: rgb(74, 92, 106);
        transition: all .2s ease;
      }

      &:hover {
        background-color: rgba(82, 109, 128, .2);

        &::after {
          width: 4px;
        }
      }
    }
    .menu {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      &.close {
        height: 0;
      }
      .mitem {
        position: relative;
        background-color: rgba(82, 100, 113, 0);
        padding: 10px 0 20px 10px;
        cursor: pointer;
        transition: all .2s ease;
        .icon {
          position: relative;
          top: 5px;
          left: 3px;
          font-size: 25px;
        }
        .text {
          margin-left: 8px;
          font-size: 18px;
        }

        &::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 0px;
          background-color: rgb(74, 92, 106);
          transition: all .2s ease;
        }

        &:hover {
          background-color: rgba(82, 109, 128, .2);

          &::after {
            width: 4px;
          }
        }
      }
    }
  }
  
}
</style>