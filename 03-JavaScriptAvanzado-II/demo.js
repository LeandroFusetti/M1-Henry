function counter() {
    var contador = 1
    console.log(contador);
    return function newcounter(){
      return contador++ 
    }
  }

var nuevoContador = counter()
  console.log(nuevoContador());
  console.log(nuevoContador());
  console.log(nuevoContador());

var otroContador = counter()
console.log(otroContador());
console.log(otroContador());
console.log(otroContador());


var creaFuncion = function(){
    var arreglo = [];
  
    for ( var i=0; i < 3; i++){
      arreglo.push(
        function(){
          return (i);
        }
      )
    }
    return arreglo;
  }
  
  var arr = creaFuncion();
  
  console.log(arr[0]())  // 3 sale un 3, qué esperaban ustedes??
  console.log(arr[1]())  // 3
  console.log(arr[2]())  // 3

  var instructor = {
    nombre: 'Franco',
    edad: 25,
 };
 
 var alumno = {
    nombre: 'Juan',
    curso: 'FullStack',
 };
 
 function getNombre() {
   return this.nombre
 }
 
 
 let getNombreInstructor = getNombre.bind(instructor);
 let getNombreAlumno = getNombre.bind(alumno);

 console.log(getNombreInstructor());
 console.log(getNombreAlumno());


 /* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

/* function cacheFunction(cb) {
  let result= []
  return function(arg){
    
    return cb(arg)
  }
}

var square=function square(n){
  return n * n
}
const squareCache = cacheFunction(square)

console.log(squareCache(5));
console.log(squareCache(5)); */
