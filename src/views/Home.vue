<template>
  <div class="home">
    <div class="wrap tc">
      <p class="name text-black">HIGH YA</p>
      <p class="desc text-gray">high coding, high writting & high thinking</p>
      <p class="links">
        <router-link class="_blog" to="/index">blog</router-link>
      </p>
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
  width: 100%;
  align-content: center;
  padding-top: 30%;
  .wrap {
    width: 100%;
    .name {
      font-size: @xl-f;
    }
    .links {
      margin-top: @xxl-l;
      a {
        color: @gray;
        text-decoration: none;
        font-size: @m-f;
      }
    }
  }
}
</style>

