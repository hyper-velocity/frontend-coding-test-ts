<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-end pointer-events-none p-2 z-30"
  >
    <toast-ticket
      v-for="toast in toasts"
      v-bind:key="toast.uuid"
      v-bind:message="toast.message"
      v-bind:type="toast.type"
      class="mb-2"
    />
  </div>
</template>

<script setup lang="ts">
import ToastTicket from './ticket.vue'
import { toasts } from '../../use/toasts'
</script>
