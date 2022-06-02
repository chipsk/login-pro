(function() {
	const response = {
    "body": [
      {
        "type": "crud",
        "name": "list",
        "draggable": true,
        "api": {
            "method": "post",
            "url": "http://localhost:8202/admin/lend/getLendByBack/${page}?pageSize=${perPage}",
            "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}",
            "perPage": 10
        },
        "keepItemSelectionOnPageChange": true,
        "maxKeepItemSelectionLength": 11,
        "filter": {
          "title": "条件搜索",
          "submitText": "",
          "body": [
            {
              "type": "input-text",
              "name": "bookName",
              "placeholder": "通过书名搜索"
            },
            {
              "placeholder": "请输入读者id",
              "type": "input-text",
              "name": "readerId",
              "label": "读者id"
            }
          ],
          "actions": [
            {
              "type": "button",
              "actionType": "clear",
              "label": "清空"
            },
            {
              "type": "submit",
              "label": "提交",
              "level": "primary"
            }
          ]
        },
        "bulkActions": [
          {
            "label": "批量删除",
            "actionType": "ajax",
            "api": {
              "method": "delete",
              "url": "http://localhost:8202/admin/lend/deleteManyList/${ids}",
              "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}"
            },
            "confirmText": "确定要批量删除?"
          },
          {
            "label": "批量还书",
            "actionType": "ajax",
            "api": {
              "method": "put",
              "url": "http://localhost:8202/admin/lend/backManyBook/${ids}",
              "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}"
            },
            "confirmText": "确定要批量还书?"
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
            "name": "readerId",
            "label": "读者Id",
            "type": "text"
          },
          {
            "name": "bookId",
            "label": "书籍Id",
            "type": "text"
          },
          {
            "name": "bookName",
            "label": "图书名称",
            "type": "text"
          },
          {
            "type": "date",
            "label": "借书时间",
            "name": "lendDate"
          },
          {
            "type": "date",
            "label": "还书时间",
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
                        "type": "divider"
                      },
                      {
                        "type": "static",
                        "name": "readerId",
                        "label": "读者Id"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "static",
                        "name": "bookId",
                        "label": "书籍Id"
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
                        "label": "借书时间"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "type": "static",
                        "name": "backDate",
                        "label": "还书时间"
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
                "label": "挂失",
                "confirmText": "您确认要挂失？",
                "actionType": "dialog",
                "dialog": {
                  "title": "提示",
                  "closeOnEsc": true,
                  "body": "请联系管理员！ 电话：1111111 地址：江西师范大学",
                  "actions": [
                    {
                      "type": "button",
                      "actionType": "confirm",
                      "label": "确认",
                      "primary": true
                    }
                  ]
                }
              },
              {
                "type": "button",
                "label": "修改归还时间",
                "confirmText": "确定要更改归还时间?",
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
                        "minDate": "now+1day",
                        "maxDate": "now+15day",
                        "required": true
                      },
                      {
                        "type": "alert",
                        "body": "延迟借阅的时间必须在两周内！",
                        "level": "info",
                        "showIcon": true,
                        "className": "mb-1"
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
    ]
  
  }
  

	window.jsonpCallback && window.jsonpCallback(response);
})();
