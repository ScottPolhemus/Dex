import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { selectPokemon, fetchArt } from '../actions';
import { selectedPokemon, selectedPokemonFamily, selectedPokemonArt } from '../selectors'

import PokemonDetail from './pokemon-detail.jsx'

const mapStateToProps = (state) => ({
  selectedPokemon: selectedPokemon(state),
  selectedPokemonFamily: selectedPokemonFamily(state),
  selectedPokemonArt: selectedPokemonArt(state)
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
