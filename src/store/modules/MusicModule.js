import { getHotDetail, getRecommendSongList, getSongDetailById, getSongDetailByName, suggestSongList, getSuggertSongListById } from '@/api/MusicApi.js'
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
    musicViewList: [],
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
    setMusicViewList (state, items) {
      state.musicViewList = concat(state.musicViewList, items)
    },
    deleteMusicListItem (state, id) {
      state.musicList = state.musicList.filter(item => item.id !== id)
    },
    clearMusicList (state) {
      state.musicList = []
    },
    clearMusicViewList (state) {
      state.musicViewList = []
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
    },

    async AsyncGetSongDetailByName ({ commit, state }, value) {
      const { status, data } = await getSongDetailByName(value)
      if (status === 200 && data.code === 200) {
        if (!data) {
          Message.error('暂时没有数据')
          return
        }
        return data.result.songs
      }
    },

    async AsyncSuggestSongList ({ commit, state }, value) {
      const { status, data } = await suggestSongList(value)
      if (status === 200 && data.code === 200) {
        if (!data) {
          Message.error('暂时没有数据')
          return
        }
        return data.result
      }
    },

    async AsyncGetSuggertSongListById ({ commit, state }, id) {
      const { status, data } = await getSuggertSongListById(id)
      if (status === 200 && data.code === 200) {
        if (!data) {
          Message.error('暂时没有数据')
          return
        }
        return data.songs
      }
    }
  }
}
