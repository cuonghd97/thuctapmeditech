# Cách cài đặt Ubuntu Server 14.04 64bit lên VMWare workstation
### Mục lục
[**1. Giới thiệu về Ubuntu.**](#phan1)  
[**2. Cách cài đặt Ubuntu Server 14.04 trên VMWare.**](#phan2)
#
1. <a id="phan1">**Giới thiệu về Ubuntu**</a>
* Ubuntu là một trong những distro của Linux. Mã nguồn của Ubuntu bắt đầu từ bản phân phối cũ hơn của Linux, được gọi là Debian. 
* Ubuntu là một hệ điều hành miễn phí và mã nguồn mở. Ubuntu cung cấp 3 phiên bản chính thức: Ubuntu Desktop cho máy tính cá nhân, Ubuntu server dành cho các máy chủ và cloud, Ubuntu-core dành cho các thiết bị Iot và Robot. 
* Ubuntu phát hành các phiên bản mới sau mỗi 6 tháng. Trong khi các bản hỗ trợ dài hạn (Long Term Service - LST) được phát hành 2 năm một lần.
2. <a id="phan2">**Cách cài đặt Ubuntu Server 14.04 trên VMWare.**</a>
> Cấu hình tối thiểu:  
![Cau hinh](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/RQ.png)

> Các bước cài đặt.  

Bước 1: Chọn ngôn ngữ cho Ubuntu Server.  
![Bước 1](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%201.png)  
Bước 2: Chọn `Install Ubuntu Server`
![Bước 2](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%202.png)  
Bước 3: Chọn ngôn ngữ cài đặt.  
![Bước 3](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%203.png)  
Bước 4: Chọn timezone và khu vực.  
![Bước 4](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%204.png)  
Bước 5: Chọn `No` nếu không muốn dò bàn phím và tiến hành chọn kiểu bàn phím thủ công.  
![Bước 5](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%205.png)  
![Bước 5](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%206.png)  
![Bước 5](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%207.png)  
Bước 6: DHCP báo không thể cấp địa chỉ IP động, lúc này phải chọn cấu hình bằng tay. `Chọn Configure network manually`.
![Bước 6](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%208.png)
![Bước 6](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%209.png)  
Bước 7: Cấu hình địa chỉ IP, netmask, gateway, name server(có thể để trống), hostname, domain name(có thể để trống).
![Bước 7](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2010.png)
![Bước 7](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2011.png)
![Bước 7](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2012.png)
![Bước 7](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2013.png)
![Bước 7](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2014.png)  
Bước 8: Tạo username và password.
![Bước 8](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2015.png)
![Bước 8](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2016.png)
![Bước 8](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2017.png)
![Bước 8](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2018.png)
Bước 9: Server hỏi xem liệu người dùng có muốn mã hóa thư mục home không. Chọn `No` nếu không muốn.
![Bước 9](https://cloud.githubusercontent.com/assets/18635054/14889789/6dbd0c08-0d8a-11e6-980b-7bfa015a4593.png)  
Bước 10: Phân vùng ổ cứng cho Ubuntu

* Có 4 sự lựa chọn cho người dùng

    * Guided - use entire disk: Tự động phân vùng ổ cứng. Dùng khi ổ cứng chưa từng được phân vùng, lúc này máy sẽ tự động format lại toàn bộ ổ cứng và tự động định dạng cho từng vùng đã chia.(không dùng khi máy đang có dữ liệu).
    * Guided - use entire disk and with set up LVM: Tự động phân vùng bằng LVM. Logical Volume Manager (LVM): là phương pháp cho phép ấn định không gian đĩa cứng thành những logical Volume khiến cho việc thay đổi kích thước trở nên dễ dàng hơn (so với partition). Với kỹ thuật Logical Volume Manager (LVM) bạn có thể thay đổi kích thước mà không cần phải sửa lại table của OS. Điều này thật hữu ích với những trường hợp bạn đã sử dụng hết phần bộ nhớ còn trống của partition và muốn mở rộng dung lượng của nó
    * Guided - use entire disk and with set encrypted up LVM`: Tự động phân vùng ổ cứng với LVM đồng thời cài đặt mã hóa ổ cứng để tăng tính bảo mật. Máy sẽ yêu cầu người sử dụng khởi tạo khóa mật khẩu sử dụng để mã hóa ổ cứng khi đăng nhập vào Ubuntu.
    * Manual: Phân vùng thủ công. Người sử dụng sẽ phân vùng và định dạng ổ cứng bằng tay(sử dụng khi người dùng đã tạo ra phân vùng trước đó).
* Nếu bạn muốn phân vùng thủ công, hãy chia ra hai phân vùng chính

* Phân vùng đầu tiên có định dạng ext4, thư mục root dùng để chứa dữ liệu và hệ điều hành
* Phân vùng thứ 2 khoảng 1,1 GB có định dạng swap dùng làm Ram ảo cho hệ điều hành
* Ở đây tôi chọn phân vùng tự động với LVM.  
![Bước 10](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2021.png)  
![Bước 10](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2022.png)
![Bước 10](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2023.png)  
Bước 12: Cấu hình HTTP Proxy Server.
* Điền vào proxy, nếu không có thì để trống.  
![Bước 12](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2024.png)  
Bước 13: Cấu hình cập nhật.  
* Có 3 sự lựa chọn:
    * `No Automatic Update`: Không tự động cập nhật.
    * `Install security updates automatically`: Tự động cập nhật.
    * `Manage system with Landscape`: Quản lý từ xa.
* Tùy vào người sử dụng, ở đây tôi chọn "Không cho phép tự động cập nhật".
![Bước 13](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2025.png)  
Bước 14: Cấu hình cài đặt các phần mềm hỗ trợ
* Ấn `Space` để chọn phần mềm bạn muốn cài thêm, ở đây tôi chọn cài thêm `OpenSSH Server` để có thể SSH từ xa.  
![Bước 14](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2026.png)  
Bước 15: Cài đặt boot loader (GRUB) trên ổ đĩa.
![Bước 15](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2027.png)  
GRUB (Grand Unified Bootloader) là một Boot loader đa dụng. Nó cho phép bạn Boot vào nhiều hệ điều hành trên cùng một Boot Drive. Cho nên bạn có thể cài đặt và sử dụng nhiều hệ điều hành trên cùng một ổ đĩa cứng. GRUB được sử dụng rộng rãi trên rất nhiều hệ thống UNIX.  
Bước 16: Kết thúc cài đặt và chọn Continue để reboot lại máy.  
![Bước 16](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2028.png)  

**Cách chuyển sang tài khoản root**

Sau khi reboot lại máy, các bạn đăng nhập bằng bằng tài khoản đã tạo ở bước 8.  
![IMG1](https://raw.github.com/cuonghd97/thuctapmeditech/master/Images/Install%20Ubunu%20SV%2014/Image%2029.png)