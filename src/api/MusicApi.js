import { getMusic } from '@/network/music.js'

export function getHotDetail () {
  return getMusic('/search/hot/detail')
}

export function getRecommendSongList () {
  return getMusic('/recommend/songs')
}

export function getSongDetailById (id) {
  return getMusic('/song/url', { id })
}

export function getSongDetailByName (keywords) {
  return getMusic('/cloudsearch', { keywords })
}

export function suggestSongList (keywords) {
  return getMusic('/search/suggest', { keywords })
}

export function getSuggertSongListById (ids) {
  return getMusic('/song/detail', { ids })
}
