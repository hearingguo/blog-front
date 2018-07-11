<template>
  <div class="header">
    <div class="nav">
      <span class="text-black">High</span>
      <a href="javascript:;">coding</a>
      <a href="javascript:;">writting</a>
      <a href="javascript:;">thinking</a>
    </div>
    <div>
      <span class="iconfont icon-search"></span>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  
}

</script>

<style lang="less" scoped>
@import '../assets/css/variable.less';
@import '../assets/css/mixin.less';

.header {
  .flexbox();
  align-items: center;
  padding: @m-l;
  border-bottom: 1px solid @border;

  .nav {
    > span {
      font-size: @l-f;
    }
    a {
      color: @text;
      text-decoration: none;
      display: inline-block;
      margin: 0 @s-l;
    }
  }
}

</style>
