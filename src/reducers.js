import { combineReducers } from 'redux';

import {
  SELECT_POKEMON,
  REQUEST_ART,
  RECEIVE_ART
} from './actions'

function pokemonReducer(state, action) {
  switch (action.type) {
    case SELECT_POKEMON:
      return {
        ...state,
        selected: action.pokemon
      }
    default:
      return state || {}
  }
}

function artReducer(state, action) {
  switch (action.type) {
    case REQUEST_ART:
      return {
        ...state,
        isFetchingArt: true
      }
    case RECEIVE_ART:
      const {species, results} = action.data;
      return {
        ...state,
        isFetchingArt: false,
        results: {
          ...state.results,
          [species]: results
        }
      }
    default:
      return state || {}
  }
}

export default combineReducers({
  pokemon: pokemonReducer,
  art: artReducer
})