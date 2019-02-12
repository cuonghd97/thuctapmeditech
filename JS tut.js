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

var mouse1 = new animal('cat', 'yellow', 1);
console.log(mouse1);
