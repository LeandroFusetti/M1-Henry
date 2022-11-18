function cacheFunction(cb) {
    let cache = {}
    return function (arg){
      if(cache.hasOwnProperty(arg)){
        return cache[arg]
      }
      else{
        cache[arg]= cb(arg)
        return cache[arg]
      }
    }
  }

  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  console.log(squareCache(5));
  console.log(squareCache());
 

  function Queue() {
    this.array= []
 }

 Queue.prototype.add = function(e){
  return this.array.push(e)

 }
 Queue.prototype.remove = function(){
  return this.array.shift()
  }

let holass = new Queue()
  holass.add("hola" )
  console.log(holass);

  /* Escribí una función llamada power que reciba dos parámetros: base y exponente. La función deberá retornar la potenciación correspondiente - es decir, la base elevada al exponente.
  Nota: recuerden contemplar el caso de las potenciaciones con exponente 0  */

  function power(base, exponent){
    if(exponent ==0) return 1
    return base * power(base, exponent -1)
  }
  
  console.log(power(4,2));
  // Ejemplos:
  // power(2,0) debería retornar 1
  // power(2,2) debería retornar 4

  // Escribí una función llamada productOfArray que reciba un arreglo de números y retorne el producto de todos ellos.

 function productOfArray(arr){
    if(arr.length ==1) return arr[0]
    return arr.pop() + productOfArray(arr)

  }
  
  console.log(productOfArray([1,2,3,4,5]));
  let arr =[1,2,3]

  let arr2 =[]
  arr.pop()
  console.log(arr);
  // Ejemplos:
  // productOfArray([1,2,3]) debería retornar 6
  // productOfArray([1,2,3,10]) debería retornar 60


  // Escribí una función llamada recursiveRange que reciba como único argumento un número, y retorne la suma de todos los números enteros desde 0 hasta dicho número.

 function recursiveRange(num){
    if(num==0)return 0
    if(num==1)return 1
    return num + recursiveRange(num-1)
  }
  
  console.log(recursiveRange(6))
  
 // Ejemplos: 
  // recursiveRange(6) debería retornar 21
  // recursiveRange(10) debería retornar 55