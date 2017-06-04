import request from 'request'
import FeedParser from 'feedparser'

export const SELECT_POKEMON = 'SELECT_POKEMON'
export const REQUEST_ART = 'REQUEST_ART'
export const RECEIVE_ART = 'RECEIVE_ART'

export const selectPokemon = function(pokemon) {
  return {
    type: SELECT_POKEMON,
    pokemon
  }
}

export const requestArt = function() {
  return {
    type: REQUEST_ART
  }
}

export const receiveArt = function(data) {
  return {
    type: RECEIVE_ART,
    data
  }
}

export function fetchArt(species) {
  return function (dispatch) {
    dispatch(requestArt())
    
    const req = request('http://backend.deviantart.com/rss.xml?type=deviation&q=boost%3Apopular+in%3Afanart+'+species)
    const results = []
    
    const feedparser = new FeedParser();
    
    req.on('error', function (error) {
      // TODO: handle request errors
    });
    
    req.on('response', function (res) {
      const stream = this;

      if (res.statusCode !== 200) {
        stream.emit('error', new Error('Bad status code'))
      } else {
        stream.pipe(feedparser)
      }
    })
    
    feedparser.on('error', function (error) {
      // TODO: handle parse errors
    })
    
    feedparser.on('readable', function () {
      const stream = this;
      let item;

      while (item = stream.read()) {
        results.push(item)
      }
    })

    feedparser.on('end', function() {
      dispatch(receiveArt({species, results}))
    })
  }
}