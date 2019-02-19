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





