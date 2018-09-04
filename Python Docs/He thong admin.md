## Admin
Admin page là một phần không thể thiếu trong lập trình Web giúp bạn có thể add, change, delete, ... và django framework cũng hỗ trợ tự động tạo giao diện admin theo các models.  
## Create User Admin
* Chạy lệnh sau:  `$ python3 manage.py createsuperuser`  
* Nhập username, email, và password.  
## Login Admin Page
* Chạy server `$ python3 manage.py runserver`  
* Truy cập vào `http://localhost:8000/admin`  
* Nhập username và password:  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-09-04%2019-44-08.png)  
## Thêm app trong admin
Ví dụ: Ta thêm app blog vào và quản lý bảng Post của app blog  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-09-04%2019-49-13.png)  
Tại đây ta có thể thêm một số chức năng vào, như lọc theo một trường (trên hình là lọc theo trường date), tìm kiếm, ... bằng cách thêm class với các chức năng tương tự như sau:  
Khi chưa thêm các chức năng  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-09-04%2019-54-29.png)  
Sau khi thêm  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-09-04%2019-54-46.png)  
Trên đây là một số chức năng của hệ thống admin các bạn có thể xem thêm tại đây:  
https://docs.djangoproject.com/en/1.7/intro/tutorial01/  
https://www.djangoproject.com/start/
