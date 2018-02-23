import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchArt } from '../actions';
import { selectedPokemon, selectedPokemonArt } from '../selectors'

import PokemonArt from './pokemon-art.jsx'

const mapStateToProps = (state) => ({
  selectedPokemonArt: selectedPokemonArt(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchArt: (pokemon) => {
    dispatch(fetchArt(pokemon))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonArt)
