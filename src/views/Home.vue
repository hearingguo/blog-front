<template>
  <div class="home">
    <div class="wrap">
      <p class="name">highya</p>
      <p class="desc">coding, writting & thinking</p>
      <router-link to="/code">blog</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Home extends Vue {}
</script>

<style lang="less" scoped>

@import '../assets/css/variable.less';
@import '../assets/css/mixin.less';

.home {
  .flexbox();
  .wrap {
    .name {
      
    }
  }
  
}

</style>

