function impuesto(impuesto_estado, impuesto_neto) {
    let impuesto;
    
    impuesto = (impuesto_estado * impuesto_neto)/100;

    return impuesto;
  }
  
  export default impuesto;