<script lang="ts" setup>
defineProps<{
  label: string
  required?: boolean
}>()
</script>

<template>
  <div class="form-item">
    <div class="form-item-label">
      <span>{{ label }}</span>
      <span v-if="required" class="required">*</span>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.form-item {
  margin-bottom: 25px;
}

.form-item-label {
  margin-bottom: 8px;
  line-height: 1.4;
  color: rgb(var(--color-font), 0.75);

  span {
    font-size: 13px;
    font-weight: bold;
  }

  .required {
    margin-left: 5px;
    color: #ea4335;
  }
}
</style>
