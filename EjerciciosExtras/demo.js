var countArray = function(array) {
    // Tu código aca:
   
    let suma = 0
    for(let i=0; i<array.length;i++){
        if(Array.isArray(array[i])){
            
            suma += countArray(array[i])
        }
        else suma+= array[i]
    }
    return suma
    
}

console.log(countArray([2,3,5]));

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:
    let count =0
    for (const prop in obj){
        count++
        console.log(obj[prop]);
        if(typeof obj[prop]== "object"){
            count +=countProps(obj[prop])
            
        }
        
        
        
    }
    return count
}

let obj=  {
      a: {
        a1: 10,
        a2: 'Franco',
        a3: {f: 'r', a: 'n', c: {o: true}}
        
      },
      b: 2,
      c: [1, {a: 1}, 'Franco']
      
    }
console.log(countProps(obj));


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

function LinkedList() {
    this.head = null;
  }
  
  LinkedList.prototype.add = function(valor) {
    var nuevoNodo = new Node(valor);
  
    if(!this.head){
      this.head = nuevoNodo;
    } else {
      var tailActual = this.head;
      while (tailActual.next !== null) {
        tailActual = tailActual.next;
      }
      tailActual.next = nuevoNodo;
    }
  }
  
  LinkedList.prototype.remove = function() {
    if(!this.head){
      return undefined;
    }
  
    if(this.head.next === null){
      var unicoNodo = this.head;
      this.head = null;
      return unicoNodo.value;
    }
  
    var nodoActual = this.head.next;
    var nodoPrevious = this.head;
    while (nodoActual.next !== null) {
      nodoPrevious = nodoActual;
      nodoActual = nodoActual.next;
    }
    nodoPrevious.next = null;
    return nodoActual.value;
  }
  
  LinkedList.prototype.search = function(arg) {
    var nodoActual = this.head;
  
    if(nodoActual === null){
      return null;
    }
  
    while (nodoActual !== null) {
      if(typeof arg === "function"){
        if(arg(nodoActual.value)){
          return nodoActual.value;
        }
      } else if(nodoActual.value === arg){
          return nodoActual.value;
      }
      nodoActual = nodoActual.next;
    }
  
    return null;
  }
  
  function Node(valor){
    this.value = valor;
    this.next = null;
  }

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    let current = this.head
    console.log(this.head);
    if(!current) return "error"
    let count =0
    while(current){
        console.log(current.value);
        console.log(current.value);
        if(isNaN(current.value)) {
            console.log(current.value);

            current.value="kimimora"
            count ++
        }
        console.log(count);
        current= current.next
    }
    return count
}

console.log(isNaN());

let nuevoNodo = new LinkedList()
nuevoNodo.add(1)
nuevoNodo.add("2")
nuevoNodo.add(false)
nuevoNodo.add("franco")
nuevoNodo.add("franco")

console.log(nuevoNodo)
console.log(nuevoNodo.changeNotNumbers());;
console.log(nuevoNodo)


function Queue() {
    this.array = [];
  }
  
  Queue.prototype.enqueue = function(elemento) {
    return this.array.push(elemento);
  }
  
  Queue.prototype.dequeue = function() {
    return this.array.shift();
  }
  
  Queue.prototype.size = function() {
    return this.array.length;
  }

  // Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.


/* var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    let cola = new Queue()
    queueOne.dequeue()

    let first = queueOne.dequeue()
    let second = queueTwo.dequeue()
    
    cola.enqueue(first)
    cola.enqueue(second)
    
    return cola

} */

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    var newArr = new Queue(); //Nueva instancia, en el archivo DS.js ya esta creada, el enunciado dice "devolver una nueva Queue"

    //Tenemos que recorrer
    while(queueOne.size() || queueTwo.size()){ //mientras haya
        var first = queueOne.dequeue(); //saco el primer elemento
        var second = queueTwo.dequeue();

        //tenemos que agregarlo a la nueva Queue
        if(first) newArr.enqueue(first); //Llamar al metodo que hace el push
        if(second) newArr.enqueue(second);
    }
    return newArr;  //devolver una nueva Queue que mergeo los nodos de las anteriores.

    //OTRA OPCION:
    // while(queueOne.size() || queueTwo.size() ){
    //     if(queueOne.size()) newArr.enqueue(queueOne.dequeue())
    //      if(queueTwo.size()) newArr.enqueue(queueTwo.dequeue())
    //}
    //return newArr
}

let queueOne= [7,3,5]
let queueTwo = [2,4,6]

console.log(mergeQueues(queueOne, queueTwo))

/* console.log(mergeQueues(queueOne,queueTwo)); */

/* console.log(cola.mergeQueues(queueOne,queueTwo)) */
