function isPrime(x){
  for (var i=2;i<x;i++){
    if( x%i=== 0 ){
      return false;
    }
  }
return true;
}

//console.log(isPrime(9))

function primes(max){
  var arr=[]
  var counter=1
  while (arr.length<=max){
    if (isPrime(counter)){arr.push(counter)}
    counter+=1
  }
  return arr
}

console.log(primes(10))
