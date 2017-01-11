import React, { Component, PropTypes } from 'react'
import { connect } from 'nuclear-js-react-addons'

import PokemonList from './pokemon-list.jsx'
import getters from '../modules/pokemon/getters'
import actions from '../modules/pokemon/actions'

@connect(props => ({
  pokemonList: getters.pokedexList,
  selectedPokemon: getters.selectedPokemon
}))
export default class PokemonListContainer extends Component {
  static propTypes = {
    pokemonList: PropTypes.object.isRequired,
    selectedPokemon: PropTypes.object,
    layout: PropTypes.string
  }
  render() {
    const {
      pokemonList,
      selectedPokemon,
      layout
    } = this.props

    return (<PokemonList pokemonList={pokemonList} selectedPokemon={selectedPokemon} onSelectPokemon={(selectedPokemon) => {
        actions.selectPokemon(selectedPokemon)
    }} layout={layout} />)
  }
}
