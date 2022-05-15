import { items, treeData } from './data/Array'

Array.prototype.myForEach = function (cb) {
	const self = arguments[1] || globalThis
	const arr = this
	const len = arr.length

	for (let index = 0; index < len; index++) {
		const item = arr[index]
		item !== undefined && cb.apply(self, [item, index, arr])
	}
}
// console.log('-----')
// items.myForEach(function (item) {
// 	console.log(item)
// })
// console.log('-----')
// items.forEach(function (item) {
// 	console.log(item)
// })

Array.prototype.myReduce = function (cb, init) {
	const arr = this
	const len = arr.length
	const data = init || []

	for (let index = 0; index < len; index++) {
		const item = arr[index]
		data = cb.apply(self, [data, item, index, arr])
	}

	return data
}
/**
 * test
*/
// var tmp = [0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
// 	return accumulator + currentValue;
// })
// console.log(tmp)
// var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
// var maxCallback2 = (max, cur) => Math.max(max, cur);
// // reduce() 没有初始值
// console.log([{ x: 2 }, { x: 22 }, { x: 42 }].reduce(maxCallback)); // NaN
// console.log([{ x: 2 }, { x: 22 }].reduce(maxCallback)); // 22
// console.log([{ x: 2 }].reduce(maxCallback)); // { x: 2 }
// console.log([].reduce(maxCallback)); // TypeError

function listToTree (data) {
	let parent = data.filter(p => !p.pid)
	let chirden = data.filter(c => c.pid)

	tree(parent, chirden)
	function tree (parent, chirden) {
		parent.forEach(p => {
			chirden.forEach((c, i) => {
				let _c = JSON.parse(JSON.stringify(chirden))
				_c.splice(i, 1)
				tree([c], _c)

				if (c.pid === p.id) {
					if (p[chirden]) {
						p.chirden.push = c
					} else {
						p.chirden = [c]
					}
				}
			})
		})
	}
}

/**
 * tree转list
*/
function tree2list (tree) {
	const list = []
	const queue = [...tree]
	while (queue.length) {
		const node = queue.shift()
		const children = node.children
		delete node.children
		if (!!children) {
			queue.push(...children)
		}
		list.push(children)
	}
	return list
}
console.log(tree2list(treeData))

function tree2list (tree) {
	const list = []
	const queue = [...tree]
	while (queue.length) {
		const node = queue.shift()
		const children = node.children
		if (!!children) {
			queue.push(...children)
		}
		list.push(children)
	}
	return list
}