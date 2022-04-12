<template>
<div>
<musicList :musicListProps="musicListCurrent"></musicList>
</div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import musicList from '@/components/MusicComponent/musicList.vue'
export default {
  name: 'MusicListCard',
  data () {
    return {
      musicListCurrent: []
    }
  },
  computed: {
    ...mapState('MusicModule', ['musicViewList'])
  },
  watch: {
    'musicViewList' (value) {
      this.musicListCurrent = value
    }
  },
  async created () {
    const res = await this.getRecommendSong()
    this.musicListCurrent = res
    this.setMusicList(res)
    this.setMusicId(res[0].id)
  },
  methods: {
    ...mapMutations('MusicModule', ['setMusicList', 'clearMusicViewList', 'setMusicId']),
    ...mapActions('MusicModule', ['getRecommendSong'])
  },
  components: { musicList }
}
</script>

<style lang="sass" scoped></style>
