# NodeJs chỉ là môi trường không phải là framework


## Các khái niệm cơ bản trong nodejs

+ Cấu trúc một file chạy như sau:  
```
var http = require("http")

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'Text/plain'})
  res.end('hello world')
}).listen(3000, "127.0.0.1")
```  
+ Ta có thể tích hợp các module.  
Câu lệnh tích hợp `var http = require('http');` trong đó `http` là module có sẵn, trong NodeJS mỗi file được coi là 1 module, các giá trị bên trong nó gồm (class, biến, ...) là private, nên muốn sử dụng được ta phải `export` nó:  
Ví dụ:  
```
module.exports.sayHello = function sayHello() {
  console.log(`Hello World!`);
}
```  
### Filesystem đọc file trong NodeJS
+ Ta phải dùng filesystem module.  
`var fs = require("fs")`  
Gồm các phương thức:  
+ Đọc file 
+ Tạo file 
+ Chỉnh sửa file
+ Xóa file
+ Đổi tên file

#### Đọc file
`fs.readFile()`  
#### Tạo file
`fs.appendFile()`: phương thức này thêm nội dung vào file. Nếu file chưa có, thì file sẽ được tạo mới.  
```
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```  
`fs.writeFile()`: phương thức này thay thế nội dung cũ bằng nội dung mới, nếu file không tồn tại, thì sẽ tạo file mới gồm các nội dung được khai báo trong phương thức.  
```
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```  
#### Update file
`fs.appendFile()`: thêm nội dung mới vào cuối file khác với `fs.writeFile()` là thay thế toàn bộ nội dung cũ  
```
var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
```  
#### Delete file
`fs.unlink()`: dùng phương thức này để xóa file  
```
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
```  
#### Đổi tên file
`fs.rename()`: phương thức này sẽ đổi tên file sang tên mới  
```var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});```  


### Stream

