Ngoài hệ quản trị cơ sở dữ liệu mặc định là SQLite, thì Django còn cho phép sử dụng nhiều hệ quản trị cơ sở dữ liệu khác như: Mysql, Oracle, ...  
Sau đây mình sẽ trình bày kết nối django với mysql  
* Hướng dẫn tải và cài đặt xampp tại [đây](http://www.codebind.com/linux-tutorials/install-xampp-ubuntu-18-04/)  
* Trong project django bạn sửa file setting phần `DATABASES` như sau:  

<pre>DATABASES = {  
    'default': {  
        'ENGINE': 'django.db.backends.mysql',  
        'NAME': 'testDB',  
        'USER': '',  
        'PASSWORD': '' ,  
        'HOST': '127.0.0.1',  
        'PORT': '3344',  
    }  
}  
</pre>  
Trong đó `NAME` là tên database bạn muốn django thao tác với và database này đã được tạo sẵn  
`USER` tên người dùng mặc định la `root`  
`PASSWORD` là mật khẩu của mysql  
`HOST` mặc định là `127.0.0.1` hoặc `localhost`  
`PORT` port mặc định là 334  
sau khi chạy lệnh `$ python3 manage.py runserver` django đã tạo ra các bảng trong database như sau  
![anh]](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-08-31%2019-24-41.png)
