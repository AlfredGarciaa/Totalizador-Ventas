import item from "./item.js";
import precio from "./precio.js";

const items = document.querySelector("#cantidad-items");
const form = document.querySelector("#cantidad-form");
const div = document.querySelector("#cantidad-div");

const precios = document.querySelector("#precio-items");
const form2 = document.querySelector("#precio-form");
const div2 = document.querySelector("#precio-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ItemsNumber = Number.parseInt(items.value);

  div.innerHTML = "<p>" + item(ItemsNumber) + "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const PreciosNumber = Number.parseInt(precios.value);

  div2.innerHTML = "<p>" + precio(PreciosNumber) + "</p>";
});