import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { selectPokemon } from '../actions'
import { pokemonList, selectedPokemon } from '../selectors'
import PokemonList from './pokemon-list.jsx'

const mapStateToProps = (state) => ({
  pokemonList: pokemonList(state),
  selectedPokemon: selectedPokemon(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSelectPokemon: (selectedPokemon) => {
    dispatch(selectPokemon(selectedPokemon))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
