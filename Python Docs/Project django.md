## Tạo project Django
### Trên Windows
Ta dùng powershell hoặc CMD tạo project django, đến thư mục ta muốn lưu project ta chaỵ lệnh:  
`C:\Project>django-admin startproject mysite`  
###Trên ubuntu 
Ta cũng chạy lệnh tương tự:  
`$ django-admin startproject mysite`  
Cấu trúc project của django như sau:  
mysite/  
+ manage.py  
+ mysite/  
    + __init__.py  
    + settings.py  
    + urls.py  
    + wsgi.py  

Mỗi ứng dụng Web django tự chạy một server cho chính nó, do đó bạn có thể đặt code ở bất kỳ đâu.  

## Chạy project Django

Để chạy một project django, ta dùng lệnh:  
* Trên Windows:  
`C:\Project\mysite>py manage.py runserver`  
* Trên ubuntu:  
`$ python3 manage.py runserver`  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-08-28%2017-25-19.png)  

Chúng ta đã chạy một web server viết bằng Python. Mặc định Django server sẽ chạy trên cổng 8000 (chúng ta có thể cấu hình để server chạy trên một cổng khác).  
Bạn có thể vào trình duyệt và trỏ đường dẫn đến 127.0.0.1:8000 hoặc localhost:8000 để xem thông báo của server.  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-08-28%2017-26-00.png)  
`$ python3 manage.py runserver 8080`  

Đoạn code trên sẽ chạy server trên port 8080.  

## Tạo Webapp
Tại thư mục của project ta chạy lệnh:  
`mysite$ python3 manage.py startapp polls`  
Thư mục tên polls và có cấu trúc như sau:  
+ polls/
    + __init__.py
    + admin.py
    + apps.py
    + migrations/
        + __init__.py
    + models.py
    + tests.py
    + views.py  

Thư mục này chứa các file chuẩn của một ứng dụng web Django.  

Sự khác nhau giữa một Project và một Web App là project thì bao gồm nhiều app, trong đó mỗi app thực hiện một công việc riêng biệt.  

## Tạo View
Bên trong file views.py này chúng ta viết hàm `index`, hàm này trả về một đối tượng `HttpResponse`. Để gọi được tới hàm `index` này và lấy nội dung HTML thì chúng ta phải tạo đường dẫn URL tới file này.  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-08-28%2017-34-15.png)  
Để tạo URL chúng ta tạo một file với tên `urls.py` bên trong thư mục polls.  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-08-28%2017-38-52.png)  
Bên trong file urls.py chúng ta khai báo một đối tượng List có tên urlpatterns, Django sẽ tìm thông tin về các url trong list này, list này chứa các đối tượng url, mỗi url bao gồm 3 tham số, tham số thứ nhất là biểu thức chính quy (Regex – Regular Expression), tham số thứ hai là tên module và tên hàm sẽ trả về nội dung HTML, ở đây là hàm index trong module views (file views.py), tham số thứ 3 là tên biến toàn cục trong toàn bộ ứng dụng, trong đó 2 tham số đầu tiên là bắt buộc phải có.  

Sau khi đã có đường dẫn cho riêng polls, thì tiếp theo chúng ta phải tạo đường dẫn đến ứng dụng polls này nữa, chúng ta sẽ tạo đường dẫn cho từng ứng dụng trong file `mysite/urls.py`  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-08-28%2017-40-54.png)  
Bên trong file mysite/urls.py cũng có một list urlpatterns, list này chứa các đối tượng url dẫn đến các ứng dụng web khác mà chúng ta viết.  
Khi chúng ta gõ localhost:8000 thì django sẽ đọc các url trong file mysite/urls.py, trong file này chúng ta có một đường dẫn đến admin/, đường dẫn này trỏ đến hàm get_url() trong module admin.site của django, do đó bạn có thể gõ localhost:8000/admin và django sẽ trả về một trang đăng nhập mẫu (chúng ta sẽ tìm hiểu về trang admin này sau), url thứ hai là đường dẫn polls/ trỏ đến một file urls.py khác ở module polls.urls do chúng ta tự viết, file này lại chứa một list urlpatterns khác chứa các đường dẫn đến các hàm trả về HTML riêng của chúng, thế nên chúng ta có thể gõ localhost:8000/polls, và django sẽ trả về trang HTML tạo ra từ hàm index() trong module polls.urls.  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Python%20Docs/Images/Screenshot%20from%202018-08-28%2017-42-07.png)
