function impuesto(impuesto_estado, impuesto_neto) {
    let impuesto, resultado;
    
    impuesto = ((impuesto_estado * impuesto_neto)/100);
    resultado = impuesto + impuesto_neto;

    return resultado;
  }
  
  export default impuesto;