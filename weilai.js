function parse (url) {
	const obj = {}
	let ourl = decodeURI(url)
	for (let i = 0; i < ourl.length; i++) {
		if (ourl[i] === '?') {
			let num = i + 1
			ourl = ourl.slice(num)
			break
		}
	}
	let urlArr = ourl.split('&')
	urlArr.forEach(item => {
		let [key, value] = item.split('=')
		obj[key] = value
	})
	return obj
}
console.log(parse('https://fanyi.baidu.com/translate?aldtype=16047&query=%E5%88%86%E7%BB%84&keyfrom=baidu &smartresult=dict&lang=zh2en#zh/en/%E5%88%86%E7%BB%84'))
// url = https://fanyi.baidu.com/translate?aldtype=16047&query=%E5%88%86%E7%BB%84&keyfrom=baidu &smartresult=dict&lang=zh2en#zh/en/%E5%88%86%E7%BB%84