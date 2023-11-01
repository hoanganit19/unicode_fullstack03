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
      <button class="btn btn-warning btn-sm js-update" data-id="${id}" data-bs-toggle="modal" data-bs-target="#modal-detail">Sửa</button>
      <button class="btn btn-danger btn-sm js-delete" data-id="${id}">Xóa</button>  
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
  eventAdd: function () {
    this.showForm();
    this.modal.addEventListener("submit", (e) => {
      if (e.target.classList.contains("form-add")) {
        e.preventDefault();
        const [titleEl, excerptEl, contentEl, imageEl] = e.target;
        const title = titleEl.value;
        const excerpt = excerptEl.value;
        const content = contentEl.value;
        const image = imageEl.value;
        //Xử lý thêm vào Server
        this.addPost({ title, excerpt, content, image });

        //Đóng modal
        this.modal.querySelector('[data-bs-dismiss="modal"]').click();
      }
    });
  },
  eventDelete: function () {
    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("js-delete")) {
        if (confirm("Bạn có chắc chắn?")) {
          const postId = e.target.dataset.id;
          console.log(postId);

          this.deletePost(postId);
        }
      }
    });
  },
  eventUpdate: function () {
    this.root.addEventListener("click", async (e) => {
      if (e.target.classList.contains("js-update")) {
        e.preventDefault();
        const postId = e.target.dataset.id;
        const post = await this.fetchDetail(postId, false);
        this.showForm(post);

        this.modal.addEventListener("submit", (e) => {
          if (e.target.classList.contains("form-update")) {
            e.preventDefault();
            const [titleEl, excerptEl, contentEl, imageEl] = e.target;
            const title = titleEl.value;
            const excerpt = excerptEl.value;
            const content = contentEl.value;
            const image = imageEl.value;
            //Xử lý thêm vào Server

            this.updatePost(
              {
                title,
                excerpt,
                content,
                image,
              },
              postId,
            ),
              postId;
            //Đóng modal
            this.modal.querySelector('[data-bs-dismiss="modal"]').click();
          }
        });
      }
    });
  },
  deletePost: async function (postId) {
    //Xử lý xóa -> Gọi API: DELETE /posts/postId
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      this.query._page = 1;
      this.fetch();
      this.showMessage("Xóa bài viết thành công");
    }
  },
  addPost: async function (data) {
    const response = await fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      this.query._page = 1;
      this.fetch();
      this.showMessage("Thêm bài viết thành công");
    }
  },
  updatePost: async function (data, id) {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      this.fetch();
      this.showMessage("Cập nhật bài viết thành công");
    }
  },
  showForm: function (data = {}) {
    const renderForm = () => {
      this.modal.querySelector(".modal-title").innerText = `Thêm bài mới`;
      this.modal.querySelector(".modal-body").innerHTML = `<form class="${
        Object.keys(data).length ? "form-update" : "form-add"
      }">
      <div class="mb-3">
        <label>Tiêu đề</label>
        <input type="text" class="form-control title"  placeholder="Tiêu đề..." required value="${
          data.title ?? ""
        }">
      </div>
      <div class="mb-3">
        <label>Mô tả</label>
        <textarea class="form-control excerpt" placeholder="Mô tả..." required>${
          data.excerpt ?? ""
        }</textarea>
      </div>
      <div class="mb-3">
        <label>Nội dung</label>
        <textarea class="form-control content" placeholder="Nội dung..." rows="5" required>${
          data.content ?? ""
        }</textarea>
      </div>
      <div class="mb-3">
        <label>Ảnh</label>
        <input type="url" class="form-control image" placeholder="Ảnh..." required value="${
          data.image ?? ""
        }"/>
      </div>
      <button type="submit" class="btn btn-primary">Lưu</button>
    </form>`;
    };
    if (!Object.keys(data).length) {
      const btn = document.querySelector(".btn-add");
      btn.addEventListener("click", () => {
        renderForm();
      });
    } else {
      renderForm();
    }
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
  fetchDetail: async function (postId, show = true) {
    const response = await fetch(`http://localhost:3000/posts/${postId}`);

    if (response.ok) {
      const { title, content, excerpt, image } = await response.json();
      if (show) {
        const modalTitle = this.modal.querySelector(".modal-title");
        const modalContent = this.modal.querySelector(".modal-body");
        modalTitle.innerText = title;
        modalContent.innerHTML = content;
      } else {
        return { title, content, excerpt, image };
      }
    }
  },
  showMessage: function (text) {
    Toastify({
      text,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
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
    this.eventAdd();
    this.eventDelete();
    this.eventUpdate();
  },
};

app.start();

/*
Luồng dữ liệu
Front-end -> Xử lý (Request, Input,...) -> Call API -> Response (Output) -> Render (Front-End)

Buổi sau: 
Auhentication -> Xác thực
Authorization -> Ủy quyền
*/
