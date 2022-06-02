(function() {
	const response = {
		"type": "crud",
		"syncLocation": false,
		"api": {
		  "method": "post",
		  "url": "http://localhost:8202/admin/book/getBooks/${page}",
		  "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}"
		},
		"columns": [
		  {
			"type": "text",
			"label": "ID",
			"name": "id"
		  },
		  {
			"type": "text",
			"label": "书籍名称",
			"name": "bookName"
		  },
		  {
			"type": "text",
			"label": "作者",
			"name": "author"
		  },
		  {
			"type": "text",
			"label": "封面",
			"name": "cover"
		  },
		  {
			"type": "text",
			"label": "出版社",
			"name": "publish"
		  },
		  {
			"type": "text",
			"label": "ISBN编号",
			"name": "isbn"
		  },
		  {
			"type": "text",
			"label": "介绍",
			"name": "introduction"
		  },
		  {
			"type": "text",
			"label": "语言",
			"name": "language"
		  },
		  {
			"type": "text",
			"label": "出版日期",
			"name": "publishDate"
		  },
		  {
			"type": "text",
			"label": "类型",
			"name": "type"
		  },
		  {
			"type": "text",
			"label": "具体位置",
			"name": "location"
		  },
		  {
			"type": "operation",
			"label": "操作",
			"buttons": [
			  {
				"label": "编辑",
				
				"type": "button",
				"actionType": "dialog",
				"level": "link",
				"dialog": {
				  "title": "编辑",
				  "body": [
					{
					  "type": "form",
					  "api": "xxx/update",
					  "body": [
						{
						  "name": "bookName",
						  "label": "",
						  "type": "input-text",
						  "validations": {
						  },
						  "validationErrors": {
						  },
						  "readOnly": false,
						  "remark": null,
						  "options": [
						  ]
						},
						{
						  "label": "作者",
						  "name": "author",
						  "type": "input-text"
						},
						{
						  "label": "封面",
						  "name": "cover",
						  "type": "input-text"
						},
						{
						  "label": "介绍",
						  "name": "introduction",
						  "type": "input-text"
						},
						{
						  "label": "语言",
						  "name": "language",
						  "type": "input-text"
						},
						{
						  "type": "input-text",
						  "label": "ISBN",
						  "name": "isbn"
						},
						{
						  "type": "input-text",
						  "label": "介绍",
						  "name": "introduction"
						},
						{
						  "type": "input-text",
						  "label": "语言",
						  "name": "language"
						},
						{
						  "type": "input-text",
						  "label": "出版日期",
						  "name": "publishDate"
						},
						{
						  "type": "input-text",
						  "label": "类型",
						  "name": "type"
						},
						{
						  "type": "input-text",
						  "label": "位置",
						  "name": "location"
						},
						{
						  "type": "input-text",
						  "label": "出版社",
						  "name": "publish"
						},
						{
						  "type": "input-text",
						  "label": "token",
						  "name": "token",
						  "validations": {
						  },
						  "value": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2MTAwYjE3MjZkMjE0NDY0YjQyMzUxMjM2Zjc5Yjc0ZSIsInN1YiI6IjIiLCJpc3MiOiJzZyIsImlhdCI6MTY1MzU0ODk5OSwiZXhwIjoxNjUzNjM1Mzk5fQ.zd5gnHC1bKALLgPFhYIu8ALUIw_-eAVuCF0boym04Yg",
						  "visibleOn": "",
						  "clearValueOnHidden": false,
						  "visible": false
						}
					  ]
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
						"url": "http://localhost:8202/admin/book/updateBooks",
						"data": {
						  "token": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNmQ1MmYxY2FkODU0MTFkODVkNjRmZGM0YjI5ZGRlOCIsInN1YiI6IjIiLCJpc3MiOiJzZyIsImlhdCI6MTY1MzU1OTYyNiwiZXhwIjoxNjUzNjQ2MDI2fQ.FPOFZzl8bztVXsmmM6ayjiCEi6NEzmB8b9k8rdDcpTU"
						},
						"responseData": null
					  },
					  "confirmText": "是否修改",
					  "disabled": "",
					  "clearValueOnHidden": false,
					  "visible": "",
					  "icon": "fa fa-snapchat",
					  "size": "sm",
					  "iconClassName": "pull-right"
					}
				  ]
				},
				"size": "lg",
				"disabledOn": "",
				"disabled": ""
			  }
			]
		  }
		],
		"bulkActions": [
		  {
			"type": "button",
			"level": "danger",
			"label": "批量删除",
			"actionType": "ajax",
			"confirmText": "确定要删除？",
			"api": "http://localhost:8202/admin/book/delete/1",
			"perPageAvailable": [
			  10
			]
		  }
		],
		"itemActions": [
		],
		"features": [
		  "bulkDelete"
		],
		"id": "u:cf1ab8b047a6",
		"perPageAvailable": [
		  10
		],
		"messages": {
		}
	  }

	window.jsonpCallback && window.jsonpCallback(response);
})();
