import item from "./item.js";

const items = document.querySelector("#cantidad-items");
const form = document.querySelector("#mostrar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ItemsNumber = Number.parseInt(items.value);

  div.innerHTML = "<p>" + item(ItemsNumber) + "</p>";
});