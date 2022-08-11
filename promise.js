// test
let p1 = Promise.resolve(3);
let p2 = 4;
let p3 = new Promise(resolve => {
  setTimeout(resolve, 100, 'lee')
  // setTimeout的第三个往后参数都是用来作为第一个参数也就是函数的参数,也就是其实是setTimeout(resolve('lee'), 100)
});


Promise.myAll = function(arr) {
  if (!Array.isArray(arr)) {
    return Promise.reject(new TypeError('Promise.all accepts an array'));
  }

  let total = 0;
  const results = [];
  return new Promise((resolve, reject) => {
    for (const iterator of arr) {
      Promise.resolve(iterator).then(value => {
          results[total] = value;
          total++;
          if (total === arr.length) {
            resolve(results);
          }
        }
      ).catch(err => {
        return reject(err);
      });
    }
  })
}

Promise.myAll([p1, p2, p3]).then(data => {
  console.log(data);
})


Promise.myrace = function(arr) {
  return new Promise((resolve, reject) => {
    for (const iterator of arr) {
      Promise.resolve(iterator).then(value => {
        return resolve(value)
      }).catch(err => {
        return reject(err)
      })
    }
  })
}
let p5 = new Promise(resolve => {
  setTimeout(resolve, 105, 'p5 done')
})
let p6 = new Promise(resolve => {
  setTimeout(resolve, 100, 'p6 done')
})
Promise.myrace([p5, p6]).then(data => {
  console.log(data); // p2 done
})
