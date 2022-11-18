'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  
  var array=[1]
  for(let i =2;i<=num; i++){
    
    while(num % i ==0){
      console.log(num);
      num =num /i
    
    array.push(i)
    
  }
}
  return array
}

console.log(factorear(189))



function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  
  var cambio= true
  while(cambio ){
    cambio= false
    
    for(let i=0; i<array.length -1;i++){
      console.log(array);
      if(array[i]> array[i +1]){
        let aux = array[i]
        array[i] = array[i +1]
        array[i+1]=aux
        cambio = true
        
      }
    }
  }
  return array
}

const array=[5,9,1,2]
console.log(bubbleSort(array));



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j =i-1
    let aux =array[i]
    while(j>=0 && array[j]>aux){ //se pone hasta que sea j>=0 porque es hasta donde empieza el array yendo para atras
      array[j+1]=array[j]
      
      j--
    }
    array[j+1]=aux
    
  }
  return array

  
}

console.log(insertionSort([2,8,5,9,1,4]))


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length-1; i++) {
    let min= i  //indice del numero mas chico del array
    for(let j=i+1;j<array.length;j++){
      if(array[j]<array[min])min =j
    }
    if(i !=min){
      let aux=array[i]
      array[i]= array[min]
      array[min] = aux
    }

  }
  return array

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
