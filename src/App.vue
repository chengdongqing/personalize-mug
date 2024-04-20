<script lang="ts" setup>
import { CupProps } from '@/models'
import PreviewPanel from '@/PreviewPanel.vue'
import SkuPanel from '@/SkuPanel.vue'
import { reactive } from 'vue'

const props = reactive<CupProps>({
  cupColor:
    'https://cdn.teeinblue.com/users/36/products/40269/6258f7cb94c70_large.webp',
  background:
    'https://cdn.teeinblue.com/users/36/cliparts/95/5eb3825ca6932_large.png',
  dogCount: 1,
  skinColor: 'light',
  handGesture: 'holdDrink',
  womanName: '',
  fontColor: '#A55858',
  fontFamily: 'GochiHand'
})
</script>

<template>
  <div class="app-container">
    <PreviewPanel style="flex: 1" v-bind="props" />
    <SkuPanel :model-value="props" style="flex: 1" />
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1400px;
  margin: 100px auto;
  padding: 0 100px;
  display: flex;
}
</style>
