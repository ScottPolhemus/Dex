import { toImmutable } from 'nuclear-js'

const pokemon = ['pokemon']

const pokemonList = ['pokemon', 'list']

const pokedexList = [
  pokemonList,
  (pokemonList) => {
    return pokemonList.setSize(151)
  }
]

const selectedPokemon = [
  pokemonList,
  ['pokemon', 'selected'],
  (list, selected) => {
    if (selected) {
      const index = selected - 1
      return list.get(index)
    }

    return toImmutable({})
  }
]

function getBase(pkmn, list) {
  if (!pkmn.get('pre-evolution')) {
    // No pre-evolution
    return pkmn
  }

  const pre = list.find((p) => {
    return p.get('species') === pkmn.get('pre-evolution')
  })

  if (!pre) {
    // Pre-evolution is not visible in current dex
    return pkmn
  }

  return getBase(pre, list)
}

function getFamily(basePkmn, list) {
  const evolutions = list.filter((p) => {
    return p.get('pre-evolution') === basePkmn.get('species')
  }).map((p) => {
    return getFamily(p, list)
  })

  if (evolutions.size) {
    return basePkmn.set('evolutions', evolutions)
  }

  const megas = list.filter((p) => {
    if (p.get('ndex') === basePkmn.get('ndex')) {
      return p.get('forme').indexOf('(Mega') !== -1
    }
  }).map((p) => {
    const name = p.get('forme')
    return p.set('species', name.slice(name.indexOf('(')+1, name.indexOf(')')))
  })

  if (megas.size) {
    return basePkmn.set('evolutions', megas)
  }

  return basePkmn
}

const selectedPokemonFamily = [
  pokedexList,
  selectedPokemon,
  (list, selected) => {
    if (selected) {
      const basePkmn = getBase(selected, list)
      return getFamily(basePkmn, list)
    }

    return toImmutable([])
  }
]

export default { pokemon, pokemonList, pokedexList, selectedPokemon, selectedPokemonFamily }
