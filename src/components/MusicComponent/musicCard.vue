<template>
<div class="my-3" @dblclick="handleMusic(SongItem)">
  <el-row>
    <el-col :span="5">
    <el-image style="width:50px;height: 50px;" :src="SongItem.al.picUrl"></el-image>
    </el-col>
    <el-col :span="19">
    <div style="width:150px;font-size: 8px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"><span>{{SongItem.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{SongItem.alia[0]}}{{SongItem.alia[1]}}</span></div>
    <div style="width:150px;font-size: 8px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"><span>{{SongItem.ar[0].name}}&nbsp;&nbsp;&nbsp;&nbsp;{{SongItem.al.name}}</span></div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  name: 'MusicListCard',
  props: {
    SongItem: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('MusicModule', ['musicList', 'musicId'])
  },
  methods: {
    ...mapActions('MusicModule', ['AsyncSetMusicId']),
    ...mapMutations('MusicModule', ['setMusicList', 'deleteMusicListItem']),
    handleMusic (obj) {
      this.AsyncSetMusicId(obj.id)
      const musicListItem = this.musicList.find(item => item.id === obj.id)
      if (musicListItem) {
        this.deleteMusicListItem(obj.id)
      }
      this.setMusicList(obj)
    }
  }
}
</script>

<style lang="sass" scoped></style>
