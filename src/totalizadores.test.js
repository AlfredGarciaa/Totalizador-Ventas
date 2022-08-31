import impuesto from "./impuestos.js";
import estado from "./estados.js";
import neto from "./netos.js";
import descuento from "./descuentos.js";
import porcentaje from "./porcentajes.js";
import precio_total from "./precios_totales.js";

  // if resultado X == X then mostrar mensaje de exito (verde)
  // else mostrar mensaje de falla (rojo)

describe("==============    /// IMPUESTOS ///   ==============", () => {
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
  it("deberia calcular el descuento mayor a 1000", () => {
    const resultado = descuento(porcentaje(neto(150, 10)), neto(150, 10));
    expect(resultado).toEqual(45); 
  });

  it("deberia calcular el descuento mayor a 3000", () => {
    const resultado = descuento(porcentaje(neto(120, 30)), neto(120, 30));
    expect(resultado).toEqual(180); 
  });

  it("deberia calcular el descuento mayor a 7000", () => {
    const resultado = descuento(porcentaje(neto(400, 18)), neto(400, 18));
    expect(resultado).toEqual(504); 
  });

  it("deberia calcular el descuento mayor a 10000", () => {
    const resultado = descuento(porcentaje(neto(100, 100)), neto(100, 100));
    expect(resultado).toEqual(1000); 
  });

  it("deberia calcular el descuento mayor a 30000", () => {
    const resultado = descuento(porcentaje(neto(40, 821)), neto(40, 821));
    expect(resultado).toEqual(4926); 
  });
});

describe("\n==============    /// PRECIO TOTAL ///   ==============", () => {
  it("deberia calcular el precio total=neto+impuesto-descuento del estado de NV", () => {
    const resultado = precio_total(neto(50, 100), impuesto(estado("NV"), neto(50, 100)), descuento(porcentaje(neto(50, 100)), neto(50, 100)));
    expect(resultado).toEqual(5150); 
  });
});