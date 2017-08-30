import config from './config'

//const { apikey } = config.apiKey
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=66b51719c274b2fffa05b5d6d7d152dc&format=json`

export  default function getArtists(country) {
    const url = URL.replace(':country', country)
    return fetch(url)
        .then(res => res.json())
        .then(json => json.topartists.artist)
}