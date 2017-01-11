import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

export default class PokemonList extends Component {
  static propTypes = {
    onSelectPokemon: PropTypes.func.isRequired,
    selectedPokemon: PropTypes.object,
    pokemonList: PropTypes.object,
    layout: PropTypes.string
  }
  constructor(props) {
    super(props)
  }
  renderPokemonList() {
    const {pokemonList, selectedPokemon, onSelectPokemon} = this.props
    if (pokemonList.size) {
      return pokemonList.map((p, key) => {
        const className = (selectedPokemon && selectedPokemon.get('id') === p.get('id')) ? 'is-active' : ''
        const dexNum = ("00"+p.get('ndex')).slice(-3)

        return (<li key={key} className={className} onClick={() => {
          onSelectPokemon(p.get('id'))
        }}>
          <img className="image" src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${dexNum}.png`} />
          <span className="number">{p.get('ndex')}</span>
          <span className="name"> {p.get('species')}</span>
        </li>)
      }).toArray()
    }
  }
  render() {
    return (<div className="pokemon-list">
      <input type="search" />
      <ul>
        {this.renderPokemonList()}
      </ul>
    </div>)
  }
}
