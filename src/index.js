import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import DexApp from './components/app.jsx'
import pokemonList from '../data/sm-pokemon.csv'

import configureStore from './store'

const initialState = {
  pokemon: {
    selected: 0,
    list: pokemonList
  }
}

const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <DexApp />
  </Provider>,
  document.querySelector('[data-dex-app]')
);