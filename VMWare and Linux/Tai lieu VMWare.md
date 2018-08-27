## 1. Tổng quan về VMWare
VMWare Workstation Pro - là phần mềm giả lập hệ điều hành,phần mềm ảo hóa mạnh nhất thế giới hiện nay. Cho phép người dùng có thể giả lập được nhiều hệ điều hành khác nhau, rất thân thiện, dễ sử dụng, có thể cài nhiều hệ điều hành trên cùng một phần mềm máy ảo như: Windows xp/7/8/8.1/10,Server và cả hệ điều hành họ UNIX: Kali, Centos, Ubuntu,...  
Giao diện chính của phần mềm  
![ảnh6](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%206.png)  
## 2. Cách cài một hệ điều hành trên VMWare
Bước 1: Chọn `File` - `New Virtual Machine` hoặc tổ hợp `Ctrl + N` để tạo máy ảo  
![Ảnh7](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%207.png)  
Có 2 lựa chọn cho bạn: 
* `Typical` cài theo những tùy chọn mặc định.
* `Custom` cài theo ý muốn của người dùng.
Tại đây tôi chọn `Custom` rồi `Next`  
Bước 2: Ta chọn phiên bản VMWare phù hợp, tại đây tôi chọn VMWare 14 > `Next`  
![Ảnh8](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%208.png)  
Bước 3:    
![Ảnh9](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%209.png)
Có 3 lựa chọn cho bạn:  
* `Installer disc` cài từ ổ đĩa CD/DVD  
* `Installer disc image file (iso)` cài bằng file iso trong máy  
* `I will install the operating system later` máy sẽ tạo một ổ đĩa trống và cài máy ảo sau khi việc cấu hình kết thúc.
Bước 4:  
![Ảnh10](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%2010.png)  
Ta đặt tên cho máy ảo và nơi lưu máy ảo ở đây  
Bước 5:  
![Ảnh11](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%2011.png)  
Ta đặt số lõi xử lý và luồng xử lý tại đây.  
Bước 6:  
![Ảnh12](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%2012.png)  
Ta chọn dung lượng RAM tại đây.  
Bước 7:  
![Ảnh13](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%2013.png)  
`Use bridged networking` Card này sẽ sử dụng chính card mạng thật của máy để kết nối ra ngoài internet(card ethernet hoặc wireless). Do đó khi sử dụng card mạng này IP của máy ảo sẽ cùng với dải IP của máy thật. Lưu ý: Card Bridge trên máy ảo chỉ có thể giao tiếp với card mạng thật trên máy thật.  
`Use network address translation (NAT)` Card này sẽ Nat địa chỉ IP của máy thật ra một địa chỉ khác cho máy ảo sử dụng.
    * Card NAT chỉ có thể giao tiếp với card mạng ảo VMnet8 trên máy thật.
    * Card NAT chỉ có thể giao tiếp với các card NAT trên các máy ảo khác.
    * Card NAT không thể giao tiếp với mạng vật lý mà máy tính thật đang kết nối.  

Tuy nhiên nhờ cơ chế NAT được tích hợp trong VMWare, máy tính ảo có thể gián tiếp liên lạc với mạng vật lý bên ngoài.
`Use host-only networking` 
    * Card Host-only chỉ có thể giao tiếp với card mạng ảo VMnet1 trên máy thật.
    * Card Host-only chỉ có thể giao tiếp với các card Host-only trên các máy ảo khác.
    * Card Host-only không thể giao tiếp với mạng vật lý mà máy tính thật đang kết nối.  

`Do not use a network connection` không lựa chọn cài đặt mạng.  
Bước 8:  
![ảnh14](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%2014.png)  
Ở đây có 3 tùy chọn là BusLogic (không khả dụng ở những phiên bản hệ điều hành 64bit), LSI Logic và LSI Logic SAS. Mặc định VMWare sẽ lựa chọn LSI Logic do nó được support rộng rãi hơn ở các phiên bản hệ điều hành. Ở đây tôi để mặc định.  
Bước 9:  
![Ảnh15](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%2015.png)  
Ở đây có 3 lựa chọn: IDE, SCSI và SATA. Thực tế cho thấy rằng sự khác biệt giữa chúng không quá lớn do những giới hạn của máy thật. VMWare mặc định chọn SCSI bởi nó được cho là có hiệu năng tốt hơn. Ở đây tôi để mặc định.  
Bước 10:  
![ảnh16](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%2016.png)  
Tại đây có 3 lựa chọn:
* Create a new virtual disk: Tạo mới một ổ đĩa ảo.
* Use an existing virtual disk: Dùng lại ổ đĩa ảo đã được tạo.
* Use a physical disk: Cho phép máy ảo truy cập vào ổ đĩa thật.  

Bước 11:  
![ảnh17](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%2017.png)  
Tại đây người dùng có thể lựa chọn dung lượng tối đa cho ổ cứng. VMWare cũng cho bạn lựa chọn sử dụng tất cả những dung lượng trống (Allocate all disk space now). Ngoài ra, bạn cũng có 2 tùy chọn đó là lưu ổ cứng thành 1 file (Store a virtual disk as a single file) hoặc nhiều file (Split virtual disk into multiple file). Tại đây tôi chọn dung lượng là 20GB và phân chia ổ cứng thành nhiều file.  
Bước 12:  
![ảnh18](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%2018.png)  
Chọn nơi lưu  
Bước 13:  
![ảnh19](https://raw.githubusercontent.com/cuonghd97/thuctapmeditech/master/VMWare%20and%20Linux/Images/Image%2019.png)  
Chọn `Finish` để hoàn tất quá trình cấu hình.
