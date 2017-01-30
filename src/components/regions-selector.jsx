import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

export default class RegionsSelector extends Component {
  static propTypes = {
    onChangeRegions: PropTypes.func.isRequired,
    regions: PropTypes.object.isRequired
  }
  onSelectRegion(event) {
    //
  }
  render() {
    const {games} = this.props
    return (<form className="region-selector">
      <div>
        <ol>
          <li><label>Kanto <input type="checkbox" name="regions" value="kanto" checked disabled /></label></li>
          <li><label>Johto <input type="checkbox" name="regions" value="johto" disabled /></label></li>
          <li><label>Hoenn <input type="checkbox" name="regions" value="hoenn" disabled /></label></li>
          <li><label>Sinnoh <input type="checkbox" name="regions" value="sinnoh" disabled /></label></li>
          <li><label>Unova <input type="checkbox" name="regions" value="unova" disabled /></label></li>
          <li><label>Kalos <input type="checkbox" name="regions" value="kalos" disabled /></label></li>
          <li><label>Alola <input type="checkbox" name="regions" value="alola" disabled /></label></li>
        </ol>
      </div>
    </form>)
  }
}
