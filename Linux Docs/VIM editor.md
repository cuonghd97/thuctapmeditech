VIM có 3 chế độ  

1. Command mode  

| Lệnh     | Mô tả                                        |
|----------|----------------------------------------------|
| gg       | Lên đầu trang                                |
| G        | Xuống cuối trang                             |
| w        | Chuyển con trỏ tới trước từng từ một         |
| b        | Chuyển con trỏ ra phía sau từng từ một       |
| nw       | Chuyển con trỏ về phía trước n từ (ví dụ 3w) |
| nb       | Chuyển con trỏ về phía sau n từ (ví dụ 3b)   |
| u        | Hoàn tác thay đổi cuối cùng (từ)             |
| U        | Hoàn tác thay đổi ngay trước đó (cả câu)     |
| Ctrl + R | Redo các thay đổi                            |
| yy       | copy một dòng                                |
| nyy      | copy n dòng (ví dụ: 3yy)                     |
| p        | paste phía dưới vị trí con trỏ               |
| P        | paste phía trên vị trí con trỏ               |
| dw       | xóa một từ (giống backspace)                 |
| x        | xóa một từ (giống delete)                    |
| dd       | xóa cả một dòng                              |
| ndd      | xóa n dòng (ví dụ: 3dd)                      |
| /        | tìm một từ                                   |
2. Insert mode  

| Lệnh | Mô tả                                  |
|------|----------------------------------------|
| i    | bắt đầu insert mode tại vị trí con trỏ |
| I    | bắt đầu insert mode tại đầu dòng       |
| a    | thêm vào cuối của từ tiếp theo         |
| A    | thêm vào cuối của câu                  |
| o    | thêm một dòng vào dưới con trỏ         |
| O    | thêm một dòng phía trên con trỏ        |
3. extented command mode  

| Lệnh       | Mô tả                                             |
|------------|---------------------------------------------------|
| esc + :w   | Lưu                                               |
| esc + :q   | Thoát mà không lưu                                |
| esc + :wq  | Lưu và thoát                                      |
| esc + :w!  | Lưu đối với file chỉ đọc (readonly file)          |
| esc + :wq! | Lưu và thoát đối với file chỉ đọc (readonly file) |
| esc + :x   | Lưu và thoát                                      |
| esc + :X   | Đặt mật khẩu hoặc gỡ mật khẩu cho file.           |
| esc + :n   | tới dòng thứ n                                    |