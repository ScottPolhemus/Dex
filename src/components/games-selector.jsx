import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

export default class GamesSelector extends Component {
  static propTypes = {
    onChangeGames: PropTypes.func.isRequired,
    games: PropTypes.object.isRequired
  }
  onSelectGame(event) {
    const {games, onChangeGames} = this.props
    const newGames = games
    newGames[event.target.value] = event.target.checked
    return onChangeGames(newGames)
  }
  toggleMulti(titles) {
    const {games, onChangeGames} = this.props
    const newGames = games
    let on = true
    for (let i = 0; i < titles.length; i++) {
      if (games[titles[i]] !== true) {
        on = false
        break
      }
    }
    for (let i = 0; i < titles.length; i++) {
      newGames[titles[i]] = !on
    }
    return onChangeGames(newGames)
  }
  render() {
    const {games} = this.props
    return (<div className="games-selector">
      <div className="games-system games-system-3ds">
        <div className="games-gen games-gen-sm">
          <button onClick={() => {::this.toggleMulti(['sun', 'moon'])}}>sm</button>
          <label className="games-selector-option">Sun <input type="checkbox" name="games" value="sun" checked={games.sun} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Moon <input type="checkbox" name="games" value="moon" checked={games.moon} onChange={::this.onSelectGame} /></label>
        </div>
        <div className="games-gen games-gen-xy">
          <button onClick={() => {::this.toggleMulti(['x', 'y'])}}>xy</button>
          <label className="games-selector-option">X <input type="checkbox" name="games" value="x" checked={games.x} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Y <input type="checkbox" name="games" value="y" checked={games.y} onChange={::this.onSelectGame} /></label>
        </div>
        <div className="games-gen games-gen-oras">
          <button onClick={() => {::this.toggleMulti(['omega-ruby', 'alpha-sapphire'])}}>oras</button>
          <label className="games-selector-option">Omega Ruby <input type="checkbox" name="games" value="omega-ruby" checked={games['omega-ruby']} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Alpha Sapphire <input type="checkbox" name="games" value="alpha-sapphire" checked={games['alpha-sapphire']} onChange={::this.onSelectGame} /></label>
        </div>
      </div>
      <div className="games-system games-system-ds">
        <div className="games-gen games-gen-bw">
          <button onClick={() => {::this.toggleMulti(['black', 'white', 'black-2', 'white-2'])}}>bw</button>
          <label className="games-selector-option">Black <input type="checkbox" name="games" value="black" checked={games.black} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">White <input type="checkbox" name="games" value="white" checked={games.white} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Black 2 <input type="checkbox" name="games" value="black-2" checked={games['black-2']} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">White 2 <input type="checkbox" name="games" value="white-2" checked={games['white-2']} onChange={::this.onSelectGame} /></label>
        </div>
        <div className="games-gen games-gen-dppt">
          <button onClick={() => {::this.toggleMulti(['diamond', 'pearl', 'platinum'])}}>dppt</button>
          <label className="games-selector-option">Diamond <input type="checkbox" name="games" value="diamond" checked={games.diamond} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Pearl <input type="checkbox" name="games" value="pearl" checked={games.pearl} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Platinum <input type="checkbox" name="games" value="platinum" checked={games.platinum} onChange={::this.onSelectGame} /></label>
        </div>
        <div className="games-gen games-gen-hgss">
          <button onClick={() => {::this.toggleMulti(['heart-gold', 'soul-silver'])}}>hgss</button>
          <label className="games-selector-option">Heart Gold <input type="checkbox" name="games" value="heart-gold" checked={games['heart-gold']} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Soul Silver <input type="checkbox" name="games" value="soul silver" checked={games['soul-silver']} onChange={::this.onSelectGame} /></label>
        </div>
      </div>
      <div className="games-system games-system-gba">
        <div className="games-gen games-gen-rse">
          <button onClick={() => {::this.toggleMulti(['ruby', 'sapphire', 'emerald'])}}>rse</button>
          <label className="games-selector-option">Ruby <input type="checkbox" name="games" value="ruby" checked={games.ruby} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Sapphire <input type="checkbox" name="games" value="sapphire" checked={games.sapphire} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Emerald <input type="checkbox" name="games" value="emerald" checked={games.emerald} onChange={::this.onSelectGame} /></label>
        </div>
        <div className="games-gen games-gen-frlg">
          <button onClick={() => {::this.toggleMulti(['fire-red', 'leaf-green'])}}>frlg</button>
          <label className="games-selector-option">Fire Red <input type="checkbox" name="games" value="fire-red" checked={games['fire-red']} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Leaf Green <input type="checkbox" name="games" value="leaf-green" checked={games['leaf-green']} onChange={::this.onSelectGame} /></label>
        </div>
      </div>
      <div className="games-system games-system-gb">
        <div className="games-gen games-gen-rby">
          <button onClick={() => {::this.toggleMulti(['red', 'blue', 'yellow'])}}>rby</button>
          <label className="games-selector-option">Red <input type="checkbox" name="games" value="red" checked={games.red} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Blue <input type="checkbox" name="games" value="blue" checked={games.blue} onChange={::this.onSelectGame} /></label>
          <label className="games-selector-option">Yellow <input type="checkbox" name="games" value="yellow" checked={games.yellow} onChange={::this.onSelectGame} /></label>
        </div>
      </div>
    </div>)
  }
}
