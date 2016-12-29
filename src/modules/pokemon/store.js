import { Store, toImmutable } from 'nuclear-js'
import pokemonList from '../../../data/sm-pokemon.csv'
import actionTypes from './action-types'

const { SELECT_POKEMON } = actionTypes

export default Store({
  getInitialState() {
    return toImmutable({
      selected: 0,
      list: pokemonList
    })
  },

  initialize() {
    this.on(SELECT_POKEMON, selectPokemon)
  }
})

function selectPokemon(state, selected) {
  return state.merge({selected})
}
