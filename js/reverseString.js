function reverseString(num){
  var arr=num.split("")
  var revarr=[]
  arr.map(function(x){revarr.unshift(x)})
  revarr=revarr.join('')
  return revarr
}

console.log(reverseString("jet star"))
