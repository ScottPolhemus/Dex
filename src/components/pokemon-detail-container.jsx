import React, { Component, PropTypes } from 'react'
import { connect } from 'nuclear-js-react-addons'

import PokemonDetail from './pokemon-detail.jsx'
import getters from '../modules/pokemon/getters'
import actions from '../modules/pokemon/actions'

@connect(props => ({
  selectedPokemon: getters.selectedPokemon,
  selectedPokemonFamily: getters.selectedPokemonFamily
}))
export default class PokemonDetailContainer extends Component {
  static propTypes = {
    selectedPokemon: PropTypes.object,
    selectedPokemonFamily: PropTypes.object
  }
  render() {
    const {
      selectedPokemon,
      selectedPokemonFamily
    } = this.props

    return (<PokemonDetail pokemon={selectedPokemon} family={selectedPokemonFamily} onSelectPokemon={(selectedPokemon) => {
        actions.selectPokemon(selectedPokemon)
    }} />)
  }
}
