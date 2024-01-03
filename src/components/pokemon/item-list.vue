<template>
  <div class="flex flex-row flex-wrap items-stretch">
    <pokemon-item
      v-for="item in items"
      v-bind:key="item.name"
      v-bind:name="item.name"
      v-bind:url="item.url"
    />
  </div>
</template>

<script setup lang="ts">
import { Item } from '../../types/item'

import PokemonItem from './item.vue'

defineProps<{
  items: Item[]
}>()
</script>
