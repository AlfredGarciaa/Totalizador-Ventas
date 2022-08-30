function estado(nombre) {
    let impuesto;
    
    if(nombre == "UT"){
      impuesto = 6.65;
    }
    if(nombre == "NV"){
      impuesto = 8.00;
    }
    if(nombre == "TX"){
      impuesto = 6.25;
    }
    if(nombre == "AL"){
      impuesto = 4.00;
    }
    if(nombre == "CA"){
      impuesto = 8.25;
    }

    return impuesto;
  }
  
  export default estado;