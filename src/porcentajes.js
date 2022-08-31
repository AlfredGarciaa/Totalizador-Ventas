function porcentaje(netos) {
    let rebaja=0;

    if((netos >= 1000) && (netos < 3000)){
        rebaja = 3;
    }
    if((netos >= 3000) && (netos < 7000)){
        rebaja = 5;
    }
    if((netos >= 7000) && (netos < 10000)){
        rebaja = 7;
    }
    if((netos >= 10000) && (netos < 30000)){
        rebaja = 10;
    }
    if(netos >= 30000){
        rebaja = 15;
    }
    
    return rebaja;
  }
  
  export default porcentaje;