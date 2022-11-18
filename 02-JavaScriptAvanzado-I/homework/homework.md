# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;                        // se crea una variable pero no es afectada por el hoisting
var a = 5;
var b = 10;
var c = function (a, b, c) {  //es una funcion expresada
   var x = 10;                
   console.log(x);            // 10
   console.log(a);            // 8  (porque se recibe como parametro)
   var f = function (a, b, c) {  // 8, 9 y 10
      b = a;                     
      console.log(b);            // 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);            // 9
};
c(8, 9, 10);
console.log(b);               // 10
console.log(x);               // 1
```

```javascript
console.log(bar);             // undefined
console.log(baz);             // error undefined
foo();
function foo() {
   console.log('Hola!');      // Hola
}
var bar = 1;                  
baz = 2;                      // undefined
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);      //Franco
```
Var tiene alcance global, y se puede redefinir
Let tiene scope de bloque
bloque --> {}
const no se puede modificar su valor

```javascript
var instructor = 'Tony';
console.log(instructor);            
(function () {                      //funcion autoinvocada o IIFE
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);      // Franco
   }
})();
console.log(instructor);            // Tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);
```


### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
```
//NaN intento de resolver una operacion

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefinied
   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();  
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}
// por mas que la condicion no se cumpla se hace el hoisting, entonces se guarda la variable snack (no su valor), por eso cuando se retorna no va a buscarlo al contexto global porque en el de la funcion esta definido pero no tiene valor, porque el if no cumple la condicion. Si usaramos let,la variable no entra en el hosting y entonces si puede ir a buscarla al contexto global
getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname; // esto es igual ah    var test = function () { return this.fullname}

console.log(test());


// como esta adentro de una funcion el this apunta al global, 
// aca en la consola apunta al window, en el navegador apunta la var global full name = juan perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

// cuando hay un setTimeout js las deriba a Web Apis porque son asincronicas, y cuando la resuelve las envia a callback Queue, esta tiene la regla de FIFO, first in first out

printing();
```
