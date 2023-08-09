// var users = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     return this.name;
//   },
//   getEmail: function () {
//     return this.email;
//   },
//   getInfo: function () {
//     return `
//     Name: ${this.getName()}
//     Email: ${this.getName()}
//     `;
//   },
// };

// console.log(users.getName());
// console.log(users.getEmail());
// console.log(users.getInfo());

var products = [
  {
    name: "Sản phẩm 1",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        dolore et quod reprehenderit, debitis, eligendi nemo possimus tenetur
        error autem corporis quasi eaque quis eius commodi officia molestias
        nulla nihil!`,
  },
  {
    name: "Sản phẩm 2",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        dolore et quod reprehenderit, debitis, eligendi nemo possimus tenetur
        error autem corporis quasi eaque quis eius commodi officia molestias
        nulla nihil!`,
  },
  {
    name: "Sản phẩm 3",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        dolore et quod reprehenderit, debitis, eligendi nemo possimus tenetur
        error autem corporis quasi eaque quis eius commodi officia molestias
        nulla nihil!`,
  },
];
console.log(products);

//Hiển thị mảng trên ra giao diện giống như hình

var getProductHtml = function (name, content) {
  return `<div class="product">
    <h2>${name}</h2>
    <p>
      ${content}
    </p>
  </div>`;
};

var result = products.map(function (product) {
  return getProductHtml(product.name, product.content);
});

var productHtml = result.join("");

document.write(`<div class="products">${productHtml}</div>`);

//Object lồng nhau
var users = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  jobs: {
    name: "Giảng viên",
    salary: 5000000,
    histories: [
      "Giảng viên phi thương mại",
      "Giảng viên thương mại",
      "Tư vấn dự án",
    ],
  },
};

console.log(users);
// console.log(users.name);
// console.log(users.email);

console.log(users.jobs.name);
console.log(users.jobs.salary);
users.jobs.histories.forEach(function (history) {
  console.log(history);
});
