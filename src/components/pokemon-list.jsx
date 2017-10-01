import PropTypes from 'prop-types';
import React, { Component } from 'react'
import Fuse from 'fuse.js'
import _ from 'lodash'

export default class PokemonList extends Component {
  static propTypes = {
    onSelectPokemon: PropTypes.func.isRequired,
    selectedPokemon: PropTypes.object,
    pokedexList: PropTypes.array,
    layout: PropTypes.string
  }
  constructor() {
    super()
    
    this.state = {
      search: ``
    }
  }
  renderSearchInput() {
    return (<input type="search" placeholder="Search" value={this.state.search} onChange={(event) => {
      this.setState({
        search: event.target.value
      })
    }} />)
  }
  renderPokemonList() {
    const {pokedexList, selectedPokemon, onSelectPokemon} = this.props
    if (pokedexList.length) {
      let filteredList = pokedexList;
      
      if (this.state.search) {
        const fuse = new Fuse(pokedexList, {
          keys: ['species']
        })
        
        filteredList = fuse.search(this.state.search)
      }
      
      return filteredList.map((p, key) => {
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
        {this.renderSearchInput()}
        {this.renderPokemonList()}
      </ul>
    </div>)
  }
}
