(function() {
	const response = 
    {
        "type": "page",
        "body": {
          "type": "crud",
          "api": {
            "method": "get",
            "url": "http://localhost:8202/admin/userInfoByAdmin",
            "adaptor": "return {\n    ...payload,\n    status: payload.code === 200 ? 0 : payload.code\n}"
          },
          "syncLocation": false,
          "columns": [
            {
              "name": "id",
              "label": "ID"
            },
            {
              "name": "nickName",
              "label": "昵称"
            },
            
            {
              "type": "operation",
              "label": "操作",
              "buttons": [
                {
                  "label": "详情",
                  "type": "button",
                  "level": "link",
                  "actionType": "dialog",
                  "dialog": {
                    "title": "查看详情",
                    "body": {
                      "type": "form",
                      "body": [
                        {
                          "type": "input-text",
                          "name": "nickName",
                          "label": "昵称"
                        }
                      ]
                    }
                  }
                },
                {
                  "label": "删除",
                  "type": "button",
                  "level": "link",
                  "className": "text-danger",
                  "disabledOn": "this.grade === 'A'"
                }
              ]
            }
          ]
        }
      }

	window.jsonpCallback && window.jsonpCallback(response);
})();
