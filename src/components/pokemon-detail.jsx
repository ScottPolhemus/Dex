import PropTypes from 'prop-types'
import React, { Component } from 'react'
import _ from 'lodash'

import PokemonArt from './pokemon-art-container.jsx';

function renderEvoTree(pokemon) {
  if (pokemon['evolutions']) {
    return (<ul key={pokemon['id']}>
      <li>{pokemon['species']}
      {pokemon['evolutions'].map((p) => {
        return renderEvoTree(p)
      })}
      </li>
    </ul>)
  }

  return (<ul key={pokemon['id']}><li>{pokemon['species']}</li></ul>)
}

export default class PokemonDetail extends Component {
  static propTypes = {
    selectedPokemon: PropTypes.object,
    selectedPokemonFamily: PropTypes.object,
    onSelectPokemon: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
  }
  renderFamily() {
    if (this.props.selectedPokemonFamily && this.props.selectedPokemonFamily['evolutions']) {
      return (<div className="pokemon-family">{renderEvoTree(this.props.selectedPokemonFamily)}</div>)
    }
  }
  renderFanArt() {
    return (<PokemonArt selectedPokemon={this.props.selectedPokemon} />)
  }
  render() {
    const {
      ndex,
      species,
      class: pClass,
      height,
      weight
    } = this.props.selectedPokemon || {}

    const dexNum = ("00"+ndex).slice(-3)

    const {
      layout
    } = this.props

    if (ndex) {
      return (<div className="pokemon-detail">
        <h1>{species}</h1>
        <h2>{pClass} - {height}, {weight}</h2>
        {this.renderFanArt()}
        {this.renderFamily()}
      </div>)
    }

    return (<div className="pokemon-detail">
      <p>Select a Pokémon to get started.</p>
    </div>)
  }
}
