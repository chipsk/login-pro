(function() {
	const response = {
		"type": "crud",
		"api": {
			"method": "post",
			"url": "http://localhost:8202/admin/book/getBooksInfo/${page}",
			"adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}",
			"pageSize": 10
		  },
		  "mode": "cards",
		  "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}",
		  "filter": {
			"title": "条件搜索",
			"submitText": "",
			"body": [
			  {
				"type": "input-text",
				"name": "bookName",
				"placeholder": "通过书名搜索",
				"addOn": {
				  "label": "搜索",
				  "type": "submit",
				  "actionType": "ajax",
				  "api": {
					"method": "post",
					"url": "http://localhost:8202/admin/book/getBooksInfo/${page}"
				  }
				}
			  }
			]
		  },
		  "bulkActions": [
			{
			  "label": "批量借书",
			  "actionType": "ajax",
			  "api": {
				"method": "get",
				"url": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/${ids|raw}"
			  },
			  "confirmText": "是否要借阅这些书籍？",
			  "perPageAvailable": [
				12
			  ]
			}
		  ],
		  "quickSaveApi": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/bulkUpdate",
		  "quickSaveItemApi": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id",
		  "draggable": true,
		  "card": {
			"type": "card",
			"actions": [
			  {
				"type": "button",
				"label": "查看详情",
				"actionType": "dialog",
				"dialog": {
				  "title": "查看",
				  "body": [
					{
					  "type": "form",
					  "body": [
						{
						  "type": "static",
						  "name": "bookName",
						  "label": "书名",
						  "inline": true,
						  "className": ""
						},
						{
						  "type": "static",
						  "name": "author",
						  "label": "作者"
						},
						{
						  "type": "static",
						  "name": "publish",
						  "label": "出版社"
						},
						{
						  "type": "static",
						  "name": "introduction",
						  "label": "介绍"
						},
						{
						  "type": "static",
						  "name": "type",
						  "label": "类型"
						},
						{
						  "type": "static",
						  "name": "isbn",
						  "label": "ISBN编号"
						},
						{
						  "type": "static",
						  "name": "publishDate",
						  "label": "出版日期"
						},
						{
						  "type": "static",
						  "name": "language",
						  "label": "语言"
						}
					  ]
					}
				  ],
				  "type": "dialog",
				  "closeOnEsc": false,
				  "closeOnOutside": false,
				  "showCloseButton": true,
				  "size": "md"
				},
				"className": "p-l-xs",
				"position": "left"
			  },
			  {
				"type": "button",
				"label": "编辑",
				"actionType": "dialog",
				"className": "p-l-xs m-l",
				"dialog": {
				  "title": "编辑",
				  "body": [
					{
					  "type": "form",
					  "body": [
						{
						  "type": "input-text",
						  "name": "bookName",
						  "label": "书籍名称:",
						  "validations": {
						  },
						  "validationErrors": {
						  },
						  "readOnly": false,
						  "remark": null,
						  "options": [
						  ],
						  "required": true
						},
						{
						  "type": "input-text",
						  "name": "author",
						  "label": "作者:"
						},
						{
						  "type": "input-file",
						  "name": "cover",
						  "label": "封面：",
						  "asBlob": true
						},
						{
						  "type": "input-text",
						  "name": "introduction",
						  "label": "介绍:"
						},
						{
						  "type": "input-text",
						  "name": "language",
						  "label": "语言:"
						},
						{
						  "type": "input-text",
						  "name": "isbn",
						  "label": "ISBN:"
						},
						{
						  "type": "input-text",
						  "name": "publishDate",
						  "label": "出版日期",
						  "visibleOn": ""
						},
						{
						  "type": "input-text",
						  "name": "type",
						  "label": "类型:"
						},
						{
						  "type": "input-text",
						  "label": "出版社:",
						  "name": "publish"
						}
					  ],
					  "api": "xxx/update"
					}
				  ],
				  "type": "dialog",
				  "closeOnEsc": false,
				  "closeOnOutside": false,
				  "showCloseButton": true,
				  "size": "md",
				  "actions": [
					{
					  "type": "submit",
					  "actionType": "ajax",
					  "label": "修改",
					  "primary": true,
					  "api": {
						"method": "put",
						"url": "http://localhost:8202/admin/book/updateBooks"
					  },
					  "confirmText": "是否修改",
					  "disabled": "",
					  "clearValueOnHidden": false,
					  "visible": "",
					  "icon": "fa fa-snapchat",
					  "size": "sm",
					  "iconClassName": "pull-right",
					  "close": false,
					  "reload": "crud"
					}
				  ]
				},
				"level": "link",
				"size": "",
				"disabledOn": "",
				"disabled": "",
				"position": "left",
				"block": false
			  },
			  {
				"type": "button",
				"label": "借阅",
				"actionType": "ajax",
				"confirmText": "是否借阅该书?",
				"api": "delete:https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id",
				"className": "m-l"
			  },
			  {
				"type": "button",
				"label": "预定",
				"actionType": "dialog",
				"dialog": {
				  "title": "系统提示",
				  "body": "对你点击了"
				},
				"id": "u:fa61cdbf8753",
				"className": "m-r-lg p-r-lg m-l p-l-xs"
			  }
			],
			"body": [
			  {
				"label": "书名",
				"name": "bookName",
				"sortable": true
			  },
			  {
				"name": "author",
				"label": "作者"
			  },
			  {
				"name": "publish",
				"label": "出版社"
			  },
			  {
				"name": "remainder",
				"label": "库存"
			  }
			],
			"actionsCount": 4,
			"descClassName": "",
			"avatarClassName": "",
			"bodyClassName": "text-lg",
			"media": {
			  "type": "image",
			  "className": "w-48 h-36",
			  "url": "${cover}",
			  "position": "left"
			},
			"imageClassName": "",
			"className": ""
		  },
		  "perPageAvailable": [
			12
		  ],
		  "messages": {
		  },
		  "name": "crud",
		  "alwaysShowPagination": true,
		  "perPage": "",
		  "placeholder": "暂无数据",
		  "columnsCount": 3
	  }
	  

	window.jsonpCallback && window.jsonpCallback(response);
})();
