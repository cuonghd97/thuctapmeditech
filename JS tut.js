// array map
// Duyệt từng phần tử trong mảng, clone từng phần tử, chỉnh sửa phần tử đó và cuối cùng đưa ra 1 mảng mới
var a = [1, 2, 3];
var squaredNumber = a.map(item => item * item);
console.log(squaredNumber);

console.log("-----------------------------------");

var rectangle = [
  { width: 10, height: 5 },
  { width: 20, height: 3 },
  { width: 4, height: 5 }
];

var dt = rectangle.map(item => (item.width + item.height) * 2);
console.log(dt);
console.log("-----------------------------------");

// array filter
// Lọc ra các phần tử thỏa mãn (function trả về true)
var numbers = [1, 2, 3, 4];
var ft = numbers.filter(item => item % 2 === 0);
console.log(ft);
console.log("-----------------------------------");

// array find
// Tìm ra phần tử đầu tiên thỏa mãn và dừng
var numbers = [1, 2, 3, 4];
var fnd = numbers.find(item => item === 3);
console.log(fnd);
console.log("-----------------------------------");

// array reduce
var number = [1, 2, 3, 4];
var sum = number.reduce((a, b) => {
  console.log(a, " ", b);
  return a + b;
});
console.log(sum);
var order = [
  { name: "A", quantity: 2, unitprice: 200 },
  { name: "B", quantity: 1, unitprice: 400 },
  { name: "C", quantity: 4, unitprice: 300 },
  { name: "D", quantity: 3, unitprice: 100 }
];

var pay = order.reduce((sum, item) => sum + item.quantity * item.unitprice, 0);
console.log(pay);

var name = ["Hoang", "Duc", "Cuong"];
var result = name.reduce((str, item) => str + "<" + item + ">", "");
console.log(result);

console.log("-----------------------------------");

// for..of dùng để lặp các phần tử trong mảng
var testForOf = [
  { name: "a", age: 1 },
  { name: "b", age: 2 },
  { name: "c", age: 3 }
];
for (var item of testForOf) {
  console.log(item);
}
console.log("-----------------------------------");
// for..in dùng để duyệt các key trong 1 object
var testForIn = {
  name: "cuong",
  age: 10,
  height: 165
};

for (var key in testForIn) {
  console.log(key + ": " + testForIn[key]);
}
console.log("-----------------------------------");

// for..of duyệt qua các phần tử của mảng, for..in duyệt các key trong object, nếu dùng for..in để duyệt mảng thì vòng lặp sẽ duyệt các chỉ số của mảng

// Sort array
// array.sort((a, b) => {}) -> trả về mảng được sắp xếp

// nếu sort function:
//   + trả về giá trị < 0 -> a sẽ đứng trước b
//   + trả về giá trị > 0 -> a sẽ sau trước b
//   + trả về giá trị = 0 -> vị trí của a và b không thay đổi

var number = [1, 5, 8, 2, 9, 3, 2, 1];

var ascending = number.sort((a, b) => a - b);
console.log(ascending);

var descending = number.sort((a, b) => b - a);
console.log(descending);

console.log("-----------------------------------");

// constructor function
class animal {
  constructor(type, color, weight) {
    this.type = type;
    this.color = color;
    this.weight = weight;
  }
}

var mouse1 = new animal("cat", "yellow", 1);
console.log(mouse1);

console.log("-----------------------------------");

// Node module system
function Mouse(color) {
  this.color = color;
  this.isDead = false;
}

Mouse.prototype.die = function() {
  this.isDead = true;
};

function Cat() {
  this.stomatch = [];
}

Cat.prototype.eat = function(mouse) {
  this.stomatch.push(mouse);
  mouse.die();
};

var mouse1 = new Mouse("black");
var mouse2 = new Mouse("yellow");

console.log(mouse1);
console.log(mouse2);

var cat = new Cat();
cat.eat(mouse1);

console.log(cat);

console.log(mouse1);

// ở ví dụ trên ta có thể chuyển đối tượng mouse và prototype của Mouse sang một file .js khác
// Export module Mouse để sử dụng ta viết module.exports = <tên module> ở cuối file mới
// Để sử dụng đươc module mouse ở file khác ta viết như sau: var mouse = module.require('đường dẫn đến module') và ta có thể sử dụng đối tượng Mouse

console.log("-----------------------------------");

// Sync và Async
// Sync (đồng bộ) các hàm sẽ được chạy lần lượt
// Async (bất đồng bộ)
// Callback hell
// function main(){
// thuc_day(function(){
// danh_rang(function(){
// di_an_sang(function(){
// console.log('OMG!!!!');
// });
// });
// });
// }

// Đây là ví dụ "nhỏ" về callback hell
// Để giảm bớt callback hell ta có thể dùng promise

// Async await

const axios = require("axios");

// 1.
async function fetchUrls(urls) {
  const results = [];
  for (const url of urls) {
    const res = await axios.get(url);
    results.push(res);
  }
  return results;
}

// 2.
async function fetchUrlsParallel(urls) {
  const results = await Promise.all(
    urls.map(function(url) {
      return axios.get(url);
    })
  );
  return results;
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3"
];

fetchUrls(urls).then(() => console.log("Done"));
fetchUrlsParallel(urls).then(() => console.log("Done 2"));


// Sau khi chạy 2 hàm kết quả thu được là hàm số 2 chạy nhanh hơn vì việc get dữ liệu được thực hiện cùng một lúc(bất đồng bộ) còn ở hàm số 1 việc get url được thực hiện lần lượt từng url nên chậm hơn

// -------------------------------------
