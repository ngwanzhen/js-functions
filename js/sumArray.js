function sumArray(arr){
  var ans=arr.reduce(function(re,e,i,ar){
    re+=e
    return re
  },0)
  return ans
}

console.log(sumArray([1,2,3,4,5]))
