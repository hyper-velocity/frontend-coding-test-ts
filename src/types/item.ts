export type Item = {
  name: string
  url: string
}

export type ItemDetails = {
  id: number
  name: string
  attributes: {
    name: string
    url: string
  }[]
  category: {
    name: string
    url: string
  }
  cost: number
  effect_entries: {
    effect: string
    language: {
      name: string
      url: string
    }
    short_effect: string
  }[]
  flavor_text_entries: {
    language: {
      name: string
      url: string
    }
    text: string
    version_group: {
      name: string
      url: string
    }
  }[]
  fling_effect: null | number
  fling_power: null | number
  game_indices: {
    game_index: number
    generation: {
      name: string
      url: string
    }
  }[]
  held_by_pokemon: {
    pokemon: {
      name: string
      url: string
    }
    version_details: {
      rarity: string
      version: {
        name: string
        url: string
      }
    }[]
  }[]
  machines: []
  names: {
    language: {
      name: string
      url: string
    }
    name: string
  }[]
  sprites: { default: string }
}
