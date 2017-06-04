import { createSelector } from 'reselect'

export const pokemon = state => state.pokemon

export const pokemonList = createSelector(
  pokemon,
  pokemon => pokemon.list
)

export const selectedPokemonNumber = createSelector(
  pokemon,
  pokemon => pokemon.selected
)

export const pokedexList = createSelector(
  pokemonList,
  pokemonList => pokemonList.slice(0, 151)
)

export const selectedPokemon = createSelector(
  pokemonList,
  selectedPokemonNumber,
  (list, selected) => {
    if (selected) {
      return list[selected - 1]
    }
    
    return {}
  }
)

function getBase(pkmn, list) {
  if (!pkmn['pre-evolution']) {
    // No pre-evolution
    return pkmn
  }

  const pre = list.find((p) => {
    return p['species'] === pkmn['pre-evolution']
  })

  if (!pre) {
    // Pre-evolution is not visible in current dex
    return pkmn
  }

  return getBase(pre, list)
}

function getFamily(basePkmn, list) {
  const evolutions = list.filter((p) => {
    return p['pre-evolution'] === basePkmn['species']
  }).map((p) => {
    return getFamily(p, list)
  })

  if (evolutions.length) {
    basePkmn.evolutions = evolutions
    return basePkmn
  }

  const megas = list.filter((p) => {
    if (p['ndex'] === basePkmn['ndex']) {
      return p['forme'].indexOf('(Mega') !== -1
    }
  }).map((p) => {
    const name = p['forme']
    p.species = name.slice(name.indexOf('(')+1, name.indexOf(')'))
    return p
  })

  if (megas.length) {
    basePkmn.evolutions = megas
  }

  return basePkmn
}

export const selectedPokemonFamily = createSelector(
  pokedexList,
  selectedPokemon,
  (list, selected) => {
    if (selected) {
      const basePkmn = getBase(selected, list)
      return getFamily(basePkmn, list)
    }

    return []
  }
)

export const art = state => state.art

export const artResults = createSelector(
  art,
  art => art.results
)

export const selectedPokemonArt = createSelector(
  selectedPokemon,
  artResults,
  (selected, results) => {
    if (results) {
      return results[selected.species];
    }
    
    return []
  }
)