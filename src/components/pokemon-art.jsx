import PropTypes from 'prop-types'
import React, { Component } from 'react'

class PokemonArt extends Component {
  static propTypes = {
    selectedPokemon: PropTypes.object,
    selectedPokemonArt: PropTypes.array,
    fetchArt: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.selectedPokemonnextProps.selectedPokemon.species !== this.props.selectedPokemon.species) {
      this.props.fetchArt(nextProps.selectedPokemon.species);
    }
  }

  render() {
    const {selectedPokemonArt} = this.props;
    if (selectedPokemonArt && selectedPokemonArt.length) {
      const first = selectedPokemonArt[0];
      return (<div>
        <img src={first['media:content']['@']['url']} />
      </div>);
    } else {
      return null;
    }
  }
}

export default PokemonArt