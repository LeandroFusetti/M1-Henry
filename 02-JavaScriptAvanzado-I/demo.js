
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

console.log(a);

var a=1

console.log(hola())

function hola(){
    return "saludar"
}


let instructor2 = 'Tony';
if (true) {
    let instructor2 = 'Franco';
    console.log(instructor2);
}
console.log(instructor2);   



var instructor = 'Tony';
console.log(instructor);            
function xs () {                      //funcion autoinvocada o IIFE
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); 
      return     // Franco
   }
}
xs()
console.log(instructor);  

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

function test() {
    console.log(a);
    console.log(foo());
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 console.log(test());

 
 var snack = 'Meow Mix';
 function getFood(food) {
     if (food) {
         var snack = 'Friskies';
      return snack;
   }
   console.log(snack);
   var snack = 'hola'
   return snack;
}

console.log(getFood(false));

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

var test= obj.prop.getFullname
console.log(obj.prop.getFullname());

    // esto es igual ah    var test = function () { return this.fullname}

// como esta adentro de una funcion el this apunta al global, 
// aca en la consola apunta al window, en el navegador apunta la var global full name = juan perez
console.log(test());
