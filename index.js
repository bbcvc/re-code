var obj = {
  name: '大雄',
  age: 34,
  info: {
    hobby: ['travel', 'piano', {
      a: 1
    }],
    career: {
      teacher: 4,
      engineer: 9
    }
  }
}

// function deepClone (origin, target) {
//   var tar = target || {};
//   var toStr = Object.prototype.toString;
//   var arrType = '[object Array]';
  
//   for (var k in origin) {
//     if (origin.hasOwnProperty(k)) {
//       if (typeof origin[k] === 'object' && origin[k] !== null) {
//         tar[k] = toStr.call(origin[k]) === arrType ? [] : {};
//         deepClone(origin[k], tar[k]);
//       } else {
//         tar[k] = origin[k];
//       }
//     }
//   }

//   return tar;
// }

// const newObj = deepClone (obj, {});
// newObj.info.hobby[2].a = 123;
// console.log(obj, newObj);

// WeakMap   Map

// map.set({a: 1}, '这是一个什么什么对象')

// Map   键名  -> 任意类型  {}  []
// WeakMap 键名 -> 对象

// {}    键名 -> 字符串

// const oBtn1 = document.querySelector('#btn1');
// const oBtn2 = document.querySelector('#btn2');

// const oBtnMap = new WeakMap();

// 弱引用
// oBtnMap.set(oBtn1, handleBtn1Click);
// oBtnMap.set(oBtn2, handleBtn2Click);


// oBtn1.addEventListener('click', oBtnMap.get(oBtn1), false);
// oBtn2.addEventListener('click', oBtnMap.get(oBtn2), false);

// function handleBtn1Ca s d z zlick () {}
// function handleBtn2Click () {}

// oBtn1.remove();
// oBtn2.remove();

// null undefined   Date   RegExp  instanceof

// function

function deepClone (origin, hashMap = new WeakMap()) {
  if (origin == undefined || typeof origin !== 'object') {
    return origin;
  }

  if (origin instanceof Date) {
    return new Date(origin);
  }

  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }

  const hashKey = hashMap.get(origin);

  if (hashKey) {
    return hashKey;
  }

  const target = new origin.constructor();
  hashMap.set(origin, target);
  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      target[k] = deepClone(origin[k], hashMap);
    }
  }

  return target;
}

// const obj = {};
// const newObj = new obj.constructor();

// console.log(obj) 

// newObj.a = 1;

// console.log(newObj);

// const arr = [];
// const newArr = new arr.constructor();

// console.log(arr);

// newArr.push(1);
// console.log(newArr);

// const newObj = deepClone(obj);
// newObj.info.hobby[2].a = 123;

// console.log(obj);
// console.log(newObj);

let test1 = {};
let test2 = {};
test2.test1 = test1;
test1.test2 = test2;

console.log(deepClone(test2));

