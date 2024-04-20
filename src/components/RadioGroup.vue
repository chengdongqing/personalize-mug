<script lang="ts" setup>
defineProps<{
  options: Array<{ icon: string; value: unknown }>
  modelValue: unknown
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="radio-group">
    <div
      v-for="item in options"
      :key="item.value as string"
      :class="{ active: item.value === modelValue }"
      class="radio"
      @click="$emit('update:modelValue', item.value)"
    >
      <img :src="item.icon" alt="" class="icon" draggable="false" />

      <svg
        v-if="item.value === modelValue"
        class="checkmark"
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.radio-group {
  display: flex;
  gap: 12px;
}

.radio {
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  border: 1px solid transparent;
  padding: 3px;

  &.active {
    border-color: var(--color-primary);
  }

  .icon {
    width: 63px;
    height: 63px;
  }

  .checkmark {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 18px;
    height: 18px;
    stroke: #fff;
    stroke-width: 4;
    stroke-linejoin: round;
    stroke-linecap: round;
    background-color: var(--color-primary);
  }
}
</style>
