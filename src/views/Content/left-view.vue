<template>
<div>
  <div>
    <MusicHeader></MusicHeader>
  </div>
  <div class="mx-2 h-96 overflow-y-scroll">
    <MusicListCard></MusicListCard>
  </div>
  <div>
    <MusicAudio></MusicAudio>
  </div>

</div>
</template>

<script>
import MusicListCard from './left-content-module/Music-ListCard.vue'
import MusicAudio from './left-content-module/Music-Audio.vue'
import MusicHeader from './left-content-module/Music-Header.vue'
export default {
  name: 'leftView',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
  },
  components: { MusicListCard, MusicAudio, MusicHeader }
}

</script>

<style></style>
