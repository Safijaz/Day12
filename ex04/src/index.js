// Only change code 
function sumFibonacci(num) {

    if (num<0) return 0;

    var fib = [1,1];
    var n=1;

    while(true) {
        var next = fib[n]+fib[n-1];
        if (next>num) break;
        n=n+1;
        fib[n]=next;
    }

    var sum = 0;    
    for (i=0;i<fib.length;i++) {
        
        if (fib[i]%2==1) sum=sum+fib[i];
    }
    return sum;

}
// Only change code above this line 
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
