//Javascript Chaining -> Viết dưới dạng chuỗi
//object.method1().method2().method3()

//ES6 -> Promise: Object xử lý các tiến trình bất đồng bộ

/*
Promise State: 
- pending -> Chờ xử lý
- fulfilled -> Xử lý thành công
- reject -> Xử lý thất bại
*/

// const getUsers = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hoàng An"); //fulfilled
//       //Khi dữ liệu bị lỗi -> Muốn trả về lỗi -> gọi reject
//       //reject("Lỗi mạng");
//     }, 2000);
//   });
// };

// getUsers()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Hello Hoàn thành");
//   });

/*
Hàm resolve và reject chỉ chạy 1 trong 2: Nếu đã gọi resolve thì reject không chạy và ngược lại

Hàm then và catch chỉ chạy 1 trong 2

finally -> Luôn chạy sau khi kết thúc
*/

const download1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Download 1");
      reject("Error 1");
    }, 1000);
  });

const download2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Download 2");
    }, 500);
  });

const download3 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Download 3");
    }, 1000);
  });

// download1()
//   .then((data) => {
//     console.log(data);
//     return download2();
//   })
//   .catch((error) => {
//     console.log(error);
//     return download2();
//   })
//   .then((data) => {
//     console.log(data);
//     return download3();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//Promise Chaining

const getUsers = (userId) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 5000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 6000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 7000,
    },
    {
      id: 4,
      name: "User 4",
      salary: 8000,
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.find(({ id }) => id === userId));
    }, 1000);
  });
};

const lists = [1, 3, 4];
// const getSalary = () => {
//   let salary = 0;
//   for (let index in lists) {
//     const promise = getUsers(+lists[index]).then((data) => {
//       salary += data.salary;
//       //   return new Promise((resolve) => {
//       //     resolve(salary);
//       //   });
//       return Promise.resolve(salary);
//     });
//     if (+index === lists.length - 1) {
//       return promise;
//     }
//   }
// };

// getSalary().then((salary) => {
//   console.log(salary);
// });

//Tìm hiểu: Promise.all()
//Async Await

const promises = lists.map((id) => getUsers(id));
Promise.all(promises).then((users) => {
  const salary = users.reduce((total, { salary }) => total + salary, 0);
  console.log(salary);
});
