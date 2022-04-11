<template>
<div>
<div class="Header">
  <Header></Header>
</div>
<div class="content">
  <div v-if="1 === 1" class="content-left">
    <LeftView></LeftView>
  </div>
  <div class="content-center">
    <CenterView></CenterView>
  </div>
  <div class="content-right">
    <RightView></RightView>
  </div>
</div>
</div>
</template>

<script>
import Header from './Content/Header.vue'
import LeftView from './Content/left-view.vue'
import CenterView from './Content/center-view.vue'
import RightView from './Content/right-view.vue'
import NProgress from 'nprogress'
export default {
  name: 'Layout',
  data () {
    return {}
  },
  mounted () {
    NProgress.start()
    setTimeout(() => {
      NProgress.done()
    }, 5000)
  },
  methods: {
  },
  components: { Header, LeftView, CenterView, RightView }
}
</script>

<style lang="sass" scoped>
.Header
  @apply h-14
.content
  @apply flex mt-6 mx-8 gap-5
  &-left
    @apply border-2 shadow -ml-8
    flex:0 0 320px
  &-center
    @apply border-2 shadow
    flex:1 1
  &-right
    @apply border-2 shadow
    flex:0 0 400px
</style>
