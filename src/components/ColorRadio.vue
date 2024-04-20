<script lang="ts" setup>
withDefaults(
  defineProps<{
    options?: Array<{ value: string; color: string }>
    modelValue: string
  }>(),
  {
    options: () => [
      {
        value:
          'https://cdn.teeinblue.com/users/36/products/40269/6258f7cb94c70_large.webp',
        color: 'rgb(65, 51, 103)'
      },
      {
        value:
          'https://cdn.teeinblue.com/users/36/products/40269/6258f7cd73db4_large.webp',
        color: 'rgb(171, 49, 80)'
      },
      {
        value:
          'https://cdn.teeinblue.com/users/36/products/40269/6258f7ca96565_large.webp',
        color: 'rgb(0, 0, 0)'
      },
      {
        value:
          'https://cdn.teeinblue.com/users/36/products/40269/6258f7cc2b782_large.webp',
        color: 'rgb(48, 154, 195)'
      },
      {
        value:
          'https://cdn.teeinblue.com/users/36/products/40269/6258f7ccd4c5e_large.webp',
        color: 'rgb(213, 178, 190)'
      }
    ]
  }
)

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="color-radio">
    <div
      v-for="item in options"
      :key="item.value"
      :class="{ active: item.value === modelValue }"
      class="color-item"
      @click="$emit('update:modelValue', item.value)"
    >
      <div :style="{ backgroundColor: item.color }" class="inner" />
    </div>
  </div>
</template>

<style scoped>
.color-radio {
  display: flex;
}

.color-item {
  margin: 8px 8px 0 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;

  .inner {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  &.active {
    cursor: default;
    border-color: var(--color-primary);
  }
}
</style>
