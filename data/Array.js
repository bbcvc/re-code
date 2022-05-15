var items = [
	12, 548, 'a', 2, 5478, 'foo', 8852, , 'Doe', 2145, 119
]
const treeData = [
	{
		id: "p1",
		title: '广东',
		children: [{
			id: "p1-1",
			title: '广州',
		}]
	},
	{
		id: "p2",
		title: "四川",
		children: [{
			id: "p2-1",
			title: "成都",
			children: [{
				id: "p2-1-1",
				title: "高新区",
			}]
		},
		{
			id: "p2-2",
			title: "德阳"
		},
		{
			id: "p2-3",
			title: "绵阳"
		}]
	}
]
export {
	items,
	treeData
}