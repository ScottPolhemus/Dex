import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

export default class PokedexLayoutToggle extends Component {
  static propTypes = {
    onChangeLayout: PropTypes.func.isRequired,
    layout: PropTypes.string.isRequired
  }
  setLayout(event) {
    const {onChangeLayout} = this.props
    onChangeLayout(event.target.value)
  }
  render() {
    const {layout, onChangeLayout} = this.props
    return (<div className="pokedex-layout-toggle">
      <label className={`pokedex-layout-list ${(layout === 'list' ? 'is-active' : '')}`}>List <input type="radio" name="layout" value="list" onChange={::this.setLayout} checked={(layout === 'list')} /></label>
      <label className={`pokedex-layout-grid ${(layout === 'grid' ? 'is-active' : '')}`}>Grid <input type="radio" name="layout" value="grid" onChange={::this.setLayout} checked={(layout === 'grid')} /></label>
    </div>)
  }
}
