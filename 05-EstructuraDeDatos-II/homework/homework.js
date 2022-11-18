'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null
  this._lenght = 0
}

function Node(value) {
  this.value= value
  this.next = null
}
LinkedList.prototype.add = function(value){
  let nodo = new Node(value)

  let current= this.head
  if(!current){     //si mi head esta vacio le agrego un nodo
      this.head= nodo
      this._lenght++
      return nodo
  }
  while(current.next){ // recorro los nodos hasta encontrar el que tiene el next vacio)
      current = current.next
  }
  //ya encontrado el ultimo nodo le agrego otro
  current.next= nodo
  this._lenght++
  return nodo
 
  
}
LinkedList.prototype.remove= function(){
  let current= this.head
  console.log(current);
  if(!current)return null
  if(!current.next){
      console.log(current.next);
      let aux = current.value
      this.head =null
      this._lenght--

      return aux
  }
  
  console.log(current);
  while(current.next.next){
      console.log(current.next);
      current = current.next
      console.log(current.next);

  }
  let aux=current.next.value
  console.log(current.next);

  current.next = null
  this._lenght--


  return aux
}


LinkedList.prototype.search= function(input){
  let current= this.head
  if(!current)return null
  console.log(current);
  console.log(current.next);
  while(current){
      if(typeof input == "function")  {
          if(input(current.value)=== true)return current.value
          
      } 
      else{
          if(input == current.value) return current.value
      }
      current= current.next
 }
 return null

}
/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
  
  Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = []
  this.numBuckets = 35
  this.hash = function(input){
    let suma =0
    
    for(let i=0; i<input.length; i++){
        suma = suma + input[i].charCodeAt()
    }
    console.log(suma % this.numBuckets );
    return suma % this.numBuckets 
  }

  this.set = function(key,val){
    if(typeof key !== "string") throw TypeError('Keys must be strings')
    let index =  this.hash(key) // posicion
    // lo que tengo en la posicion
    if(!this.buckets[index]){
      this.buckets[index] ={}
    }
    this.buckets[index][key] = val
    

  }
  this.get = function(key){
    const index =  this.hash(key)
    const bucket = this.buckets[index]
    if(bucket){
      return bucket[key]
    }
    else return null
  }
  this.hasKey = function(key){
    if(this.get(key)) return true
    else return false
  }
}
const nuevoHash = new HashTable()
console.log(nuevoHash.set("apellido","juan"))
/* console.log(nuevoHash.hash("foo")) */
console.log(nuevoHash.hasKey("nombre"))
/* console.log(nuevoHash.set("foo","hola")) */

console.log(nuevoHash);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
