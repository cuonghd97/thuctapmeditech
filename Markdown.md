# Markdown là gì?
>Markdown là một ngôn ngữ đánh dấu với cú pháp văn bản thô (plant-text), được thiết kế để có thể dễ dàng chuyển thành HTML và nhiều định dạng khác sử dụng một công cụ cùng tên.
>Trên [github](https://github.com/) thì Markdown được sử dụng làm ngôn ngũ chuẩn để viết các tập tin README, viết wiki cho các dự án mã nguồn mở trên github. Họ cũng dùng Markdown trên các ô comment , gần như bất kỳ chỗ nào viết được một đoạn văn trên github thì cũng có thể viết bằng Markdown.
# Cú pháp các thẻ trong Markdown
1. Chữ in và đậm.
>Để làm một câu hay một từ _in nghiêng_ trong Markdown ta viết theo cú pháp _ ví dụ in nghiêng _  
>Ví dụ: _Hello world_  
>Để viết đậm một câu hay một từ ta làm theo cú pháp ** Hello world **.  
>Ví dụ: **Hello world**
2. Các tiêu đề.
>Có 6 loại tiêu đề theo kích thước nhỏ dần như sau:
# Tiêu Đề 1
## Tiêu Đề 2
### Tiêu Đề 3
#### Tiêu Đề 4
##### Tiêu Đề 5
###### Tiêu Đề 6
>Để tạo tiêu đề trong Markdown ta dùng ký tự (#). Bạn đặt cùng một số dấu (#) như kích thước của tiêu đề bạn muốn.  
>Ví dụ: Đối với thẻ h1, chỉ cần dùng 1 dấu (#).
3. Links
>Có 2 loại link trong Markdown, nhưng cả 2 đều đưa ra một cách chính xác.  
>Loại 1 là _inline link_  
>Ta có văn bản liên kết trong cặp ngoặc ([ ]), và link trong cặp ngoặc (( )).  
>Cú pháp như sau: [github] (https://github.com)
>ví dụ: [github](https://github.com)
>Loại 2 là _reference link_: liên kết tham chiếu đến một vị trí khác trong tài liệu.  
>Cú pháp như sau:  
    > [Github][another place].  
    > [another place]: www.github.com  
4. Images
> Cú pháp của ảnh cũng giống link. Sự khác nhau giữa cú pháp giữa ảnh và link là có dấu (!) mở đầu.  
> Cú pháp của ảnh như sau: ! [Benjamin Bannekat] (https://octodex.github.com/images/bannekat.png)
5. Blockquotes
> Blockquote là một câu hoặc đoạn được định dạng đặc biệt để thu hút sự chú ý đến người đọc.
> Để tạo block quote, bạn cần bắt đầu bằng dấu (>).  
> Ví dụ: > I read this interesting quote the other day
6. Lists
> Để tạo danh sách không có thứ tự. Mở đầu mỗi dòng bằng dấu (*)
> Ví dụ danh sách không có thứ tự:
* Milk
* Eggs
* Salmon
* Butter
> Danh sách không có thứ tự bắt đầu bằng số:
> Ví dụ:
> 1. Milk
> 2. Eggs
> 3. Orange.
7. Paragraphs
> Markdown chỉ hiện thị văn bản trên một dòng. Để xuống dòng ta phải chèn hai dấu cách sau mỗi dòng mới.  
Ví dụ:  
Do I contradict myself?··  
Very well then I contradict myself,··  
(I am large, I contain multitudes.)
Mỗi dấu (.) tương ứng với 1 dấu cách