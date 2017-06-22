function isPrime(x){
  for (var i=2;i<x;i++){
    if( x%i=== 0 ){
      return false;
    }
  }
return true;
}

console.log(isPrime(9))
