## Fields
Đây là phần bắt buộc phải có trong `Models` đó là danh sách các trường cơ sở dữ liệu mà nó định nghĩa, các `Fields` được khai báo trong các class. Không được chọn tên trường trùng với các `models API` như delete, save, delete.  
Ví dụ:  
```
from django.db import models

class Person(models.Model):
    name = models.TextField(max_length=200)
    age = model.IntegerField
```  
## Field types
Dùng để xác định kiểu dữ liệu của từng cột trong database  
Một số `field types` như: IntergerField, CharField, TextField,...  
## Field options
Mỗi `field` đều có các tham số  
Các tham số sau có thể sử dụng trong các `field types`  
+ `null`: Nếu `null=True` Django sẽ lưu trữ giá trị trống dưới dạng NULL trong database, mặc định `null=False`  
>Tránh sử dụng `null` đối với các kiểu `CharField` và `TextField`, vì nếu `null=True` sẽ có 2 giá trị khả dĩ đó là không có dữ liệu (NULL) và chuỗi rỗng, trong hầu hết các trường hợp đó Django sẽ quy ước đó là chuỗi rỗng. Ngoại lệ khi kiểu dữ liệu là `CharField` và có 2 tham số `unique=True` và `blank=True` trong trường hợp này `null=True` là cần thiết để tránh phạm vi ràng buộc duy nhất khi lưu nhiều đối tượng với giá trị trống.  
+ `blank`: database sẽ lưu trữ dưới dạng chuỗi rỗng   
+ `db_column`: dùng để định nghĩa lại tên của cột trông database  
+ `default`: giá trị mặc định của `field`, giá trị mặc định không thể là các object (list, set, ...)
+ `primary_key`: nếu `primary_key=True` trường đó sẽ được chọn làm khóa chính.
+ `unique`: gía trị đó sẽ là duy nhất trong cột. Nếu cố tình lưu giá trị đã có django sẽ báo lỗi.

Django đều đặt cho mỗi model một trường `id` đó là một trường tự tăng và được đặt làm khóa chính.  

## Các quan hệ
+ `ForeignKey`: Kiểu dữ liệu quan hệ nhiều-một.
+ `CASCADE`: khi xóa một dòng thì các khóa phụ liên quan đến dòng đó sẽ bị xóa theo.  
+ `SET_NULL`: đặt giá trị của khóa chính là null, khi trường đó đặt `null=True`  
+ `SET_DEFAULT`: đặt giá trị của khóa chính theo giá trị mặc định.

```
class Ops(models.Model):
    pass
class Sshkeys(models.Model):
    ops = models.ForeignKey('Ops', models.CASCADE)
    name = models.CharField(max_length=255)
    owner = models.ForeignKey('Myuser', models.CASCADE)

    class Meta:
        db_table = 'sshkeys'
```
Cách viết foreign key `ops = models.ForeignKey(Ops, models.CASCADE)` thì model `Ops` bắt buộc phải viết "phía trên" model `Sshkeys` còn cách viết sau `ops = models.ForeignKey('Ops', models.CASCADE)` khi đó Django sẽ coi `Ops` là model trừu tượng và có thể viết ở chỗ khác.

