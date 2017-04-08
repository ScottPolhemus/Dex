import request from 'request'
import FeedParser from 'feedparser'
import reactor from '../../reactor'
import actionTypes from './action-types'
import pokemonGetters from '../pokemon/getters'

const { FETCH_ART, RECEIVE_ART } = actionTypes
const { selectedPokemon } = pokemonGetters

let feedparser = new FeedParser();

export default {
  fetchArt() {
    reactor.dispatch(FETCH_ART)
    let selected = reactor.evaluate(selectedPokemon)
    let species = selected.get('species')
    let req = request('http://backend.deviantart.com/rss.xml?type=deviation&q=boost%3Apopular+in%3Afanart+'+species)
    let results = []
    req.on('error', function (error) {
      // handle any request errors
    });
    req.on('response', function (res) {
      let stream = this; // `this` is `req`, which is a stream

      if (res.statusCode !== 200) {
        this.emit('error', new Error('Bad status code'));
      } else {
        stream.pipe(feedparser);
      }
    });
    feedparser.on('error', function (error) {
      // always handle errors
    });
    feedparser.on('readable', function () {
      // This is where the action is!
      var stream = this; // `this` is `feedparser`, which is a stream
      var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
      var item;

      while (item = stream.read()) {
        results.push(item);
      }
    });

    feedparser.on('end', function() {
      reactor.dispatch(RECEIVE_ART, {species, results})
    })
  }
}
