## Thao tác với cơ sở dữ liệu SQLite với Django  
Mặc định thì Django server sử dụng cơ sở dữ liệu SQLite  
Nếu bạn muốn sử dụng CSDL khác thì trong file `settings.py`, bạn tìm đến đối tượng `DATABASES` và thay đổi các giá trị sau:

`ENGINE`: tên module dành cho từng CSDL, mặc định sử dụng SQLite
`django.db.backends.sqlite3` – cơ sở dữ liệu  SQLite
`django.db.backends.postgresql` – cơ sở dữ liệu PostgreSQL
`django.db.backends.mysql` – cơ sở dữ liệu MySQL
`django.db.backends.oracle` – cơ sở dữ liệu Oracle
`NAME`: tên CSDL, mặc định là file db.sqlite3 được tạo ra ở thư mục gốc của server. Nếu bạn không dùng CSDL SQLite thì bạn phải tạo CSDL với tên trùng với NAME trong CSDL mà bạn dùng (bằng câu lệnh CREATE DATABASE <name>)
Ngoài ra nếu bạn không dùng SQLite thì bạn cũng phải cung cấp thêm các thông tin USER, PASSWORD, HOST nữa và user phải có quyền truy cập CSDL cũng như một số quyền như ghi, xem…  
Để tạo một database ta viết hàm trong file `models.py` của app  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-08-29%2020-14-34.png)  
Sau đó chạy lệnh `$ python3 manage.py makemigration 'tên app'` để lưu database trong app  
Chạy lệnh `$ python3 manage.py migrate` để lưu vào SQLite database  
Để tương tác với cơ sở dữ liệu ta chạy lệnh: 
`$ python3 manage.py shell` tại cửa sổ terminal  
Sau đó chạy `$ from (Tên app).models import (Tên database)`  
Sau đó ta thêm dữ liệu như thêm dữ liệu trên một class của python.  
Ví dụ: ta muốn xem dữ liệu của mẫu có id=1  
>>> a = (Tên database).Objects.get(id=1)  
>>> a.(Tên trường)
