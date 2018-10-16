Kết nối với DB mysql:  
`mysql -u fooUser -p -h 44.55.66.77`  
## Tạo UUID trong project laravel:  
UUID: Universally Unique IDentifier  
Mục đích của UUID là:  
* Dữ liệu lớn, kiểu khóa chính auto imcrement cần nhiều byte để lưu hơn. Và khóa chính kiểu này không phù hợp khi mà hệ thống có nhiều server, nhiều client cùng lúc truy cập trên toàn thế giới.  
* Nếu dùng khóa chính kiểu auto imcrement, có thể dễ dàng truy ra được trong database có bao nhiêu record. Thường thấy ở đường dẫn kiểu "domain.com/user/12345".  
#### Cài đặt:
chạy lệnh `composer require ramsey/uuid`  
Sau đó chạy `composer update`  
yêu cầu phải import 2 library sau:  
use Ramsey\Uuid\Uuid;  
use Ramsey\Uuid\Exception\UnsatisfiedDependencyException;  

Tạo UUID:  
Tạo đối tượng UUID phiên bản 1 (dựa trên thời gian):  
`$uuid1 = Uuid::uuid1();`  ví dụ: `e4eaaaf2-d142-11e1-b3e4-080027620cdd`  
Tạo đối tượng phiên bản 4 UUID (ngẫu nhiên):  
`$uuid4 = Uuid::uuid4();`  ví dụ: `25769c6c-d34d-4bfe-ba98-e0ee856f3e7a`  

Bạn có thể xem chi tiết tại [đây](https://github.com/ramsey/uuid)  
