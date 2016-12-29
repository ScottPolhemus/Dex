import React, { Component, PropTypes } from 'react'

import PokemonListContainer from './pokemon-list-container.jsx'
import PokemonDetailContainer from './pokemon-detail-container.jsx'

class DexApp extends Component {
  render() {
    return (<div className="dex-app">
      <div className="sidebar">
        <PokemonListContainer />
      </div>
      <div className="main">
        <PokemonDetailContainer />
      </div>
    </div>)
  }
}

export default DexApp
