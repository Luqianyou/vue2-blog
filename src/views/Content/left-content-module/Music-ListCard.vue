<template>
<div>
<musicList :musicList="musicList"></musicList>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import musicList from '@/components/MusicComponent/musicList.vue'
export default {
  name: 'MusicListCard',
  data () {
    return {
      musicList: []
    }
  },
  async mounted () {
    const res = await this.getRecommendSong()
    console.log('🚀 ~ file: Music-ListCard.vue ~ line 19 ~ mounted ~ res', res)
    this.musicList = res
  },
  methods: {
    ...mapActions('MusicModule', ['getRecommendSong'])
  },
  components: { musicList }
}
</script>

<style lang="sass" scoped></style>
