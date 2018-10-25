
# Note laravel 5.5

## Sau khi đăng nhập:
* Ta có thể lấy thông tin tài khoản sau đăng nhập bằng cách:  
```
@if(Auth::check())
  {{ Auth::model->field }}
@endif
```  
hoặc:  
```
{{ Auth::guard('user')->model()->field }}
```  
`user` ở trên là tên trong `config/auth.php` tại dòng guard  
Nhưng khi dùng Auth::check() sau khi chuyển trang khác Auth::check() sẽ trả về false và không lấy được thông tin còn phương thức còng lại có thể dùng lại được.  
## Cách lấy thời gian đăng nhập gần nhất 

Ta thêm một cột để lưu thời gian đăng nhập gần nhất ví dụ như: last_sign_at trong bảng  
Cột đó có kiểu là timestamp chẳng hạn:  
`$tabl->timestamp(last_sign_in_at)->nullable;`  
sau đó ta thêm even có tên LastSignInAt tại file `App\Providers\EventServiceProvider.php` tại array $listen:  
```
'Illuminate\Auth\Events\Login' => [
 	'App\Listeners\UpdateLastSignInAt',
],
```  
Tên của event bạn có thể đặt tùy ý.  
Bạn có thể xem thêm các event tại [đây](https://laravel.com/docs/5.5/events#registering-events-and-listeners)  
Sau đó tiến hành tạo event bằng câu lệnh:  
`php artisan event:generate`  
Để tạo event trên. Ta sẽ có một file .php có tên tương ứng với event đã tạo tại thư mục:  
`app\Listeners\UpdateLastSignInAt.php`  
Tại hàm handle ta thay đổi nội dung hàm đó thành:
```
$event->user->last_sign_in_at = Carbon::now();
$event->user->save();
```  
Lưu ý: là phải import `Carbon\Carbon` tại file `UpdateLastSignInAt.php`  
Sau khi đăng nhập bạn truy cập vào database để kiểm tra kết quả  

## Thay đổi múi giờ trong laravel
Tại file `config\app.php` ta thay đổi múi giờ về giờ việt nam chẳng hạn:  
` 'timezone' => 'Asia/Ho_Chi_Minh',`  
danh sách về các múi giờ bạn có thể xem thêm tại [đây](http://php.net/manual/en/timezones.php)
