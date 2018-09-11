## Post form bằng ajax
Ajax là phương thức trao đổi dữ liệu với máy chủ, cập nhật một phần của trang web mà không phải load lại toàn bộ trang Web  
## Xử lý phía client
Post form sử dụng ajax  
Ví dụ:  
```
 $.ajax({
            type: 'POST',
            url: '',
            data: {
                'username': username,
                'password': password,
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(){
                alert('success')
            }
        })
```  
`type: 'POST'` gồm các phương thức GET và POST  
GET: Lấy dữ liệu từ database xuống  
POST: Đưa dữ liệu lên server  
`url: ''` địa chỉ file cần nhận dữ liệu post lên  
`data: ` dữ liệu được lưu theo dạng key - value   
`dataType: ` chỉ ra dạng dữ liệu được post lên json hay xml  
```
success: function(){
                alert('success')
            }
```  
Khi thực hiện post thành công câu lệnh sẽ được thực hiện  
## Phía backend
```
def ajax(request):
    if request.method == 'POST':
        user.objects.create(username = request.POST['username'], password = request.POST['password'])
    return render(request, 'pages/home.html')
```  
`if request.method == 'POST':` kiểm tra xem phương thức là POST hay GET  
`user.objects.create(username = request.POST['username'], password = request.POST['password']):` câu lệnh thực hiện lưu dữ liệu vào database  
