function descuento(netos) {
    let respuesta;

    if(netos <= 1000){
        respuesta = 3;
    }
    if((netos > 1000) && (netos <=3000)){
        respuesta = 5;
    }
    if((netos > 3000) && (netos <=7000)){
        respuesta = 7;
    }

    return respuesta;
  }
  
  export default descuento;