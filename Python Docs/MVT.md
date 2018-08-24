> Django sử dụng mô hình MVT bởi vì bản thân framework chính là controller 

![anh](https://manhhomienbienthuy.bitbucket.io/images/MTV.png)
# Model
Model là lớp để truy cập dữ liệu. Đây là nơi chứa mọi thứ liên quan đến dữ liệu: cách thức truy cập DB, validate dữ liệu, các phương thức và hành vi của dữ liệu, mối quan hệ của dữ liệu.
# View
View là nơi chứa các logic. Lớp này chứa các logic để truy cập dữ liệu qua Model và truyền nó ra ngoài cho Template tương ứng. Nó có thể coi là một cầu nối giữ Model và Template.

#Template
Đây là nơi chứa đựng những gì liên quan đến việc hiển thị dữ liệu cho người dùng: dữ liệu được hiển thị trên Web hay dạng thức nào khác.