# Cài đặt
`pip install djangorestframework`

## Serializers
Serializers chuyển các dữ liệu phức tạp như queryset và model instance thành các kiểu dữ liệu Python mà có thể dễ dàng render ra dạng json hay xml hoặc các nội dung khác.  
Class serializers giống với class Django form

## Request & Response
### Request objects
+ Request object kế thừa từ HttpRequest
+ Chức năng chính của Request là request.data giống như request.POST nhưng hữu ích hơn khi làm việc với Web api.
> `request.post`: chỉ xử lý với form data, chỉ thực,chỉ hoạt động phương thức POST
> `request.data`: Xử lý dữ liệu tùy ý, hoạt động với các phương thức POST, PUT, PATCH
### Response object
`return Response(data)`: hiển thị nội dung theo yêu cầu của client.
### Status code
Một số status code: 
+ HTTP_200_OK
+ HTTP_201_CREATED  

+ HTTP_302_FOUND  

+ HTTP_400_BAD_REQUEST
+ HTTP_401_UNAUTHORIZED
+ HTTP_403_FORBIDDEN
+ HTTP_404_NOT_FOUND
+ HTTP_405_METHOD_NOT_ALLOWED  

+ HTTP_500_INTERNAL_SERVER_ERROR
+ HTTP_502_BAD_GATEWAY  
### Wrapping api view
REST framework cung cấp 2 wrapper:
+ @api_view làm việc với function base view
+ APIView làm việc với class base view

Wrapper cung cấp một số chức năng như đảm bảo nhận được request ngay trong view của bạn và thêm response object.  


#### Viết api bằng function base view
xem project chi tiết tại đây
#### Viết api bằng class base view
Cách viết này giúp code trông sạch hơn và có thể sử dụng lại một số hàm phổ biến

## Mixin
Mixin cung cấp luôn các phương thức, như là: .get(), .post(). 
### ListModelMixin
Phương thức .list(request, *args, **kwargs) thực hiện liệt kê 1 queryset.  
Nếu queryset tồn tại sẽ trả về phản hồi `200 OK`, dữ liệu trả về có thể phân trang.  
### CreateModelMixin
Phương thức .create(request, *args, **kwargs) sẽ tạo một bản ghi trong `models`  
Nếu đối tượng được tạo thành công sẽ trả về phản hồi `201 Created`, nếu dữ liệu yêu cầu không hợp lệ trả về `400 bad request`
### RetrieveModelMixin
Cung cấp phương thức .retrieve(request, *args, **kwargs) trả về một đối tượng model.  
Nếu đối tượng tồn tại sẽ phản hồi `200 OK` ngược lại trả về `404 Not Found`  
### UpdateModelMixin
Cung cấp phương thức .update(request, *args, **kwargs) cập nhật và lưu lại một đối tượng model  
Nếu cập nhật thành công sẽ phản hồi `200 OK`, ngược lại, dữ liệu không hợp lệ sẽ trả về `400 Bad request`  
### DestroyModelMixin
Cung cấp phương thức .destroy(request, *args, **kwargs) sẽ xóa một đối tượng model  
Nếu xóa thành công sẽ phản hồi `204 No content` ngược lại sẽ phản hồi `404 Not found`  

## Concrete View Classes

### CreateAPIView
Chỉ dùng cho việc tạo  
Xử lý phương thức `post`  
Kế thừa: GenericAPIView, CreateModelMixin  
### ListAPIView
Chỉ đọc tập hợp các đối tượng model  
Xử lý phương thức `get`  
Kế thừa: GenericAPIView, ListModelMixin  
### RetriveAPIView
Chỉ dùng cho việc đọc một đối tượng model  
Xử lý phương thức `get`  
Kế thừa: GenericAPIView, RetrieveModelMixin  
### DestroyAPIView
Chỉ xóa một đối tượng model  
Xử lý phương thức `delete`  
Kế thừa: GenericAPIView, DestroyModelMixin  
### UpdateAPIView 
Chỉ cập nhật một đối tượng model  
Xử lý phương thức `put` và `patch`  
Kế thừa: GenericAPIView, UpdateModelMixin  
### ListCreateAPIView
Đọc và tạo tập hợp đối tượng model  
Xử lý phương thức `get` và `post`  
Kế thừa: GenericAPIView, ListModelMixin, CreateModelMixin  
### RetrieveUpdateAPIView 
Đọc và cập nhật mối đối tượng model  
Xử lý phương thức: `get`, `put` và `patch`  
Kế thừa: GeneriAPIView, RetrieveModelMixin, UpdateModelMixin  
### RetrieveDestroyAPIView
Đọc và xóa một đối tượng model  
Xử lý phương thức: `get`, `delete`  
Kế thừa: GenericAPIView, RetrieveModelMixin, DestroyModelMixin  
### RetrieveUpdateDestroyAPIView
Đọc, tạo và xóa một đối tượng model  
xử lý phương thức: `get`, `put`, `patch` và `delete`  
Kế thừa: GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin  


## Django rest_framework_simplejwt
Json Web Token (JWT) là một tiêu chuẩn mở (RFC 7519) xác định một cách nhỏ gọn và khép kín để truyền thông tin an toàn giữa các bên dưới dạng đối tượng JSON.  
Cấu trúc của JWT:  
Gồm 3 phần được tách nhau bởi dấu (.):  
+ Header
+ Payload
+ Signature

Dó đó JWT có dạng như sau: xxxxxx.yyyyyy.zzzzzz  
ví dụ: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTUxODYyNzg1LCJqdGkiOiJiMTcxNjY5MTVhYWQ0NWExOWY0MmE2ZGJhYTViYmE5ZSIsInVzZXJfaWQiOjF9.kz0oXkJYS4HdBfaHUft9JIX04D1K0s6sCqf0zJ0qnpk`  

### Header
Header thường bao gồm hai phần: loại mã thông báo: JWT và thuật toán mã hóa được sử dụng, chẳng hạn như HMAC SHA256 hoặc RSA.  
ví dụ:   
```
{
  "alg": "HS256",
  "typ": "JWT"
}```  
Sau đó chuỗi Json này được mã hóa `Base64` để tạo thành phần header.  

### Payload
Payload chứa các claim, claim là các biểu thức về một thực thể(chẳng hạn user). Có 3 loại claim thường gặp:  
+ Reserved: Đây là một số metadata được định nghĩa trước, trong đó một số metadata là bắt buộc, số còn lại nên tuân theo để JWT hợp lệ và đầy đủ thông tin  
+ Public: Chúng có thể được xác định theo ý muốn của người sử dụng JWT  
+ Private claims: Claim tự định nghĩa không được trùng với Reserved claim và public claim.  
Ví dụ về payload:  
```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```  
Sau đó payload được mã hóa `base64` tạo nên phần thứ 2 của JWT

### Signature
Để tạo `signature` cần phải mã hóa `header` và `payload` và một thuật toán bí mật.

> Ví dụ về jwt trong bài toán xác thực. Trong việc xác thực, khi một user đăng nhập thành công (Browser sẽ post username và password lên server) server sẽ trả về 1 chuỗi JWT về Browser và được lưu trong `localStorage` hoặc `cookies`)  
Bất cứ khi nào User muốn truy cập vào route mà chỉ có user đã đăng nhập mới có phép, browser sẽ gửi token JWT này trong Header Authorization, Bearer schema của request gửi đi.  
`Authorization: Bearer "<token>"`





