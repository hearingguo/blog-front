<template>
  <div class="search">
    <form id="search">
      <label 
        :class="{
          'form-ctrl': 1, 
          'ico-r': 1, 
          'isSearch': isSearch
        }">
        <input type="text">
        <span 
          class="iconfont icon-search"
          @click="isSearch = !isSearch"
          @keyup.enter="submit"></span>
      </label>
    </form>
    
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Search extends Vue {

  private isSearch: boolean = false

  private submit () {
    // search submit
  }
  
}

</script>

<style lang="less" scoped>
@import '../../assets/css/variable.less';
@import '../../assets/css/mixin.less';

.form-ctrl {
  border-color: transparent;
  input {
    width: 0;
    transition: all 0.2s;
  }
  span {
    cursor: pointer;
  }
  &.isSearch {
    border-color: @border;
    input {
      width: 150px;
    }
  }
  .icon-search {
    font-size: 1.3rem;
  }
}

</style>
