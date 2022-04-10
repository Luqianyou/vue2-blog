<template>
<div class="w-full  h-12">
  <button @click="playMusic">11</button>
  <audio
  :src="musicUrl"
  ref="audioPlayer"
  autoplay
>
  </audio>

  <div></div>
  <div></div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {

  name: 'MusicAudio',
  data () {
    return {
      musicUrl: ''
    }
  },
  methods: {
    ...mapActions('MusicModule', ['getSongDetail']),
    async playMusic () {
      const res = await this.getSongDetail()
      console.log('🚀 ~ file: Music-Audio.vue ~ line 21 ~ playMusic ~ res', res)
    }
  }
}
</script>

<style lang="sass" scoped></style>
