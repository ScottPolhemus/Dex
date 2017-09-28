import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { selectPokemon } from '../actions'
import { pokedexList, selectedPokemon } from '../selectors'
import PokemonList from './pokemon-list.jsx'

const mapStateToProps = (state) => ({
  pokedexList: pokedexList(state),
  selectedPokemon: selectedPokemon(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSelectPokemon: (selectedPokemon) => {
    dispatch(selectPokemon(selectedPokemon))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
