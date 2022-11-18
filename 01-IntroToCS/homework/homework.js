'use strict';

function BinarioADecimal(num) {
   let resultado=0
    let binario = num.toString().split("").reverse()
    for(let i=0; i<binario.length; i++){
        if(binario[i]==1){
            resultado += 2**i
        }
    }
return resultado
}



/* function DecimalABinario(num) {

    let array=[]
    while(num>=1){
        
        array.unshift(num %2)
        num= Math.floor(num/2)
    }
    
    return array.join("")
}
console.log(DecimalABinario(11)); */

function DecimalABinario(num) {
    let array=[]
    if( num <=1) return num
    console.log(num);
    let hola =0
    hola +=Math.floor(num/2) +DecimalABinario(num)
    
    return num
}



console.log(DecimalABinario(11))

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
