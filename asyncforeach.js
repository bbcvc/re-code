Array.prototype.forEachAsync = async function (callback) {
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    ;(function (value, idx) {
      const fn = callback
      if (Object.prototype.toString.call(fn) === '[object AsyncFunction]') {
        fn(value, idx).catch((err) => {
          console.error(err)
        })
      } else {
        fn(value, idx)
      }
    })()
  }
}
const sleep = (delay) => {
  return new Promise((res) => {
    setTimeout(() => {
      res()
    }, delay)
  })
}

[1, 2, 3, 4, 5].forEachAsync(async (item) => {
  if (item === 3) {
    await sleep(2)
    console.log(item)
  } else {
    console.log(item)
  }
})