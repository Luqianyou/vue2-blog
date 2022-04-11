<template>
<div>
<musicList :musicListProps="musicListCurrent"></musicList>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import musicList from '@/components/MusicComponent/musicList.vue'
export default {
  name: 'MusicListCard',
  data () {
    return {
      musicListCurrent: []
    }
  },
  async created () {
    const res = await this.getRecommendSong()
    this.musicListCurrent = res
    this.setMusicList(this.musicListCurrent)
  },
  methods: {
    ...mapMutations('MusicModule', ['setMusicList']),
    ...mapActions('MusicModule', ['getRecommendSong'])
  },
  components: { musicList }
}
</script>

<style lang="sass" scoped></style>
