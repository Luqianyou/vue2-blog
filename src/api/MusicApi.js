import { getMusic } from '@/network/music.js'

export function searchDefault () {
  return getMusic('/search/default')
}

export function getHotDetail () {
  return getMusic('/search/hot/detail')
}

export function getRecommendSongList () {
  return getMusic('/recommend/songs')
}

export function getSongDetailById (ids) {
  return getMusic('/song/detail', { ids })
}
