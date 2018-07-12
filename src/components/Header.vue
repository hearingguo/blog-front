<template>
  <header class="header">
    <!-- nav -->
    <div class="nav">
      <span class="text-black">High</span>
      <a href="javascript:;">CODE</a>
      <a href="javascript:;">THINK</a>
      <a href="javascript:;">ESSAY</a>
    </div>

    <!-- search -->
    <Search></Search>
    
  </header>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Search from '@/components/common/Search.vue'

@Component({
  components: {
    Search
  }
})
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
      margin-right: @m-l;
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
