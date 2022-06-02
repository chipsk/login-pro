(function() {
	const response =
    {
        "type": "crud",
        "draggable": true,
        "api": {
            "method": "post",
            "url": "http://localhost:8202/admin/lend/getLendList/${page}?pageSize=${perPage}",
            "perPage": 3,
            "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}"
          },
        "keepItemSelectionOnPageChange": true,
        "maxKeepItemSelectionLength": 11,
        "labelTpl": "${id} ${bookName}",
        "orderBy": "id",
        "orderDir": "asc",
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
                "type": "submit"
              }
            }
          ]
        },
        "bulkActions": [
          {
            "label": "批量删除",
            "actionType": "ajax",
            "api": {
              "method": "delete",
              "url": "http://localhost:8202/admin/lend/deleteManyList",
              "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}",
              "data": {
              }
            },
            "confirmText": "确定要批量删除?"
          },
          {
            "label": "批量还书",
            "actionType": "dialog",
            "dialog": {
              "title": "批量编辑",
              "name": "sample-bulk-edit",
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
        "filterTogglable": true,
        "headerToolbar": [
          "filter-toggler",
          "bulkActions",
          {
            "type": "tpl",
            "tpl": "当前有 ${total} 条借阅记录。",
            "className": "v-middle"
          },
          {
            "type": "columns-toggler",
            "align": "right"
          },
          {
            "type": "drag-toggler",
            "align": "right"
          },
          {
            "type": "pagination",
            "align": "right"
          }
        ],
        "footerToolbar": [
          "statistics",
          "switch-per-page",
          "pagination"
        ],
        "columns": [
          {
            "name": "id",
            "label": "lendId",
            "type": "text"
          },
          {
            "name": "bookId",
            "label": "ID",
            "type": "text"
          },
          {
            "name": "bookName",
            "label": "图书名称",
            "type": "text"
          },
          {
            "type": "date",
            "label": "lendDate",
            "name": "lendDate"
          },
          {
            "type": "date",
            "label": "backDate",
            "name": "backDate"
          },
          {
            "type": "text",
            "name": "exceptRemarks",
            "label": "备注"
          },
          {
            "type": "text",
            "label": "是否以还书",
            "name": "backType",
            "remark": "0为以还，1为未还"
          },
          {
            "type": "operation",
            "label": "操作",
            "width": 100,
            "buttons": [
              {
                "label":"查看" ,
                "type": "button",
                "actionType": "dialog",
                "dialog": {
                  "title": "查看",
                  "body": {
                    "type": "form",
                    "body": [
                      {
                        "type": "static",
                        "name": "id",
                        "label": "lendId"
                      },
                      {
                        "type": "static",
                        "name": "bookId",
                        "label": "Id"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "static",
                        "name": "bookName",
                        "label": "书名"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "static",
                        "name": "lendDate",
                        "label": "lendDate"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "static",
                        "name": "backDate",
                        "label": "backDate"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "static",
                        "name": "exceptRemarks",
                        "label": "备注"
                      },
                      {
                        "type": "divider"
                      }
                    ]
                  }
                }
              },
              {
                "type": "button",
                "actionType": "ajax",
                "label": "挂失",
                "confirmText": "您确认要挂失?",
                "api": {
                  "method": "put",
                  "url": "",
                  "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}",
                  "data": {
                    "id": "${id}",
                    "bookId": "${bookId}",
                    "backType": "${backType}"
                  }
                }
              },
              {
                "type": "button",
                "label": "修改归还时间",
                "actionType": "drawer",
                "drawer": {
                  "position": "left",
                  "size": "lg",
                  "title": "修改归还时间",
                  "body": {
                    "type": "form",
                    "api": {
                      "method": "post",
                      "url": "http://localhost:8202/admin/lend/updateBack/$id",
                      "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}"
                    },
                    "body": [
                      {
                        "type": "input-datetime",
                        "name": "backDate",
                        "label": "还书时间",
                        "format": "YYYY-MM-DD HH:mm:ss",
                        "required": true
                      }
                    ]
                  }
                }
              },
              {
                "type": "button",
                "actionType": "ajax",
                "label": "删除",
                "confirmText": "您确认要删除?",
                "api": {
                  "method": "delete",
                  "url": "http://localhost:8202/admin/lend/deleteOneList",
                  "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}",
                  "data": {
                    "id": "${id}",
                    "bookId": "${bookId}",
                    "backType": "${backType}"
                  }
                }
              },
              {
                "type": "button",
                "actionType": "ajax",
                "label": "还书",
                "confirmText": "您确认要还书?",
                "api": {
                  "method": "put",
                  "url": "http://localhost:8202/admin/lend/backBook",
                  "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}",
                  "data": {
                    "id": "${id}",
                    "bookId": "${bookId}",
                    "backType": "${backType}"
                  }
                }
              }
            ],
            "toggled": true
          }
        ]
      }

	window.jsonpCallback && window.jsonpCallback(response);
})();
