function precio_total(netos, impuestos, descuentos) {
    let sumador, rebaja, respuesta;

    sumador = netos+impuestos;
    rebaja = (sumador*descuentos)/100;
    respuesta = netos+impuestos-rebaja;

    return respuesta;
  }
  
  export default precio_total;