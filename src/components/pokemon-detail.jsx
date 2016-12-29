import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

function renderEvoTree(pokemon) {
  if (pokemon.get('evolutions')) {
    return (<ul key={pokemon.get('species')}>
      <li>{pokemon.get('species')}
      {pokemon.get('evolutions').map((p) => {
        return renderEvoTree(p)
      })}
      </li>
    </ul>)
  }

  return (<ul key={pokemon.get('species')}><li>{pokemon.get('species')}</li></ul>)
}

export default class PokemonDetail extends Component {
  static propTypes = {
    pokemon: PropTypes.object,
    family: PropTypes.object,
    onSelectPokemon: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
  }
  renderFamily() {
    if (this.props.family.get('evolutions')) {
      return (<div className="pokemon-family">{renderEvoTree(this.props.family)}</div>)
    }
  }
  render() {
    const {
      ndex,
      species,
      class: pClass,
      height,
      weight
    } = this.props.pokemon.toJS()

    if (ndex) {
      return (<div className="pokemon-detail">
        <h1>{species}</h1>
        <h2>{pClass} - {height}, {weight}</h2>
        {this.renderFamily()}
      </div>)
    }

    return (<div className="pokemon-detail">
      <p>Select a Pokémon to get started.</p>
    </div>)
  }
}
