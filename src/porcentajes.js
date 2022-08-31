function procentaje(netos) {
    let rebaja;

    if(netos <= 1000){
        rebaja = 3;
    }
    if((netos > 1000) && (netos <=3000)){
        rebaja = 5;
    }
    if((netos > 3000) && (netos <=7000)){
        rebaja = 7;
    }

    return rebaja;
  }
  
  export default procentaje;