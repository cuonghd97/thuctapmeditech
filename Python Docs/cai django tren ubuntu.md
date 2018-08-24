# Cài Django trên ubuntu 18.04
> Chúng ta sẽ cài Django 2.0 với python 3  
* Kiểm tra phiên bản python  
`python --version`  
* Upgrade lên bản python3  
`update-alternatives --install /usr/bin/python python /usr/bin/python3 1`  
# Cài Django trên python3
> chạy câu lệnh sau để cài pip trên python3  
`sudo apt install python3-pip -y`  
> Sau khi quá trình cài đặt kết thúc ta cài Django 2.0 bằng lệnh sau  
`pip install Django==2.0.5`  
> Chạy câu lệnh sau để kiểm tra phiên bản của django  
`django-admin --version`