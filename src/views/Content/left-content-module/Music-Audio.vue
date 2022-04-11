<template>
<div class="w-full mx-2 h-12">
<audio
  :src="musicUrl"
  ref="audioPlayer"
  autoplay
  @play="changeState(true)"
  @pause="changeState(false)"
  @ended="changeMusic('next')"
  @timeupdate="updateTime"
>
</audio>

<el-row>
  <el-col :span="6" class="flex gap-2 mt-5">
    <el-image style="width: 2rem;height: 2rem;" :src="musicDetail.al ? musicDetail.al.picUrl : ''"></el-image>
    <div style="font-size: 8px;">
      <div style="width:30px;font-size: 8px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">{{musicDetail.al ? musicDetail.name : ''}}</div>
      <div style="width:30px;font-size: 8px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">{{musicDetail.al ? musicDetail.ar[0].name : ''}}</div>
    </div>
  </el-col>
  <el-col :span="18">
    <div class="flex">
      <el-slider @change="changeProgress" v-model="timeProgress" class="w-36 ml-2 mt-2 box-border" :show-tooltip="false"></el-slider><div class="mt-5" style="font-size: 10px;">{{currentTime | handleMusicTime}}/{{duration}}</div>
    </div>
    <div class="flex gap-3 justify-center items-center -mt-2">
        <div @click="changeMusic('prev')"><g-icon :className="'icon-shangyishou_huaban'"></g-icon></div>
        <div @click="isPlay ? changeState(false) : changeState(true)"><g-icon :className="isPlay ? 'icon-zanting' : 'icon-bofang'"></g-icon></div>
        <div @click="changeMusic('next')"><g-icon :className="'icon-xiayishou_huaban'"></g-icon></div>
        <div><g-icon :className="isMuted ? 'icon-24gl-volumeDisable' : 'icon-24gl-volumeHigh'"></g-icon></div>
        <el-slider v-model="volume" class="w-16" :show-tooltip="false" @input="changeVolume"></el-slider>
    </div>
  </el-col>
  </el-row>
</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import gIcon from '@/components/icon.vue'
import { returnSecond, handleMusicTime } from '@/utils/ToSeconds'
export default {
  name: 'MusicAudio',
  data () {
    return {
      musicUrl: '',
      musicIndex: 0,
      allTime: 0,
      endTime: 0,
      duration: '00:00',
      currentTime: 0,
      timeProgress: 0,
      musicDetail: {},
      volume: 30,
      isMuted: false
    }
  },
  filters: {
    handleMusicTime
  },
  computed: {
    ...mapState('MusicModule', ['isPlay', 'musicId', 'musicList'])
  },
  methods: {
    ...mapActions('MusicModule', ['getSongDetail']),
    ...mapMutations('MusicModule', ['changePlayState', 'setMusicId']),
    async playMusic () {
      const res = await this.getSongDetail()
      this.musicUrl = res[0].url
      this.$refs.audioPlayer.play()
    },
    pauseMusic () {
      this.$refs.audioPlayer.pause()
    },
    changeState (state) {
      this.changePlayState(state)
    },
    changeMusic (value) {
      this.changeState(false)
      if (value === 'next' && this.musicIndex < this.musicList.length - 1) {
        this.musicIndex++
      } else if (value === 'next' && this.musicIndex === this.musicList.length - 1) {
        this.musicIndex = 0
      } else if (value === 'prev' && this.musicIndex > 0) {
        this.musicIndex--
      } else if (value === 'prev' && this.musicIndex === 0) {
        this.musicIndex = this.musicList.length - 1
      }
    },
    updateTime () {
      let time = this.$refs.audioPlayer.currentTime
      time = Math.floor(time)
      if (this.endTime !== time) {
        this.endTime = this.currentTime = time
        this.timeProgress = Math.floor((time / this.allTime) * 100)
      }
    },
    changeVolume () {
      this.$refs.audioPlayer.volume = this.volume / 100
    },
    changeProgress (e) {
      this.currentTime = Math.floor((e / 100) * this.allTime)
      this.$refs.audioPlayer.currentTime = this.currentTime
    }
  },
  watch: {
    'musicList' (arr) {
      if (arr.length > 0) {
        this.setMusicId(this.musicList[0].id)
        this.$refs.audioPlayer.play()
      }
    },
    'volume' (value) {
      value > 0 ? this.isMuted = false : this.isMuted = true
    },
    'isPlay' (val) {
      if (val) {
        this.playMusic()
      } else {
        this.pauseMusic()
      }
    },
    'musicId' (id) {
      if (id) {
        console.log('🚀 ~ file: Music-Audio.vue ~ line 120 ~ id', id)
        this.musicDetail = this.musicList.find(item => item.id === this.musicId)
        this.musicIndex = this.musicList.findIndex(item => item.id === this.musicId)
        this.duration = handleMusicTime(this.musicDetail.dt)
        this.allTime = returnSecond(this.duration)
        this.$nextTick(() => {
          this.playMusic()
        })
      }
    },
    'musicIndex' (value) {
      this.setMusicId(this.musicList[value].id)
    }
  },
  components: { gIcon }
}
</script>

<style lang="sass" scoped></style>
