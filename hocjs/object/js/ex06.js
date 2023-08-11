console.log(Array.prototype);

// Array.prototype.getMessage = function () {
//   console.log(this);
// };

// var users = ["Item 1", "Item 2", "Item 3"];

// console.log(users);
// users.getMessage();

// var numbers = [1, 2, 3, 4];

// numbers.getMessage();

//Bài tập: Viết lại phương thức map()
// var newArr = users.map(function (user) {
//   return `<h3>${user}</h3>`;
// });

// console.log(newArr);

Array.prototype.map2 = function (callback) {
  //Viết phương thức map có cách hoạt động giống map2

  var arr = this;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var result = callback(arr[i], i);
    newArr[newArr.length] = result;
    // console.log(arr[i]);
  }

  return newArr;
};

var users = ["Item 1", "Item 2", "Item 3"];

var newArr = users.map2(function (user) {
  return `<h3>${user}</h3>`;
});

console.log(newArr);

var newArr2 = users.map(function (user) {
  return `<h3>${user}</h3>`;
});

console.log(newArr2);
