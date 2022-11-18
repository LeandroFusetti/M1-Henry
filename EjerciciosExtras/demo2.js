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


var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    var newArr = new Queue(); //Nueva instancia, en el archivo DS.js ya esta creada, el enunciado dice "devolver una nueva Queue"

    //Tenemos que recorrer
    while(queueOne.size()>0 || queueTwo.size()>0){ //mientras haya
        var first = queueOne.dequeue(); //saco el primer elemento
        var second = queueTwo.dequeue();
        console.log(first);
        //tenemos que agregarlo a la nueva Queue
        if(first) newArr.enqueue(first); //Llamar al metodo que hace el push
        if(second) newArr.enqueue(second);
    }
    return newArr;  
}
/* var mergeQueues = function(a, s) {
    // Tu código aca:
    var newArr = new Queue(); //Nueva instancia, en el archivo DS.js ya esta creada, el enunciado dice "devolver una nueva Queue"

    //Tenemos que recorrer
    while(a.size() || s.size()){ //mientras haya
        var first = a.dequeue(); //saco el primer elemento
        var second = s.dequeue();

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
} */



var queueOne = new Queue();
queueOne.enqueue(7);
queueOne.enqueue(3);
queueOne.enqueue(5);

var queueTwo = new Queue();
queueTwo.enqueue(2);
queueTwo.enqueue(4);
queueTwo.enqueue(6);

console.log(queueOne);
console.log(mergeQueues(queueOne,queueTwo));


var closureMult = function(multiplier) {
    // Tu código aca:
    return function(num) { //clousure retorna otra funcion
        return multiplier * num;
    }
}