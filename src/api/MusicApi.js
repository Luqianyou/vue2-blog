import { getMusic } from '@/network/music.js'

export function getHotDetail () {
  return getMusic('/search/hot/detail')
}

export function getRecommendSong () {
  return getMusic('/recommend/songs')
}
