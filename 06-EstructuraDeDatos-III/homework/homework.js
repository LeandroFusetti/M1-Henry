'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value
   this.left=null
   this.right= null
   
   
}

BinarySearchTree.prototype.insert= function(value){
   if(this.value >value){
      
     
      if(this.left) {
         
         this.left.insert(value)
      }
      else {this.left = new BinarySearchTree(value)
         
         return value
      }
   }

   if(this.value <value){
      
      if(this.right) {
         this.right.insert(value)
      }
      
      else {this.right = new BinarySearchTree(value)
         
         
         return value
      
      }
      
   }
   return null
   }

BinarySearchTree.prototype.contains= function(value){
   if(this.value===value) { //cuando lo vuelvo a ejecutar seria como que hago this.left.value
   
   return true
   }
  
   if((value<this.value) && (this.left)){             
      console.log(this.value);
      if(this.left.contains(value)) return true
   }
   
   if((value>this.value) && (this.right)){
      if(this.right.contains(value)) return true
   }
   
         
      
   return false
}
//Metodos 
// pre-order: Nodo--Izq--Der
// in-order: Izq--Nodo--Der
// post-order: Izq--Der--Nodo

BinarySearchTree.prototype.depthFirstForEach= function(cb,type){

   switch (type) {
      case "pre-order":
         cb(this.value)
         if(this.left)this.left.depthFirstForEach(cb,type)
         if(this.right)this.right.depthFirstForEach(cb,type)
         
         break;
      case "post-order":
         if(this.left) this.left.depthFirstForEach(cb,type)
         if(this.right) this.right.depthFirstForEach(cb,type)
         cb(this.value)
         break;
      default:
         if(this.left) this.left.depthFirstForEach(cb,type)
         cb(this.value)
         if(this.right) this.right.depthFirstForEach(cb,type)

      
         break;
   }


}
BinarySearchTree.prototype.breadthFirstForEach= function(cb,pend){
   if(!pend){
      var pend=[]
   }
   cb(this.value)
   if(this.left) pend.push(this.left)
   if(this.right) pend.push(this.right)
   if(pend.lengt>0) pend.shift().breadthFirstForEach(cd,pend)
}


BinarySearchTree.prototype.size= function(){
   let count =0
   count++ //este cuenta, cuando se vuelve a invocar la funcion
   if(this.left){
      count += this.left.size()
      console.log(this.left);
   }
   if(this.right){
      count += this.right.size() 
   }
         
      
   return count
}

let miArbol = new BinarySearchTree(20)
console.log(miArbol.insert(19));
console.log(miArbol.insert(1));
console.log(miArbol.insert(2));
console.log(miArbol.insert(12));
console.log(miArbol);
console.log(miArbol.size());
console.log(miArbol.contains());

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
