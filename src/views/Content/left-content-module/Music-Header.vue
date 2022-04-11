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
    @keyup.enter="handleSearch"
    >
    </el-input>

  <div v-if='searchText === ""'>
  <div  :class="index <3 ? 'flex gap-5 text-red-500' : 'flex gap-5'" v-for="(item,index) of hotSearchList" :key="index">
  <div>{{index+1}}</div>
  <div class="music-name">{{item.searchWord}}</div>
  </div>
  </div>
    </el-popover>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MusicHeader',
  data () {
    return {
      searchText: '',
      visible: false,
      hotSearchList: []
    }
  },
  methods: {
    handleFocus () {
      this.visible = true
    },
    handleSearch () {},
    ...mapActions('MusicModule', ['getSearchHotMusicList'])
  },
  async created () {
    const res = await this.getSearchHotMusicList()
    console.log('🚀 ~ file: left-view.vue ~ line 58 ~ created ~ res', res)
    this.hotSearchList = res
  }
}
</script>
<style lang="sass">
.searchDIV
  @apply sticky flex top-0 justify-center w-full h-12
</style>
