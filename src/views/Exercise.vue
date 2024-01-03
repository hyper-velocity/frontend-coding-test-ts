<template>
  <div class="container justify-center mt-10 mx-auto">
    <h1 class="font-extrabold text-3xl leading-10">Pokémon Items</h1>
    <div class="mt-8">
      <common-pagination
        v-bind:total="pagination.total"
        v-bind:page="pagination.page"
        v-on:goto="jumpTo"
      />
      <pokemon-item-list class="my-4" v-bind:items="items" />
      <common-pagination
        v-bind:total="pagination.total"
        v-bind:page="pagination.page"
        v-on:goto="jumpTo"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'

import apis from '../apis'
import { Item } from '../types/item'
import { useToasts } from '../use/toasts'

import CommonPagination from '../components/common/pagination.vue'
import PokemonItemList from '../components/pokemon/item-list.vue'

const { toast } = useToasts()

const pagination = reactive({
  total: 0,
  page: 0,
})
const items = ref([] as Item[])

const jumpTo = (page: number) => {
  pagination.page = page
}

watch(
  () => pagination.page,
  async () => {
    try {
      const res = await apis.items.getItems(pagination.page)
      pagination.total = res.count
      items.value = res.results
      toast({ message: `${items.value.length} items have been fetched` })
    } catch (err) {
      toast({
        message: 'An unexpected error occured while fetching items',
        type: 'error',
      })
    }
  },
  { immediate: true },
)
</script>
