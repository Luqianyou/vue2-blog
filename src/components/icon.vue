<template>
<div>
  <div class="iconfont" :class="className"></div>
</div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
