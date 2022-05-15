import { obj } from './data/Object'
function deepClone (origin, hashMap = new WeakMap()) {
	// 判断是否是个复杂对象
	if (typeof origin !== 'object' || origin == undefined) {
		return origin
	}

	// 日期
	if (origin instanceof Date) {
		return new Date(origin)
	}

	// 正则表达式
	if (origin instanceof RegExp) {
		return new RegExp(origin)
	}

	// 是否已存在  存在循环引用
	const hashKey = hashMap.get(origin)
	if (hashKey) {
		return hashKey
	}

	// 进入克隆体
	const target = new origin.constructor()
	hashMap.set(origin, target)
	for (let k in origin) {
		if (origin.hasOwnProperty(k)) {
			target[k] = deepClone(origin[k], hashMap)
		}
	}

	return target
}
const deepObj = deepClone(obj)
obj.name = "小红书"
console.log(obj)
console.log(deepObj)