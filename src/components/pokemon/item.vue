<template>
  <div
    v-if="details"
    class="relative flex flex-row items-stretch w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 mb-2"
  >
    <img
      class="absolute -top-1 left-4 border-2 border-gray-300 bg-gray-200 rounded-md"
      v-bind:src="details.sprites.default"
    />
    <div
      class="flex flex-row items-center absolute -top-1 right-4 h-8 border-2 border-gray-300 bg-gray-200 rounded-md px-1"
    >
      <span class="font-bold text-yellow-600 mr-1">
        {{ details.cost }}
      </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Gold_coin_icon.png"
        width="15"
        height="15"
      />
    </div>
    <div class="grow border-2 border-gray-300 bg-gray-200 rounded-sm px-2 py-4">
      <h6 class="font-bold text-lg leading-6 mb-2">{{ enName }}</h6>
      <div>
        {{ enDescription }}
      </div>
    </div>
  </div>
  <div
    v-else
    class="relative flex flex-row items-stretch w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 mb-2"
  >
    <div
      class="absolute -top-1 left-4 w-8 h-8 border-2 border-gray-300 bg-gray-200 rounded-md"
    />
    <div
      class="grow border-2 border-gray-300 bg-gray-200 rounded-sm px-2 py-4"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import apis from '../../apis'
import { Item, ItemDetails } from '../../types/item'

const props = defineProps<Item>()

const details = ref(null as null | ItemDetails)
const enName = computed(
  () =>
    details.value?.names.find(({ language }) => language.name === 'en')?.name,
)
const enDescription = computed(
  () =>
    details.value?.flavor_text_entries.find(
      ({ language }) => language.name === 'en',
    )?.text,
)

onMounted(async () => {
  details.value = await apis.items.getItemDetails(props.url)
  console.log({ ...details.value })
})
</script>
