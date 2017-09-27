import PropTypes from 'prop-types';
import React, { Component } from 'react'
import _ from 'lodash'

export default class PokemonList extends Component {
  static propTypes = {
    onSelectPokemon: PropTypes.func.isRequired,
    selectedPokemon: PropTypes.object,
    pokedexList: PropTypes.array,
    layout: PropTypes.string
  }
  constructor(props) {
    super(props)
  }
  renderPokemonList() {
    const {pokedexList, selectedPokemon, onSelectPokemon} = this.props
    if (pokedexList.length) {
      return pokedexList.map((p, key) => {
        const className = (selectedPokemon && selectedPokemon['id'] === p['id']) ? 'is-active' : ''
        const dexNum = ("00"+p['ndex']).slice(-3)

        return (<li key={key} className={className} onClick={() => {
          onSelectPokemon(p['id'])
        }}>
          {/*<img className="image" src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${dexNum}.png`} />*/}
          <span className="number">{p['ndex']}</span>
          <span className="name"> {p['species']}</span>
        </li>)
      })
    }
  }
  render() {
    return (<div className="pokemon-list">
      <ul>
        {this.renderPokemonList()}
      </ul>
    </div>)
  }
}
