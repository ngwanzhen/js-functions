function sillySum(arr){
  var ans=arr.reduce(function(re,e,i,ar){
    re+=e*i
    return re
  },0)
  return ans
}

console.log(sillySum([1,2,3]))
