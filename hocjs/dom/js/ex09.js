var todoForm = document.querySelector(".TodoForm");
var todoList = document.querySelector(".todos-list");

var todos = [];

//Hàm xử lý
var renderTodos = function () {
  var html = todos
    .map(function (todo, index) {
      return `<div class="Todo">
    <p class="">${todo.name}</p>
    <div class="action">
      <svg data-type="update" data-index="${index}" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" class="svg-inline--fa fa-pen-to-square " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>
      </svg>
      <svg data-index="${index}" data-type="remove" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
      </svg>
    </div>
  </div>
`;
    })
    .join("");

  todoList.innerHTML = html;

  var actionBtnList = todoList.querySelectorAll(".action");
  actionBtnList.forEach(function (actionBtn) {
    actionBtn.addEventListener("click", handleAction);
  });
};

var handleAction = function (e) {
  var current;
  if (e.target.localName === "path") {
    var type = e.target.parentElement.dataset.type;
    var index = e.target.parentElement.dataset.index;
    current = e.target.parentElement;
  } else {
    var type = e.target.dataset.type;
    var index = e.target.dataset.index;
    current = e.target;
  }

  if (type === "remove") {
    handleRemove(index);
  }

  if (type === "update") {
    current = current.parentElement.parentElement;
    showFormUpdate(current, index);
  }
};

var renderTodo = function (element, todo, index) {
  element.outerHTML = `<div class="Todo">
   <p class="">${todo.name}</p>
   <div class="action">
     <svg data-type="update" data-index="${index}" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" class="svg-inline--fa fa-pen-to-square " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
       <path fill="currentColor" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>
     </svg>
     <svg data-index="${index}" data-type="remove" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
       <path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
     </svg>
   </div>
 </div>
`;
};

var handleRemove = function (index) {
  if (confirm("Bạn có chắc chắn?")) {
    if (index >= 0) {
      todos.splice(index, 1);
      renderTodos();
    }
  }
};

var showFormUpdate = function (current, index) {
  //   console.log("show form update", current);
  if (index >= 0) {
    var todo = todos[index];

    var todoFormHtml = `<form class="TodoForm formUpdate"><input type="text" class="todo-input" placeholder="Update todos" value="${todo.name}"><button type="submit" class="todo-btn">Add Task</button></form>`;

    current.outerHTML = todoFormHtml;

    var formUpdateList = todoList.querySelectorAll(".formUpdate");
    if (formUpdateList.length) {
      formUpdateList.forEach(function (formUpdate) {
        formUpdate.addEventListener("submit", function (e) {
          e.preventDefault();
          var doNameEl = this.querySelector(".todo-input");
          var doName = doNameEl.value;
          if (!doName) {
            alert("Vui lòng nhập tên công việc");
            doNameEl.focus();
            return;
          }

          //Cập nhật vào mảng ban đầu
          todos[index].name = doName;

          //Thay thế công việc đã sửa vào đúng vị trí
          renderTodo(this, todos[index], index);

          //Gán lại sự kiện sau khi render lại dữ liệu cập nhật
          var actionBtnList = todoList.querySelectorAll(".action");
          actionBtnList.forEach(function (actionBtn) {
            actionBtn.addEventListener("click", handleAction);
          });
        });
      });
    }

    // current
    //   .querySelector(".formUpdate")
    //   .addEventListener("submit", function (e) {
    //     e.preventDefault();
    //     console.log("Update: " + index);
    //   });
  }
};

//Sự kiện
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var doNameEl = this.querySelector(".todo-input");
  var doName = doNameEl.value;
  if (!doName) {
    alert("Vui lòng nhập tên công việc");
    doNameEl.focus();
    return;
  }

  //Logic thêm
  var todo = {
    name: doName,
  };
  todos.push(todo);

  doNameEl.value = "";

  //Hiển thị mảng sau khi thêm lên giao diện
  renderTodos();
});

/*
Kiến thức: 
- Dom Navigation: Phân cấp Element
- Xác định đúng vị trí khi có thay đổi element
- Gán lại sự kiện khi thay đổi element
- Kiểu dữ liệu: mảng, object

Các bước học: 
- Code theo => Xem video, code mẫu
- Code lại => Không xem video
- Code thêm tính năng => Cải thiện, tăng độ khó
- Tự xây dựng sản phẩm riêng

Bài tập về nhà: 
- Đánh dấu công việc hoàn thành => Đẩy xuống cuối
- Sửa công việc => Nếu thêm => Giữ nguyên form sửa
*/
