<template>
<div class="my-3" @click="handleMusic(SongItem)">
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
import { mapActions } from 'vuex'
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
  methods: {
    ...mapActions('MusicModule', ['AsyncSetMusicId']),
    handleMusic (obj) {
      this.AsyncSetMusicId(obj.id)
    }
  }
}
</script>

<style lang="sass" scoped></style>
