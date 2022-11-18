function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
  
    //dividir el num y guarda el resultado y el nuevo num
    let array=[]
    while(num % 2 ==0){
      num =num /3
      array.push(num)
      console.log(array);
    }
    return array
  }
  console.log(factorear(180))

