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

let  string= "ho"
let string2 = "hola"
console.log(string.charCodeAt(1))
console.log(string2.charCodeAt(0))

console.log("hola");

// function hashTable(input){
//     let suma =0
//     let numBuckets= 35
    
//     for(let i=0; i<input.length; i++){
//         suma = suma + input[i].charCodeAt()
//     }
//     return (suma %numBuckets )
// }

// console.log(hashTable('this is a key'));

// /* hashTable.hash('foo')).toBe(9); */

// const obj = {

// }

// obj.numero = "hola"

// console.log(obj);

function HashTable() {
    this.buckets = []
    this.numBuckets = 35
    this.hash = function(input){
      let suma =0
      
      for(let i=0; i<input.length; i++){
          suma = suma + input[i].charCodeAt()
      }
      return suma % this.numBuckets 
    }
  
    this.set = function(key,val){
      let index =  this.hash(key) // posicion
             
      if(!this.buckets[index]){ // lo que tengo en la posicion, quiero tener un objeto
        this.buckets[index] ={}
      }
      console.log(this.buckets[index]);
      this.buckets[index][key] = val
      console.log(this.buckets[index]);
   /*  return this.buckets.push(bucket) */
    }


    this.get = function(){
    let index =  this.hash(key) // posicion
    let bucket = this.buckets[index]
    if(bucket.hasOwnProperty(key)) return bucket[key]
    }

    this.hasKey = function(){
  
    }
  }

const nuevoHash = new HashTable()

/* console.log(nuevoHash.hash("foo")) */
console.log(nuevoHash.set("edad","oscar"))
/* console.log(nuevoHash.set("foo","hola")) */

console.log(nuevoHash);


