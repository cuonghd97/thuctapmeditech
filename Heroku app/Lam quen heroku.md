## Heroku là gì ?

Heroku là dịch vụ cung cấp máy chủ miễn phí cho người dùng. Với cái giá phải trả 0$ cùng với vô vàn các addons hỗ trợ cực kỳ hữu ích thì đấy được coi là một trong những dịch vụ hấp dẫn khó cưỡng. Dù miễn phí nhưng nó có thể so sanh với các server trả phí.  
Heroku hỗ trợ nhiều ngôn ngũ lập trình:
> NodeJS  
> Ruby  
> Python  
> PHP  
> JAVA  
> Scala  
> Clojure  
> Go  
> Kotlin  
## Hướng dẫn deploy Django project lên Heroku  
yêu cầu phải cài django trên máy  
Heroku đã cung cấp cho ta một template django có sẵn các config để dễ dàng deploy lên server ta chỉ cần chạy lệnh sau:  
`django-admin.py startproject --template=https://github.com/heroku/heroku-django-template/archive/master.zip --name=Procfile <Tên project của bạn>`  
và ta sẽ code tại project trên 
Deploy lên heroku
`git init`  
`git add -A`  
`git commit -m 'update'`  
`heroku create <tên app>`  
`git push heroku master`  
`heroku run python3 manage.py migrate`  
Sau đó vào trang heroku.com vào app và chạy app và xem kết quả
