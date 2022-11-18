/* function nFactorial (n) {
	var total = 1; 
	for (let i=1; i<=n; i++) {
		total *= i; 
	}
	return total; 
}

console.log(nFactorial(5)); */
//  5! = 5 * 4! 
//  4! = 4 * 3!


/* function nFibonacci(n) {
    if(n==0) return 0
    if(n==1) return 1
 
    return nFibonacci(n-2)+ nFibonacci(n-1)
 }
 
 console.log(nFibonacci(2));
 
// 0      1      1      2      3      5      8      13      21      34      55      89      144  
 */
function nFibonacci(n) {
   
        let arr = [0, 1];
        for (let i = 2; i < n + 1; i++){
          arr.push(arr[i - 2] + arr[i -1])
        }
       return arr[n]
      }

console.log(nFibonacci(4));






