import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { selectPokemon, fetchArt } from '../actions';
import { artResults, pokemonList, selectedPokemon, selectedPokemonFamily } from '../selectors'

import PokemonDetail from './pokemon-detail.jsx'

const mapStateToProps = (state) => ({
  artResults: artResults(state),
  pokemonList: pokemonList(state),
  selectedPokemon: selectedPokemon(state),
  selectedPokemonFamily: selectedPokemonFamily(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSelectPokemon: (selectedPokemon) => {
    dispatch(selectPokemon(selectedPokemon))
  },
  fetchArt: (pokemon) => {
    dispatch(fetchArt(pokemon))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
