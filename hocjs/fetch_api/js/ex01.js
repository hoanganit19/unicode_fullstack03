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
  filter: document.querySelector(".filter"),
  paginate: document.querySelector(".paginate"),
  modal: document.querySelector("#modal-detail"),
  query: {},
  render: function (posts) {
    const { _order = "desc" } = this.query;
    this.root.innerHTML = `<div class="row g-3">
    ${posts
      .map(
        ({ id, title, excerpt, image }) => `<div class="col-6 col-lg-4">
    <div class="post-item">
      <img src="${image}" alt="">
      <h3>${title}</h3>
      <p>
        ${excerpt}
      </p>
      <button class="btn btn-primary btn-sm js-click" data-bs-toggle="modal" data-bs-target="#modal-detail" data-id="${id}">Chi tiết</button>
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

    this.filter.innerHTML = `<form class="mb-3 form">
    <input type="search" class="form-control" placeholder="Từ khóa tìm kiếm..." value="${
      this.query.q ?? ""
    }"/>
  </form>`;
  },
  renderPaginate: function (totalPage) {
    this.paginate.innerHTML = `<ul class="pagination justify-content-end pagination-sm">
    ${
      this.query._page > 1
        ? `<li class="page-item"><a class="page-link page-prev" href="#">Trước</a></li>`
        : ""
    }
    ${[...Array(totalPage).keys()]
      .map(
        (index) =>
          `<li class="page-item ${
            this.query._page === +index + 1 ? "active" : ""
          }"><a class="page-link page-number" href="#">${index + 1}</a></li>`,
      )
      .join("")}
  
      ${
        this.query._page < totalPage
          ? `<li class="page-item"><a class="page-link page-next" href="#">Sau</a></li>`
          : ""
      }
  </ul>`;
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
  eventFilter: function () {
    this.filter.addEventListener("submit", (e) => {
      if (e.target.classList.contains("form")) {
        e.preventDefault(); //Ngăn load lại trang khi submit

        const keyword = e.target.querySelector("input").value;
        this.query.q = keyword;
        this.fetch();
      }
    });
  },
  eventPaginate: function () {
    this.paginate.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("page-number")) {
        const page = e.target.innerText;
        this.query._page = +page;
      }

      if (e.target.classList.contains("page-next")) {
        this.query._page++;
      }

      if (e.target.classList.contains("page-prev")) {
        this.query._page--;
      }

      this.fetch();
    });
  },
  eventDetail: function () {
    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("js-click")) {
        e.preventDefault();
        const postId = e.target.dataset.id;
        this.fetchDetail(postId);
      }
    });
  },
  eventModal: function () {
    this.modal.addEventListener("hidden.bs.modal", () => {
      const modalTitle = this.modal.querySelector(".modal-title");
      const modalContent = this.modal.querySelector(".modal-body");
      modalTitle.innerText = "";
      modalContent.innerText = "";
    });
  },
  fetch: async function () {
    const queryString = new URLSearchParams(this.query).toString();
    const response = await fetch(`http://localhost:3000/posts?${queryString}`);
    const posts = await response.json();
    this.render(posts);

    //Tính tổng số trang
    const totalPosts = response.headers.get("x-total-count");
    const totalPage = Math.ceil(totalPosts / 3);
    this.renderPaginate(totalPage);

    window.scroll({
      top: 0,
    });
  },
  fetchDetail: async function (postId) {
    const response = await fetch(`http://localhost:3000/posts/${postId}`);

    if (response.ok) {
      const { title, content } = await response.json();
      const modalTitle = this.modal.querySelector(".modal-title");
      const modalContent = this.modal.querySelector(".modal-body");
      modalTitle.innerText = title;
      modalContent.innerHTML = content;
    }
  },
  start: function () {
    Object.assign(this.query, {
      _order: "desc",
      _sort: "id",
      _limit: 3,
      _page: 1,
    });
    this.fetch();
    this.eventSort();
    this.eventFilter();
    this.eventPaginate();
    this.eventDetail();
    this.eventModal();
  },
};

app.start();
