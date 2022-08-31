import impuesto from "./impuestos.js";
import estado from "./estados.js";
import neto from "./netos.js";
import descuento from "./descuentos.js";
import porcentaje from "./porcentajes.js";

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

  it("deberia calcular el impuesto del estado CA", () => {
    const resultado = impuesto(estado("CA"), neto(35, 80));
    expect(resultado).toEqual(231); 
  });
});

describe("\n==============    /// DESCUENTOS ///   ==============", () => {
  // if resultado X == X then mostrar mensaje de exito (verde)
  // else mostrar mensaje de falla (rojo)
  it("deberia calcular el descuento mayor a 1000", () => {
    const resultado = descuento(porcentaje(neto(50, 10)), neto(50, 10));
    expect(resultado).toEqual(15); 
  });

  it("deberia calcular el descuento mayor a 3000", () => {
    const resultado = descuento(porcentaje(neto(120, 30)), neto(120, 30));
    expect(resultado).toEqual(252); 
  });
});