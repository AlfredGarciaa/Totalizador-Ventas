import item from "./items.js";
import precio from "./precios.js";
import estado from "./estados.js";
import neto from "./netos.js";
import impuesto from "./impuestos.js";

const cantidades = document.querySelector("#cantidad-items");
const form = document.querySelector("#cantidad-form");
const div = document.querySelector("#cantidad-div");

const precios = document.querySelector("#precio-items");
const form2 = document.querySelector("#precio-form");
const div2 = document.querySelector("#precio-div");

const estados = document.querySelector("#estado-items");
const form3 = document.querySelector("#estado-form");
const div3 = document.querySelector("#estado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const CantidadesNumber = Number.parseInt(cantidades.value);

  div.innerHTML = "<p>" + item(CantidadesNumber) + "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const PreciosNumber = Number.parseInt(precios.value);

  div2.innerHTML = "<p>" + precio(PreciosNumber) + "</p>";
});

form3.addEventListener("submit", (event) => {
  event.preventDefault();

  const EstadosList = estados.value;
  const precio = Number.parseInt(precios.value);
  const cantidad = Number.parseInt(cantidades.value);
  const estado_1 = 'CA';

  div3.innerHTML = "<p> Estado: " + EstadosList + 
                   "<p> Impuesto: " + estado(EstadosList) +
                   "<p> Precio Neto: " + neto(precio, cantidad) +
                   "<p> Impuesto Total para CA: " + impuesto(estado(estado_1), neto(precio, cantidad)) + "</p>";
});