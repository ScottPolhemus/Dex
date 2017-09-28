import PropTypes from 'prop-types'
import React, { Component } from 'react'
import _ from 'lodash'

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
    selectedPokemonArt: PropTypes.array,
    onSelectPokemon: PropTypes.func.isRequired,
    fetchArt: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedPokemon.species !== this.props.selectedPokemon.species) {
      this.props.fetchArt(nextProps.selectedPokemon.species);
    }
  }
  renderFamily() {
    if (this.props.selectedPokemonFamily && this.props.selectedPokemonFamily['evolutions']) {
      return (<div className="pokemon-family">{renderEvoTree(this.props.selectedPokemonFamily)}</div>)
    }
  }
  renderFanArt() {
    const {selectedPokemonArt} = this.props;
    if (selectedPokemonArt && selectedPokemonArt.length) {
      const first = selectedPokemonArt[0];
      return (<div>
        <img src={first['media:content']['@']['url']} />
      </div>);
    }
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
