<template>
  <div class="index">
    <Header>

    </Header>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'

@Component({
  components: {
    Header
  }
})
export default class Index extends Vue {
  
}

</script>

<style lang="less" scoped>

</style>
