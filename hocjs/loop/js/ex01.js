/*
Vòng lặp for
*/

for (var i = 1; i <= 10; i += 2) {
  console.log(`Xin chào Unicode ${i}`);
}

for (var i = 10; i >= 1; i--) {
  console.log(`Xin chào Unicode ${i}`);
}

/*
Bài tập 1: Tính tổng biểu thức

total = 1 + 2 + 3 + 4 + ... + N
*/

var n = 10;
var total = 0;
for (var i = 1; i <= n; i++) {
  total += i;
}

console.log(`Total = ${total}`);

/*
Bài tập 2: 

Total = 1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5 +...+ 1*2*3*4*5*..*N
*/

var n = 3;
var total = 0;
var sub = 1;

for (var i = 1; i <= n; i++) {
  sub *= i;
  total += sub;
}

console.log(`Total = ${total}`);

/*
n = 3;
total = 0;
i = 1
=> sub = 1
=> total = total + sub = 1
i = 2
=> sub = sub * i = 1 * 2 = 2
=> total = total + sub = 1 + 2 = 3
i = 3
=> sub = sub * i = 2 * 3 = 6
=> total = total + sub = 3 + 6 = 9
*/
