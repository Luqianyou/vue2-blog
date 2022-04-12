<template>
<div>
  <div class="searchDIV">
    <el-popover
    trigger="focus"
    :title="searchText === '' ? '搜索建议' : '搜索结果'"
    placement="bottom"
    :visible-arrow="false"
    popper-class="selectdown"
    width="250"
    v-model="visible"
    >
    <el-input
    placeholder="请输入歌曲/歌手/专辑"
    size="mini"
    prefix-icon="el-icon-search"
    slot="reference"
    :clearable="true"
    class="w-50 mt-2"
    v-model="searchText"
    @focus="handleFocus"
    @input="handleSearch"
    >
    </el-input>

  <div v-if='searchText === ""'>
  <div  :class="index <3 ? 'flex gap-5 text-red-500' : 'flex gap-5'" v-for="(item,index) of hotSearchList" :key="index" @click="clickHotSearchItem(item)">
  <div>{{index+1}}</div>
  <div class="music-name">{{item.searchWord}}</div>
  </div>
  </div>

  <div v-else>
    <div>搜索建议</div>
    <div>
     <div
     v-for="(item, index) in searchObject.songs"
     :key="index"
     @click="clickSuggestItem(item)"
   >
     {{ item.name + " - " + item.artists[0].name }}
   </div>
    </div>
  </div>
    </el-popover>
  </div>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'MusicHeader',
  data () {
    return {
      searchText: '',
      visible: false,
      hotSearchList: [],
      searchObject: {}
    }
  },
  methods: {
    handleFocus () {
      this.visible = true
    },
    async handleSearch () {
      const res = await this.AsyncSuggestSongList(this.searchText)
      this.searchObject = res
    },
    async clickHotSearchItem (value) {
      this.clearMusicViewList()
      const res = await this.AsyncGetSongDetailByName(
        value.searchWord.toString()
      )
      this.setMusicViewList(res)
      this.visible = false
    },
    async clickSuggestItem (item) {
      const res = await this.AsyncGetSuggertSongListById(item.id)
      this.setMusicList(res)
      this.setMusicId(item.id)
    },
    ...mapActions('MusicModule', ['getSearchHotMusicList', 'AsyncGetSongDetailByName', 'AsyncSuggestSongList', 'AsyncGetSuggertSongListById']),
    ...mapMutations('MusicModule', ['clearMusicViewList', 'setMusicViewList', 'setMusicId', 'setMusicList'])
  },
  async created () {
    const res = await this.getSearchHotMusicList()
    this.hotSearchList = res
  }
}
</script>
<style lang="sass">
.searchDIV
  @apply sticky flex top-0 justify-center w-full h-12
</style>
