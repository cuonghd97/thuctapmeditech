### Hướng dẫn cách deploy laravel project lên heroku

Cần chuẩn bị một project laravel có sẵn  
Chạy lệnh `heroku create <Tên app heroku>`  
Vào trang [heroku.com](heroku.com) vào app vừa tạo và cài addon Heroku Postgres để tạo database  
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Heroku%20app/image/Screenshot%20from%202018-10-12%2018-00-38.png)  
Chọn vào addon Heroku Postgres vào tab `Setting` chọn View `Credentials...` để xem các thông tin như Port, Database name,...
![anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Heroku%20app/image/Screenshot%20from%202018-10-12%2018-08-07.png)  
Và điền vào file .env của Laravel  
Sau khi đã cập nhật nội dung file .env, ta cần mởi file .gitignore và xóa dòng có chứa .env đi để khi push lên Heroku file .env của chúng ta không bị bỏ qua. Tiếp đó, trong terminal ta gõ lệnh sau để tạo file nhằm config đường dẫn tới file index trong folder laravel của chúng ta:  
`echo web: vendor/bin/heroku-php-apache2 public/ > Procfile`  
Chạy:  
`git init`  
Tạo remote lên heroku app:  
`heroku git:remote -a <tên heroku app> `  
Sau đó ta add và commit:  
`git add`  
`git commit -m 'deploy'`  
Cuối cùng ta push lên heroku bằng lệnh:  
`git push heroku master`  
vào app trên heroku chạy console  
[anh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Heroku%20app/image/Screenshot%20from%202018-10-12%2018-12-47.png)  
Chạy lênh:  
`php artisan migrate`  
để tạo bảng trên postgres database và cuối cùng open app trên heroku và xem kết quả
