import estado from "./estados.js";
import neto from "./netos.js";
import impuesto from "./impuestos.js";
import descuento from "./descuentos.js";
import precio_total from "./precios_totales.js";
import porcentaje from "./porcentajes.js";

const form = document.querySelector("#totalizar-form");
const cantidades = document.querySelector("#cantidad-items");
const precios = document.querySelector("#precio-items");
const estados = document.querySelector("#estado-items");
const div = document.querySelector("#resultados-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const EstadosList = estados.value;
  const precio = Number.parseInt(precios.value);
  const cantidad = Number.parseInt(cantidades.value);

  div.innerHTML =  "<p> Precio Neto (" + cantidad + "*" + precio + "): " + neto(precio, cantidad) + " $us<p>" +
                   "<p> Tasa de Descuento (" + porcentaje(neto(precio, cantidad)) + "%): " + descuento(porcentaje(neto(precio, cantidad)), neto(precio, cantidad)) + " $us<p>" +
                   "<p> Impuesto para " + EstadosList + " (" + estado(EstadosList) + "%): " + impuesto(estado(EstadosList), neto(precio, cantidad)) + " $us<p>" +
                   "<p> Precio Total (Descuento e Impuesto): " + precio_total(neto(precio, cantidad), impuesto(estado(EstadosList), neto(precio, cantidad)), descuento(porcentaje(neto(precio, cantidad)), neto(precio, cantidad))) + " $us<p>" +
                   "</p>";
});