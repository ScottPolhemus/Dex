import reactor from '../../reactor'
import actionTypes from './action-types'

const { SELECT_POKEMON } = actionTypes

export default {
  selectPokemon(pokemon) {
    reactor.dispatch(SELECT_POKEMON, pokemon)
  }
}
