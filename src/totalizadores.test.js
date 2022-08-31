import impuesto from "./impuestos.js";
import estado from "./estados.js";
import neto from "./netos.js";

describe("==============    /// IMPUESTOS ///   ==============", () => {
  // if resultado X == X then mostrar mensaje de exito (verde)
  // else mostrar mensaje de falla (rojo)
  it("deberia calcular el impuesto del estado UT", () => {
    const resultado = impuesto(estado("UT"), neto(12, 20));
    expect(resultado).toEqual(15.96); 
  });
});