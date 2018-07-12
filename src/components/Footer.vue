<template>
  <footer class="footer">
    <div class="inner">
      <!-- 友情链接 -->
      <div class="item links">
        <a href="javascript:;">xxx</a>
      </div>
      <!-- other -->
      <div class="item others">
        <router-link to="/about">我</router-link>
        &nbsp;&bull;&nbsp;
        <router-link to="/sitemap">归档</router-link>
      </div>
    </div>
  </footer>
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

.footer {
  padding: @m-l;
  border-top: 1px solid @border;
  color: @gray;
  text-align: center;
  font-size: @xs-f;
  .inner {
    display: inline-block;
    .item {
      margin-top: -1px;
      border-top: 1px solid @border;
      border-bottom: 1px solid @border;
      padding: @xs-l @m-l;
      &:nth-of-type(1) {
        border-top: 0;
      }
      &:nth-last-of-type(1) {
        border-bottom: 0;
      }
    }
  }
  
  a {
    color: @gray;
    text-decoration: none;
  }
}

</style>
