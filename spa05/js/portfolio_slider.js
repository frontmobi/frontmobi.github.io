$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 600,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : '客戶1',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/F0C080/333', 'http://placehold.it/250x250/F0C060/333', 'http://placehold.it/250x250/F0C040/333', 'http://placehold.it/250x250/F0C020/333', 'http://placehold.it/250x250/F0C000/333','http://placehold.it/250x250/F0C080/333', 'http://placehold.it/250x250/F0C060/333', 'http://placehold.it/250x250/F0C040/333', 'http://placehold.it/250x250/F0C020/333', 'http://placehold.it/250x250/F0C000/333'],
			'large' : ['http://placehold.it/500x500/F0C080/333', 'http://placehold.it/500x500/F0C060/333', 'http://placehold.it/500x500/F0C040/333', 'http://placehold.it/500x500/F0C020/333', 'http://placehold.it/500x500/F0C000/333','http://placehold.it/500x500/F0C080/333', 'http://placehold.it/500x500/F0C060/333', 'http://placehold.it/500x500/F0C040/333', 'http://placehold.it/500x500/F0C020/333', 'http://placehold.it/500x500/F0C000/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['All']
			},

			{
			'title' : '客戶2',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/F080C0/333', 'http://placehold.it/250x250/F080A0/333', 'http://placehold.it/250x250/F08080/333', 'http://placehold.it/250x250/F08060/333'],
			'large' : ['http://placehold.it/500x500/F080C0/333', 'http://placehold.it/500x500/F080A0/333', 'http://placehold.it/500x500/F08080/333', 'http://placehold.it/500x500/F08060/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['餐飲業','All']
			},

			{
			'title' : '客戶3',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/CCFFAA/333','http://placehold.it/250x250/CCFF8A/333', 'http://placehold.it/250x250/CCFF6A/333', 'http://placehold.it/250x250/CCFF4A/333'],
			'large' : ['http://placehold.it/500x500/CCFFAA/333','http://placehold.it/500x500/CCFF8A/333', 'http://placehold.it/500x500/CCFF6A/333', 'http://placehold.it/500x500/CCFF4A/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['設計業', 'All']
			},

			{
			'title' : '客戶4',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/FFCCAA/333', 'http://placehold.it/250x250/FFCC8A/333', 'http://placehold.it/250x250/FFCC6A/333', 'http://placehold.it/250x250/FFCC4A/333', 'http://placehold.it/250x250/FFCC2A/333'],
			'large' : ['http://placehold.it/500x500/FFCCAA/333', 'http://placehold.it/500x500/FFCC8A/333', 'http://placehold.it/500x500/FFCC6A/333', 'http://placehold.it/500x500/FFCC4A/333', 'http://placehold.it/500x500/FFCC2A/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['旅宿業','All']
			},

			{
			'title' : '客戶5',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/AAFFCC/333', 'http://placehold.it/250x250/AAFFAC/333', 'http://placehold.it/250x250/AAFF8C/333', 'http://placehold.it/250x250/AAFF6C/333'],
			'large' : ['http://placehold.it/500x500/AAFFCC/333', 'http://placehold.it/500x500/AAFFAC/333', 'http://placehold.it/500x500/AAFF8C/333', 'http://placehold.it/500x500/AAFF6C/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['傳播業','All']
			},

			{
			'title' : '客戶6',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/AACCFF/333','http://placehold.it/250x250/AACCDF/333', 'http://placehold.it/250x250/AACCBF/333', 'http://placehold.it/250x250/AACC9F/333'],
			'large' : ['http://placehold.it/500x500/AACCFF/333','http://placehold.it/500x500/AACCDF/333', 'http://placehold.it/500x500/AACCBF/333', 'http://placehold.it/500x500/AACC9F/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['餐飲業']
			},

			{
			'title' : '客戶7',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/D08090/333','http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333'],
			'large' : ['http://placehold.it/500x500/D08090/333','http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['設計業']
			},

			{
			'title' : '客戶8',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/90D080/333/333','http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333'],
			'large' : ['http://placehold.it/500x500/90D080/333','http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['旅宿業']
			},

			{
			'title' : '客戶9',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/8090D0/333','http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333'],
			'large' : ['http://placehold.it/500x500/8090D0/333','http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['傳播業']
			},

			{
			'title' : '客戶10',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/FFDD66/333','http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333'],
			'large' : ['http://placehold.it/500x500/FFDD66/333','http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['設計業']
			},

			{
			'title' : '客戶11',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/66FFDD/333','http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333'],
			'large' : ['http://placehold.it/500x500/66FFDD/333','http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['餐飲業']
			},

			{
			'title' : '客戶12',
			'description'   : '客戶專案說明',
			'thumbnail' : ['http://placehold.it/500x500/99DDFF/333','http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333', 'http://placehold.it/250x250/D6D6D6/333'],
			'large' : ['http://placehold.it/500x500/99DDFF/333','http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333', 'http://placehold.it/500x500/D6D6D6/333'],
			'button_list'   :
			[
			{ 'title':'客戶網站', 'url' : 'http://#' },
			{ 'title':'粉絲專頁', 'url':'http://#'}
			],
			'tags'  : ['旅宿業', '傳播業']
			},
		]
	});
});