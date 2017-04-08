import React from 'react'
import { render } from 'react-dom'
import { Provider, connect, nuclearMixin } from 'nuclear-js-react-addons'

import reactor from './reactor'
import PokemonStore from './modules/pokemon/store'
import ArtStore from './modules/art/store'
import DexApp from './components/app.jsx';

reactor.registerStores({
  'pokemon': PokemonStore,
  'art': ArtStore
})

window.onload = function() {
  render(<Provider reactor={reactor}>
    <DexApp />
  </Provider>, document.querySelector('[data-dex-app]'))
}
