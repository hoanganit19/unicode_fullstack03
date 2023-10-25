//API = Application Programming Interface
//-> Giao diện lập trình ứng dụng

/*
1. Back-end với Back-end
2. Front-end với Back-end
3. Thư viện: Sử dụng các hàm
4. Hệ điều hành

Trong web đã số sẽ thiết kế theo chuẩn RESTFul

- URL
- METHOD:
+ GET: Lấy dữ liệu
+ POST: Thêm mới dữ liệu
+ PUT: Sửa dữ liệu (Ghi đè)
+ PATCH: Sửa dữ liệu
+ DELETE: Xóa dữ liệu

- ENDPOINT: URL + METHOD
GET /users => Lấy danh sách users
POST /users => Thêm mới user
*/

// const getUsers = async () => {
//   const response = await fetch(`http://localhost:3000/users`);
//   //   const contentLength = response.headers.get("content-length");
//   //   console.log(contentLength);

//   //Lấy response dưới dạng text
//   //   const data = await response.text();

//   //Lấy response dưới dạng object, array
//   const data = await response.json();
//   console.log(data);
// };

// getUsers();

const app = {
  root: document.querySelector(".posts"),
  sort: document.querySelector(".sorting"),
  query: {},
  render: function (posts) {
    const { _order = "desc" } = this.query;
    this.root.innerHTML = `<div class="row">
    ${posts
      .map(
        ({ title, excerpt, image }) => `<div class="col-6 col-lg-4">
    <div class="post-item">
      <img src="${image}" alt="">
      <h3>${title}</h3>
      <p>
        ${excerpt}
      </p>
    </div>
  </div>`,
      )
      .join("")}
  </div>`;

    this.sort.innerHTML = `<div class="mb-3 btn-group">
  <button class="btn btn-primary btn-sm ${
    _order === "desc" ? "active" : ""
  }" data-sort="desc">Mới nhất</button>
  <button class="btn btn-primary btn-sm ${
    _order === "asc" ? "active" : ""
  }" data-sort="asc">Cũ nhất</button>
</div>`;
  },
  eventSort: function () {
    this.sort.addEventListener("click", (e) => {
      if (e.target.dataset.sort) {
        const order = e.target.dataset.sort;
        this.query._order = order;
        this.fetch();
      }
    });
  },
  fetch: async function () {
    const queryString = new URLSearchParams(this.query).toString();
    const response = await fetch(`http://localhost:3000/posts?${queryString}`);
    const posts = await response.json();
    this.render(posts);
  },
  start: function () {
    Object.assign(this.query, {
      _order: "desc",
      _sort: "id",
    });
    this.fetch();
    this.eventSort();
  },
};

app.start();
