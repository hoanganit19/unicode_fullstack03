var content = document.querySelector(".content");

var shadow = content.attachShadow({
  mode: "open",
});

shadow.innerHTML = `<h1>Unicode Academy</h1>`;

var style = document.createElement("style");

style.textContent = `
h1 {
    color: red
}
`;

shadow.prepend(style);
