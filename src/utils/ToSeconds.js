export function returnSecond (time) {
  time = time.split(':')
  const m = parseInt(time[0])
  const s = parseInt(time[1])
  return m * 60 + s
}

export function handleMusicTime (time) {
  // 如果超过了100000 基本都是毫秒为单位的了 先转成秒的
  time = parseInt(time)
  if (time > 10000) {
    time = Math.floor(time / 1000)
  } else {
    time = Math.floor(time)
  }
  let m = Math.floor(time / 60)
  let s = Math.floor(time % 60)
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s
  return m + ':' + s
}
