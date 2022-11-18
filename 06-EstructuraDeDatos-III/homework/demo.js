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




this.insert =function(value){

    if(value < this.value){
        if(this.left){
            this.left.insert(value)
        }
        
        else this.left = new BinarySearchTree(value)
    }

    if(value > this.value){

        if(this.right){
            this.right.insert(value)

        }
        
        else this.right = new BinarySearchTree(value)
    }



}

this.contains = function(value){
    if(value == this.value)return true
    

    /* else if (this.left) { this.left.contains(valor)}

    else if(this.right) {this.right.contains(valor)}
    
    else return false */
    if((value<this.value) && (this.left)){             
        console.log(this.value);
        if(this.left.contains(value)) return true
     }
     
     if((value>this.value) && (this.right)){
        if(this.right.contains(value)) return true
     }
     return false
}

 }


/*  BinarySearchTree.prototype.contains = function (value){

   

 } */




let tree =new BinarySearchTree(5)
tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(55)
tree.insert(59)
console.log(tree.contains(5124));
console.log(tree);


