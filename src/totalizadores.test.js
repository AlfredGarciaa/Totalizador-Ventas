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

  it("deberia calcular el impuesto del estado NV", () => {
    const resultado = impuesto(estado("NV"), neto(5, 10));
    expect(resultado).toEqual(4.00); 
  });

  it("deberia calcular el impuesto del estado TX", () => {
    const resultado = impuesto(estado("TX"), neto(20, 22));
    expect(resultado).toEqual(27.50); 
  });

  it("deberia calcular el impuesto del estado AL", () => {
    const resultado = impuesto(estado("AL"), neto(3, 1));
    expect(resultado).toEqual(0.12); 
  });
});