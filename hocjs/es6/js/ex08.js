//Bất đồng bộ
// console.log("Bước 1");
// console.log("Bước 2");
// alert(1);
// console.log("Bước 3");
// -> Đồng bộ: Chạy lần lượt từ trên xuống dưới, từ trái qua phải
// -> Tiến trình nào chưa xong thì sẽ đợi

//Bất đồng bộ
// const downloadImage = (callback) => {
//   setTimeout(() => {
//     console.log("Downloaded");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };

// const showImage = () => {
//   console.log("Show Image");
// };

// downloadImage(showImage);

// const download1 = (callback) => {
//   setTimeout(() => {
//     console.log("Download 1");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };

// const download2 = (callback) => {
//   setTimeout(() => {
//     console.log("Download 2");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 500);
// };

// const download3 = (callback) => {
//   setTimeout(() => {
//     console.log("Download 3");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 2000);
// };

// const download4 = () => {
//   setTimeout(() => {
//     console.log("Download 4");
//   }, 500);
// };

//Gọi download1, download2, download3
// download1(() => {
//   download2(() => {
//     download3(() => {
//       download4();
//     });
//   });
// });
