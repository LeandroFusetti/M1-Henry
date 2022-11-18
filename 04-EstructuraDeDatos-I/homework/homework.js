'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if(n <=0) return 0
   if(n==1){
      return 1
   }
   return n*nFactorial(n-1)

}
console.log(nFactorial(2));
   
// EJERCICIO 2

// 0      1      1      2      3      5      8      13      21      34      55      89      144  
function nFibonacci(n) {
   if(n==0) return 0
   if(n==1) return 1

   return nFibonacci(n-2)+ nFibonacci(n-1)
}

console.log(nFibonacci(2));

// EJERCICIO 3
function Queue() {
   this.array= []
}
Queue.prototype.enqueue = function(a){
  return this.array.push(a)}

Queue.prototype.dequeue = function(){
   
   return this.array.shift()
}

   Queue.prototype.size = function(){
      return this.array.length
      }

let newCola= new Queue()
newCola.enqueue(5)
console.log(newCola.size())
console.log(newCola);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
