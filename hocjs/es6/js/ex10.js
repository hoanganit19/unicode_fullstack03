//1. Async Function: Luôn trả về 1 promise
//2. Await -> Gọi 1 promise trong async function (await tương ứng với then)

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Hello Hoàng An");
//     reject("Something Error");
//   }, 1000);
// });

// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello Hoàng An 2");
//   }, 2000);
// });

// const email = "hoangan.web@gmail.com";

// const something = async () => {
//   //   promise.then((data) => {
//   //     console.log(data);
//   //   });
//   try {
//     const data = await promise;
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("Hoàn thành");
//   }
//   //   const data2 = await promise2;
//   //   console.log(data2);

//   //   const value = await email;
//   //   console.log(value);
// };

// something();

// const getUsers = () => {
//   return new Promise((resolve, reject) => {
//     // resolve(["A", "B", "C"]);
//     reject("Error Fetching Data");
//   });
// };

// const showUser = async () => {
//   try {
//     // const users = getUsers(); //Promise, chưa resolve, reject
//     const users = await getUsers(); //Đã được resolve, reject
//     return users;
//   } catch (e) {
//     console.log(e);
//   }
// };

// showUser().then((data) => {
//   console.log(data);
// });

//Ví dụ:
const hash = (str, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const output = str + Math.random().toString();

      if (output) {
        typeof callback === "function" && callback(output);
        resolve(output);
      } else {
        typeof callback === "function" && callback(null, "Error Hash");
        reject("Error Hash");
      }
    }, 500);
  });
};

hash("hoangan", (data) => {
  console.log(data);
});

const hashSync = async (str) => {
  const output = await hash(str);
  return output;
};

const result = hashSync("hoangan");
