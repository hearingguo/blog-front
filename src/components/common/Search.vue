<template>
  <div class="search">
    <form id="search">
      <label class="form-ctrl ico-r">
        <input type="text">
        <span class="iconfont icon-search"></span>
      </label>
    </form>
    
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Search extends Vue {
  
}

</script>

<style lang="less" scoped>

</style>
