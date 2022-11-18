/* 
// forma 1
function BinarioADecimal(num) {
    let resultado=0
    let binario = num.split("").reverse()
    for(let i=0; i<binario.length; i++){
        if(binario[i]==1){
            resultado += Math.pow(2,i)
        }
    }
return resultado
}


function BinarioADecimal(num){
    let sum=0
    for(let i=0; i<num.length;i++){
        sum += num[i] *2 ** (num.length -1 -i)
        console.log(sum);
    }
    return sum
}

console.log(BinarioADecimal("110"));

console.log(2**4);

function BinarioADecimal(num) {
    let resultado=0
    let binario = num.toString().split("")
    let j=0
    console.log(binario);
    for(let i=binario.length-1; i>=0; i--){
        if(binario[i]==1){
             
             
            resultado += 2**j
            
        }
        console.log(i);
        j++
    }
 
 console.log(resultado);
 return resultado
 }

 BinarioADecimal(11)


 function DecimalABinario(num) {

    let array=[]
        while(num <2){
       
        array.push(num %2)
        console.log();
   
 }
    return array
}

console.log(DecimalABinario(5)); */
/* 
function BinarioADecimal(num) {
    let j=0
    let suma=0
    let numero= num.toString()
    for(let i= numero.length-1;i >=0;i--){
        if(numero[i]>0){
            suma +=2**j
        }
        if(numero[i]>1|| typeof num =="string")return "introduzca un numero binario"
        j++
    }
    
    return suma
}
//    +0+1
console.log(BinarioADecimal(101))
let num="1510"
console.log(num.length); */

function DecimalABinario(num) {
    let array=[]
    
    //dividir num hasta que sea mayor >1
    if(num ==0)return 0
    while(num>=1){
        array.unshift(num % 2)
        num =Math.floor(num / 2)
    }
    
    return array.join("")
}

console.log(DecimalABinario(11));