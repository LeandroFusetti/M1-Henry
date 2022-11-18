// function LinkedList(data){
//     this.head = null
//     this._lenght = 0
// }


// function Node(value) {
//     this.value= value
//     this.next = null
// }


// LinkedList.prototype.add = function(value){
//     let nodo = new Node(value)
    
//     let current= this.head
//     if(!current){
//         this.head= nodo
//         this._lenght++
//         return nodo
//     }
//     while(current.next){
//         console.log(current.next);
//         current = current.next     
//         console.log(current.next);

//     }
//     console.log(current.next);
//     current.next= nodo
//     console.log(current.next);
//     this._lenght++
//     return nodo
    
    
// }

// LinkedList.prototype.remove= function(){
//     let current= this.head
//     console.log(current); 
//     if(!current)return null     //si no tengo ningun nodo, osea nada conectado al head
//     if(!current.next){          // si tengo un solo nodo, osea el head tiene un nodo, y este no tiene nada conectado
//         console.log(current.next);
//         let aux = current.value
//         this.head =null
//         this._lenght--

//         return aux
//     }
    
//     console.log(current);
//     while(current.next.next){   //si mi nodo tiene un nodo y a su vez este tiene otro nodo, 1---2---3
//         console.log(current.next);
//         current = current.next
//         console.log(current.next);

//     }
//     let aux=current.next.value
//     console.log(current.next);

//     current.next = null
//     this._lenght--


//     return aux
// }

// LinkedList.prototype.seach= function(input){
//     let current= this.head
//     if(!current)return null
//     console.log(current);
//     console.log(current.next);
//     while(current){
//         if(typeof input == "function")  {
//             if(input(current.value)=== true)return current.value
            
//         } 
//         else{
//             if(input == current.value) return current.value
//         }
//         current= current.next
//    }
//    return null

// }

// let miLista= new LinkedList
// miLista.add(11)
// miLista.add(14)
// /* miLista.add(4)
// miLista.add(9) */

// /* console.log(miLista.remove()) */
// let input= function(num){
//     if(num % 2 ===0 )return true
//     else return false
// }


// console.log(typeof(input));
// console.log(input());
// console.log(miLista.seach(14))
// console.log(miLista.seach(input))


// console.log(miLista);
