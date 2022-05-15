/**
 * call手写实现
*/
Function.prototype.myCall = function (context) {
	// 如果没有传或传的值为空对象 context指向window
	context = context || globalThis
	let fn = new Symbol(context)
	context[fn] = this //给context添加一个方法 指向this
	// 处理参数 去除第一个参数this 其它传入fn函数
	let arg = [...arguments].slice(1) //[...xxx]把类数组变成数组，arguments为啥不是数组自行搜索 slice返回一个新数组
	context[fn](...arg) //执行fn
	delete context[fn] //删除方法
}

/**
 * 实现bind
*/
Function.prototype.mybind = function (context) {
	const self = context || globalThis
	const arg = [...arguments].slice(1)
	const fn = this

	return function () {
		fn.apply(self, arg.concat(...arguments))
	}
}

/**
 * 函数柯里化
*/
function curry (func) {
	return function currid (...agrs) {
		if (agrs.length >= func.length) {
			func.apply(this, agrs)
		} else {
			return function (...agrs2) {
				return currid.apply(this, agrs.concat(agrs2))
			}
		}
	}
}

/**
 *降频函数 防抖函数
 *这个 debounce 函数在给定的时间间隔内只允许你提供的回调函数执行一次，以此降低它的执行频率。
 *调用:	debounce(function() {}, 250) 
 * @param {*} func回调函数
 * @param {*} wait等待时间,推荐250
 * @param {*} immediate
 * @returns
 */
function debounce (func, wait, immediate) {
	let timeout
	return function () {
		let context = this, args = arguments
		// 清除时间标记 不是立即执行就调用
		let later = function () {
			timeout = null
			if (!immediate) {
				console.log(context)
				func.apply(context, args)
			}
		}
		let callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		// 是否需要立即执行
		if (callNow) {
			func.apply(context, args)
		}
	}
}

/**
 * 节流函数
*/
function throttle (fn, delay) {
	var previous = 0;
	// 使用闭包返回一个函数并且用到闭包函数外面的变量previous
	return function () {
		var _this = this;
		var args = arguments;
		var now = new Date();
		if (now - previous > delay) {
			fn.apply(_this, args);
			previous = now;
		}
	}
}
