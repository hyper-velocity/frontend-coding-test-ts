<template>
  <div
    class="text-left text-white w-80 rounded-lg p-3"
    v-bind:class="{
      'bg-red-500': type === 'error',
      'bg-blue-500': type === 'info',
      'bg-yellow-500': type === 'warning',
    }"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string
  type: 'info' | 'warning' | 'error'
}>()
</script>
