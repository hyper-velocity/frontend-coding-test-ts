<template>
  <div class="pagination">
    <button
      class="pagination__btn"
      v-bind:disabled="!page"
      v-on:click="() => $emit('goto', 0)"
    >
      &lt;&lt;
    </button>
    <button
      class="pagination__btn"
      v-bind:disabled="!page"
      v-on:click="() => $emit('goto', page - 1)"
    >
      &lt;
    </button>
    <span class="mx-4"> {{ page + 1 }} of {{ pageCount }} </span>
    <button
      class="pagination__btn"
      v-bind:disabled="page === pageCount - 1"
      v-on:click="() => $emit('goto', page + 1)"
    >
      &gt;
    </button>
    <button
      class="pagination__btn"
      v-bind:disabled="page === pageCount - 1"
      v-on:click="() => $emit('goto', pageCount - 1)"
    >
      &gt;&gt;
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PAGE_WINDOW_SIZE } from '../../constants'

defineEmits<{
  (event: 'goto', page: number): void
}>()
const props = defineProps<{
  total: number
  page: number
}>()

const pageCount = computed(() => Math.ceil(props.total / PAGE_WINDOW_SIZE))
</script>

<style>
.pagination__btn {
  width: 32px;
  height: 32px;
  border: 2px solid #1f2937;
  margin: 2px;
}
.pagination__btn:disabled {
  opacity: 0.5;
}
</style>
