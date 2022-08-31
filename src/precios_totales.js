function precio_total(netos, impuestos, descuentos) {
    let respuesta;

    respuesta = netos+impuestos-descuentos;

    return respuesta;
  }
  
  export default precio_total;