import { getHotDetail } from '@/api/MusicApi.js'
import { Message } from 'element-ui'

export default {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    async getSearchHotMusicList ({ commit, state }) {
      const { status, data } = await getHotDetail()
      console.log('🚀 ~ file: MusicModule.js ~ line 19 ~ getSearchHotMusicList ~ status', status, data.code)
      if (status === 200 && data.code === 200) {
        if (!data.data) {
          Message.error('暂时没有数据')
          return
        }
        return data.data
      }
    }
  }
}
