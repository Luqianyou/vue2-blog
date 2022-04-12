<template>
<div>
<el-row>
  <el-col :span="12">
    <el-image style="width: 80px; height: 80px"
    :src="require('@/assets/recommendMusic.png')" alt="">
    </el-image>
  </el-col>
  <el-col :span="12">
      <dl class="mt-3">
        <dt>每日歌曲推荐</dt>
        <dd>根据你的音乐口味生成，每天6:00更新</dd>
      </dl>
  </el-col>
</el-row>
  <div class="flex justify-center">
    <el-button @click="handelPlayAllMusic(musicListProps)">播放全部音乐</el-button>
  </div>
    <div v-for="item in musicListProps" :key="item.id">
    <music-card :SongItem="item">
    </music-card>
    </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import MusicCard from '@/components/MusicComponent/musicCard.vue'
export default {
  props: {
    musicListProps: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  created () {
  },
  computed: {
    ...mapState('MusicModule', ['musicList', 'musicId'])
  },
  methods: {
    ...mapMutations('MusicModule', ['setMusicList', 'setMusicId', 'clearMusicList']),
    handelPlayAllMusic (list) {
      this.clearMusicList()
      this.setMusicList(list)
      this.setMusicId(this.musicList[0].id)
    }
  },
  components: {
    'music-card': MusicCard
  }
}

</script>

<style></style>
