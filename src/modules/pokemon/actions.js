import reactor from '../../reactor'
import actionTypes from './action-types'
import artActions from '../art/actions'

const { SELECT_POKEMON } = actionTypes
const { fetchArt } = artActions

export default {
  selectPokemon(pokemon) {
    reactor.dispatch(SELECT_POKEMON, pokemon)
    fetchArt()
  }
}
