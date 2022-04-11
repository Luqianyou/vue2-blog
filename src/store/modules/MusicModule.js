import { getHotDetail, getRecommendSongList, getSongDetailById } from '@/api/MusicApi.js'
import { Message } from 'element-ui'
import { concat } from 'lodash-es'

export default {
  namespaced: true,
  state: {
    musicId: '',
    musicListId: '',
    isPlay: false,
    currentTime: 0,
    processLine: 0,
    voice: 30,
    isMuted: false,
    musicList: [],
    MusicIndex: 0
  },
  mutations: {
    setMusicId (state, id) {
      state.musicId = id
    },
    setMusicListId (state, id) {
      state.musicListId = id
    },
    changePlayState (state, parse) {
      state.isPlay = parse
    },
    setMusicList (state, items) {
      state.musicList = concat(state.musicList, items)
    },
    deleteMusicListItem (state, id) {
      state.musicList = state.musicList.filter(item => item.id !== id)
    },
    clearMusicList (state) {
      state.musicList = []
    }
  },
  actions: {
    async getSearchHotMusicList ({ commit, state }) {
      const { status, data } = await getHotDetail()
      if (status === 200 && data.code === 200) {
        if (!data.data) {
          Message.error('暂时没有数据')
          return
        }
        return data.data
      }
    },

    AsyncSetMusicId ({ commit }, id) {
      console.log('🚀 ~ file: MusicModule.js ~ line 41 ~ AsyncSetMusicId ~ id', id)
      commit('setMusicId', id)
    },

    async getRecommendSong ({ commit, state }) {
      const { status, data } = await getRecommendSongList()
      if (status === 200 && data.code === 200) {
        if (!data.data) {
          Message.error('暂时没有数据')
          return
        }
        return data.data.dailySongs
      }
    },

    async getSongDetail ({ commit, state }) {
      const { status, data } = await getSongDetailById(state.musicId)
      if (status === 200 && data.code === 200) {
        if (!data) {
          Message.error('暂时没有数据')
          return
        }
        return data.data
      }
    }
  }
}
