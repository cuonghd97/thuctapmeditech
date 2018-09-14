## Get dữ liệu dùng Ajax
Đây là phương thức lấy dữ liệu từ Database xuống trang web mà không cần load lại cả trang  
Tại file `views.py` ta có hàm lấy dữ liệu về và trả về dữ liệu dạng chuỗi Json  
```def index(request):
    response  = HttpResponse()
    data = []
    table_data = table.objects.all()
    for dt in table_data:
        data.append([dt.names, dt.age])
    datas = {"data": data}
    json_datas = json.loads(json.dumps(datas))
    # json = serializers.serialize('json', table_data)
    return JsonResponse(json_datas)```  
Tại file javascript ta có hàm get dữ liệu như sau:  
```$(document).ready(function () {

    var table = $('#example').DataTable({
        "ajax": {
            "type": "GET",
            "url": "/index",
            "contentType": "application/json; charset=utf-8",
            "data": function (result) {
                return JSON.stringify(result)
            },
            "displayLength": 10
        },
    })
});```  
Trong đó:  
* "type": "GET": Là phương thức lấy dữ liệu từ database  
* "url": "/index": là đường dẫn đến trang mà hàm get dữ liệu trong file `views.py` trả về  
* "contentType": "application/json; charset=utf-8",: xác định kiểu dữ liệu là chuỗi Json  
* ```
"data": function (result) {
                return JSON.stringify(result)
            }
```  
hàm này có chức năng chuyển JavaScript Object thành chuôi Json.