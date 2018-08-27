1. Ta cài địa chỉ ip cho `VMware Network Adapter VMnet8` trong `Control Panel/Network Adapter` tại đây mình đặt địa chỉ ip như sau  
![Ảnh1](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%201.png)  
2. Sau đó ta chia sẻ kết nối internet cho mạng ảo VMnet8 bằng cách sau và restart máy tính  
![Ảnh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Untitled.png)  
3. Sau đó mở phần mềm máy sao VMWare và cài địa chỉ Subnet ip đúng với địa chỉ bạn đang cài  
![Ảnh2](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%202.png)  
![ảnh3](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%203.png)  
4. Sau đó khởi động Ubuntu Server lên và chạy lệnh `sudo nano /etc/network/interfaces` và sửa như sau và khởi động lại ubuntu  
![Ảnh4](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%204.png)  
Sau khi quá trình hoàn tất ta kiểm tra lại bằng cách ping đến địa chỉ ip của máy ảo trên máy thật ta được  
![Ảnh5](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%205.png)  
> Lưu ý: địa chỉ ip bạn có thể đặt theo ý muốn của mình!!!
