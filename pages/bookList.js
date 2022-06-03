(function() {
	const response = {
        "title": "增删改查示例",
        "remark": "bla bla bla",
        "body": {
          "type": "crud",
          "api": {
            "method": "get",
            "url": "http://localhost:8202/admin/book/getBooksInfo/${page}?pageSize=${perPage}",
            "perPage": 10,
            "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}"
          },
          "mode": "list",
          "draggable": true,
          "saveOrderApi": {
            "url": "/amis/api/sample/saveOrder"
          },
          "orderField": "weight",
          "filter": {
            "title": "条件搜索",
            "submitText": "",
            "body": [
              {
                "type": "input-text",
                "name": "keywords",
                "placeholder": "通过关键字搜索",
                "addOn": {
                  "label": "搜索",
                  "type": "submit"
                }
              },
              {
                "type": "plain",
                "text": "这只是个示例, 目前搜索对查询结果无效."
              }
            ]
          },
          "bulkActions": [
            {
              "label": "批量删除",
              "actionType": "ajax",
              "api": "delete:/amis/api/sample/${ids|raw}",
              "confirmText": "确定要批量删除?",
              "type": "button",
              "level": "danger"
            },
            {
              "label": "批量修改",
              "actionType": "dialog",
              "level": "info",
              "type": "button",
              "dialog": {
                "title": "批量编辑",
                "body": {
                  "type": "form",
                  "api": "/amis/api/sample/bulkUpdate2",
                  "body": [
                    {
                      "type": "hidden",
                      "name": "ids"
                    },
                    {
                      "type": "input-text",
                      "name": "engine",
                      "label": "Engine"
                    }
                  ]
                }
              }
            }
          ],
          "quickSaveApi": "/amis/api/sample/bulkUpdate",
          "quickSaveItemApi": "/amis/api/sample/$id",
          "listItem": {
            "actions": [
              {
                "type": "button",
                "icon": "fa fa-eye",
                "actionType": "dialog",
                "dialog": {
                  "title": "查看",
                  "body": {
                    "type": "form",
                    "body": [
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
                            "label": "可借数量",
                            "name": "remainder"
                          }
                    ]
                  }
                }
              },
              {
                "type": "button",
                "icon": "fa fa-pencil",
                "actionType": "dialog",
                "dialog": {
                  "title": "编辑",
                  "body": {
                    "type": "form",
                    "name": "sample-edit-form",
                    "api": "/amis/api/sample/$id",
                    "body": [
                      {
                        "type": "input-text",
                        "name": "engine",
                        "label": "Engine",
                        "required": true
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "input-text",
                        "name": "browser",
                        "label": "Browser",
                        "required": true
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "input-text",
                        "name": "platform",
                        "label": "Platform(s)",
                        "required": true
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "input-text",
                        "name": "version",
                        "label": "Engine version"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "input-text",
                        "name": "grade",
                        "label": "CSS grade"
                      }
                    ]
                  }
                }
              },
              {
                "type": "button",
                "icon": "fa fa-times text-danger",
                "actionType": "ajax",
                "confirmText": "您确认要删除?",
                "api": "delete:/amis/api/sample/$id"
              }
            ],
            "body": [
              {
                "name": "engine",
                "label": "Rendering engine",
                "sortable": true,
                "quickEdit": true
              },
              {
                "type": "hbox",
                "columns": [
                  {
                    "name": "browser",
                    "label": "Browser"
                  },
                  {
                    "name": "platform",
                    "label": "Platform(s)"
                  }
                ]
              },
              {
                "name": "version",
                "label": "Engine version"
              }
            ]
          }
        }
      }

	window.jsonpCallback && window.jsonpCallback(response);
})();
