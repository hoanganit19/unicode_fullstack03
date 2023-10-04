// var template = document.querySelector(".template");
// var templateContent = template.content.cloneNode(true);

// templateContent.children[0].style.color = "red";
// templateContent.children[1].style.fontSize = "2rem";

// var root = document.querySelector("#root");
// root.append(templateContent);

Unicode.component("counter-app", {
  data: () => {
    return {
      count: 1,
      title: "Unicode Academy",
      showTitle: true,
      products: ["Item 1", "Item 2", "Item 3"],
    };
  },
  template: `
  <h1 v-if="showTitle">Unicode Academy</h1>
  <h2 v-for="item in products">Sản phẩm</h2>
  <h2 @dblclick="title='Hello Unicode'">Đếm: {{count}} lần</h2>
  <button @click="count--">-</button>
  <button @click="count++">+</button>
  `,
});

//Các Javascript Framework: Làm việc thông qua State

/*
Buổi sau: ES6
1. Từ khóa: const, let
2. Arrow Function
3. Destructuring, Spread, Enhance Object Literal
4. Classes
5. Javascript Module
*/
