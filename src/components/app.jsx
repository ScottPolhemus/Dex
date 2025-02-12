import PropTypes from 'prop-types'
import React, { Component } from 'react'

import PokemonListContainer from './pokemon-list-container.jsx'
import PokemonDetailContainer from './pokemon-detail-container.jsx'
import PokedexLayoutToggle from './pokedex-layout-toggle.jsx'
import GamesSelector from './games-selector.jsx'
import RegionsSelector from './regions-selector.jsx'

class DexApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      layout: 'list',
      regions: {
        'kanto': true
      },
      games: {
        // 'red': false,
        // 'blue': false,
        // 'yellow': false,
        // 'ruby': false,
        // 'sapphire': false,
        // 'emerald': false,
        // 'fire-red': false,
        // 'leaf-green': false,
        // 'diamond': false,
        // 'pearl': false,
        // 'platinum': false,
        // 'heart-gold': false,
        // 'soul-silver': false,
        // 'black': false,
        // 'white': false,
        // 'black-2': false,
        // 'white-2': false,
        // 'x': false,
        // 'y': false,
        // 'omega-ruby': false,
        // 'alpha-sapphire': false,
        'sun': false,
        'moon': false
      }
    }
  }
  updateLayout(layout) {
    this.setState({layout})
  }
  updateGames(games) {
    this.setState({games})
  }
  updateRegion(region) {
    this.setState({region})
  }
  renderHeader() {
    const {layout} = this.state
    return (
      <div className="dex-header">
        <PokedexLayoutToggle onChangeLayout={::this.updateLayout} layout={layout} />
      </div>
    );
  }
  renderList() {
    const {layout, regions, games} = this.state
    return (
      <div className="dex-list">
        <PokemonListContainer layout={layout} regions={regions} games={games} />
      </div>
    )
  }
  renderDetail() {
    const {layout, regions, games} = this.state
    return (
      <div className="dex-detail">
        <PokemonDetailContainer layout={layout} regions={regions} games={games} />
      </div>
    );
  }
  render() {
    const className = `dex-app dex-layout-${this.state.layout}`

    return (<div className={className}>
      {this.renderList()}
      {this.renderDetail()}
    </div>)
  }
}

export default DexApp
