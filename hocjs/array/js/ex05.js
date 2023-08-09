var posts = [
  [
    "Tiêu đề bài viết 1",
    "https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
    dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum
    quam repellendus dolores harum sit, laudantium delectus quisquam amet
    atque.`,
  ],

  [
    "Tiêu đề bài viết 2",
    "https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
    dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum
    quam repellendus dolores harum sit, laudantium delectus quisquam amet
    atque.`,
  ],

  [
    "Tiêu đề bài viết 3",
    "https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
    dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum
    quam repellendus dolores harum sit, laudantium delectus quisquam amet
    atque.`,
  ],

  [
    "Tiêu đề bài viết 4",
    "https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
    dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum
    quam repellendus dolores harum sit, laudantium delectus quisquam amet
    atque.`,
  ],

  [
    "Tiêu đề bài viết 5",
    "https://plus.unsplash.com/premium_photo-1673283380425-0f41f67db1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
    dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum
    quam repellendus dolores harum sit, laudantium delectus quisquam amet
    atque.`,
  ],
];

var getPostItemHtml = function (title, img, content, index) {
  var postItemHtml = `<div class="posts">
    <img
      src="${img}"
      alt="${title}"
      class="${index % 2 !== 0 ? "right" : ""}"
    />
    <h2 class="title">${title}</h2>
    <p>
      ${content}
    </p>
    </div>
    `;

  return postItemHtml;
};

var result = posts.map(function (post, index) {
  return getPostItemHtml(post[0], post[1], post[2], index);
});

var postHtml = result.join("");
document.write(postHtml);

/*
Bài tập: So le ảnh
- Bài 1 => Ảnh ở bên trái
- Bài 2 => Ảnh ở bên phải
- Bài 3 => Ảnh ở bên trái
*/
