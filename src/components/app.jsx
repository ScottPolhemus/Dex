import React, { Component, PropTypes } from 'react'

import PokemonListContainer from './pokemon-list-container.jsx'
import PokemonDetailContainer from './pokemon-detail-container.jsx'
import PokedexLayoutToggle from './pokedex-layout-toggle.jsx'

class DexApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      layout: 'list'
    }
  }
  changeLayout(layout) {
    this.setState({layout})
  }
  render() {
    const {layout} = this.state

    const className = `dex-app dex-layout-${layout}`

    return (<div className={className}>
      <div className="dex-header">
        <PokedexLayoutToggle onChangeLayout={::this.changeLayout} layout={layout} />
      </div>
      <div className="dex-list">
        <PokemonListContainer layout={layout} />
      </div>
      <div className="dex-detail">
        <PokemonDetailContainer layout={layout} />
      </div>
    </div>)
  }
}

export default DexApp
