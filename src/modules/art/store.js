import request from 'request'
import { Store, toImmutable } from 'nuclear-js'
import actionTypes from './action-types'

const { FETCH_ART, RECEIVE_ART } = actionTypes

export default Store({
  getInitialState() {
    return toImmutable({
      isFetchingArt: false,
      results: {}
    })
  },

  initialize() {
    this.on(FETCH_ART, fetchArt)
    this.on(RECEIVE_ART, receiveArt)
  }
})

function fetchArt(state, pokemon) {
  return state.merge({
    isFetchingArt: true
  })
}

function receiveArt(state, {species, results}) {
  return state.mergeDeep({
    isFetchingArt: false,
    results: {
      [species]: results
    }
  })
}
