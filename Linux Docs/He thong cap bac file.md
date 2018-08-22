`\` Đó là thư mục cha cho tất cả các thư mục. Nó được gọi là thư mục ROOT. Nó được đại diện bởi ký tự (/) giống như ổ C:\ của Windows.  
`\root` Nó là thư mục chứa người dùng root(super user). Nó cung cấp môi trường làm việc cho người dùng root.  
`\home` Là thư mục chứa cho người dùng khác. Nó cung cấp môi trường làm việc cho các người dùng khác(khác root user).
`\boot` Nó bao gồm các file cho quá trình khởi động cho Linux. Như là vnlinuz(kernel)...ntoskrnl Initrd(INITial Ram Disk) và GRUB (GRand Unified Boot Loader)... boot.ini, ntldr.  
`\etc` Nó chứa tất cả các file config như /etc/passwd - Thông tin người dùng. /etc/resolv.conf - DNS ưu tiên. /etc/hdcpd.conf - DHCP Server.  
`\usr` Các phần mềm được đặt trong thư mục này.  
`\opt` Thư mục tùy chọn chu `\usr`. Nó chứa các phần mềm từ bên tứ 3.  
`\bin` Nó chứa tất cả các câu lệnh được sử dụng bởi tất cả các người dùng (file nhị phân).  
`\sbin` Nó chứa các câu lệnh được sử dụng bởi Super user.  
`\dev` Nó gồm các file về thiết bị như /dev/had - cho ổ cứng, /dev/cd rom - cho ổ đĩa cd.  
`\proc` Nó bao gồm các file được xứ lý. nội dung của nó luôn thay đổi. Do đó nó được gọi là bộ nhớ ảo (Virtual Directory). Bản thân file này gồm các thông tin được sử dụng bởi OS. /proc/meminfo - Thông tin của RAM/SWAP. /proc/cpuinfo - Thông tin của CPU. /var - bao gồm các biến dữ liệu như mail, file log.  
`\mnt` Là điểm gắn kết mặc định cho bất cứ phân vùng nào. Mặc định của nó là rỗng.  
`\media` Nó gồm các thiết bị CD-ROM, pen drive.  
`\lib` Nó gồm các file thư viện được sử dụng bởi hệ điều hành.