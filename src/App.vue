<template>
  <div
    class="min-w-full min-h-screen font-sans text-sm antialiased bg-gray-100 text-center"
  >
    <router-view />
    <toast-box />
  </div>
</template>

<script setup lang="ts">
import ToastBox from './components/toast/box.vue'
</script>
