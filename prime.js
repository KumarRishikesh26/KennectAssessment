/*
to check x is prime or not, then
to find difference between next prime and x
*/


function isPrime(num) {
    let temp = 0;
    for(let i=1;i<=num;i++) {
        if((num%i)==0){
            temp++;
        }
    }
    if(temp==2){
        console.log(num+' is a prime number ');
    } else {
        console.log(num+' is not a prime number ');
    }
}

function nextPrime(num) {
    num++;
    for(let i=2;i<num;i++) {
        if(num%i==0){
            num++;
            i=2;
        } else {
            continue;
        }
    }
    let difference = num-x
    console.log('Difference between next prime('+num+') and X is '+difference);
}

// input x, we can also use prompt() method to take input from user
let x = 4;

//base case
if(x<=1){
	console.log(x+' is not a prime number');
	console.log('Difference between next prime and X is '+(2-x));
} else {
    isPrime(x); // to check prime or not
    nextPrime(x); // to find next prime
}