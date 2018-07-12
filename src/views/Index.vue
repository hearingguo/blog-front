<template>
  <div class="index">
    <!-- header -->
    <Header></Header>

    <!-- essay list -->
    <div class="main">
      main
    </div>

    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Index extends Vue {
  
}

</script>

<style lang="less" scoped>
@import '../assets/css/variable.less';
@import '../assets/css/mixin.less';

.index {
  flex-grow: 1;
  .flexbox();
  flex-direction: column;
}

</style>
