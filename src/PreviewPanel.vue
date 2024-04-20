<script lang="ts" setup>
import OnePet from '@/components/artworks/1Pet.vue'
import TwoPet from '@/components/artworks/2Pets.vue'
import ThreePet from '@/components/artworks/3Pets.vue'
import useElementSize from '@/hooks/useElementSize.ts'
import { CupProps } from '@/models'
import { ref } from 'vue'

defineProps<CupProps>()

const mockupImageRef = ref<HTMLImageElement>()
const mockupImageSize = useElementSize(mockupImageRef)
</script>

<template>
  <div>
    <img ref="mockupImageRef" :src="cupColor" alt="" class="mockup-image" />

    <OnePet
      v-if="dogCount === 1"
      :mockupImageSize="mockupImageSize"
      v-bind="$props"
    />
    <TwoPet
      v-else-if="dogCount === 2"
      :mockupImageSize="mockupImageSize"
      v-bind="$props"
    />
    <ThreePet
      v-else-if="dogCount === 3"
      :mockupImageSize="mockupImageSize"
      v-bind="$props"
    />
  </div>
</template>

<style scoped>
.mockup-image {
  width: 100%;
  aspect-ratio: 1;
}

.mockup-artwork {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
}
</style>
