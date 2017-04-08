import React, { Component, PropTypes } from 'react'
import { connect } from 'nuclear-js-react-addons'

import PokemonDetail from './pokemon-detail.jsx'
import pokemonGetters from '../modules/pokemon/getters'
import pokemonActions from '../modules/pokemon/actions'
import artGetters from '../modules/art/getters'

@connect(props => ({
  selectedPokemon: pokemonGetters.selectedPokemon,
  selectedPokemonFamily: pokemonGetters.selectedPokemonFamily,
  artResults: artGetters.artResults
}))
export default class PokemonDetailContainer extends Component {
  static propTypes = {
    selectedPokemon: PropTypes.object,
    selectedPokemonFamily: PropTypes.object,
    artResults: PropTypes.object,
    layout: PropTypes.string.isRequired
  }
  render() {
    const {
      selectedPokemon,
      selectedPokemonFamily,
      artResults,
      layout
    } = this.props

    const art = artResults.get(selectedPokemon.get('species'))

    return (<PokemonDetail pokemon={selectedPokemon} family={selectedPokemonFamily}
      art={art} onSelectPokemon={(selectedPokemon) => {
        pokemonActions.selectPokemon(selectedPokemon)
    }} layout={layout} />)
  }
}
