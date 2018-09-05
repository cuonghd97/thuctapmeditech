## Thao tác với cơ sở dữ liệu trong Django
Sau khi chúng ta đã tạo các lớp model, Django sẽ tự động tạo các phương thức mới trong model đó cho phép bạn thao tác với CSDL, bạn có thể tạo, sửa, xóa, cập nhật dữ liệu.  
Ta sử dụng lớp model sau đây để thực hành với các phương thức mà django cung cấp  
```
from django.db import models

# Create your models here.
class USER(models.Model):
    username = models.TextField(max_length=15)
    password = models.TextField(max_length=8)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username
```  
### Tạo đối tượng
Sau khi chạy lệnh `python3 manage.py shell`  
chạy `from user.models import USER` để thao tác với bang USER  
Bạn có thể thêm dữ liệu vào bằng 2 cách  
```
a = USER()
a.username = 'admin'
a.password = 'admin'
a.save()
```  
hoặc  
```
a = USER(username = 'admin', password = 'admin')
a.save()
```  
Phương thức `a.save()` dùng để cập nhật dữ liệu lên database.  
Ngoài ra nếu bạn muốn vừa tạo đối tượng vừa cập nhật thẳng lên CSDL luôn thì dùng phương thức create() trong đối tượng objects  
`USER.objects.create(username = 'admin', password = 'admin')`  
### Cập nhật đối tượng
```
b.username = 'newusername'
b.save()
```  
### Truy xuất dữ liệu
#### Lấy toàn bộ dữ liệu
Khi chúng ta lấy dữ liệu về từ DB thì objects sẽ trả về một đối tượng `QuerySet`  
Để lấy toàn bộ dữ liệu:  
`USER.objects.all()`  
#### Lọc dữ liệu
Có 2 phương thức hỗ trợ lọc dữ liệu là filter() và exclude(). Trong đó phương thức filter() sẽ trả về dữ liệu khớp với biểu thức tìm kiếm, còn exclude() sẽ trả về dữ liệu không khớp.  
`USER.objects.filter(username = 'admin')`  
Câu lệnh trên sẽ lọc những bản ghi __có__ username = 'admin'  
`USER.objects.exclude(username = 'admin')`  
Câu lệnh trên sẽ lọc những bản ghi __không có__ username = 'admin'  
#### Lấy một dòng dữ liệu
Django cung cấp phương thức get() giúp bạn lấy một bản ghi duy nhất, tham số của phương thức này cũng là một biểu thức tìm kiếm như 2 phương thức filter() và exclude(). Bạn cũng chỉ dùng get() khi biết dữ liệu trả về chỉ có 1 bản ghi thôi, nếu có nhiều bản ghi khớp với biểu thức tìm kiếm thì get() sẽ báo lỗi exception MultipleObjectsReturned.  
`a = USER.objects.get(id = 1)`  
Một sự khác nhau nữa giữa get() và filter()/exclude() là nếu get() không tìm thấy bản ghi nào thì sẽ trả về một lỗi exception là DoesNotExist còn 2 phương thức kia sẽ trả về một đối tượng QuerySet rỗng.  
> Ngoài 3 phương thức trên bạn có thể tìm hiểu thêm các phương thức khác tại [đây](https://docs.djangoproject.com/en/1.9/ref/models/querysets/#queryset-api)