function max(a, b) {
  if (a > b) {
    return (a)
  } else {
    return (b)
  }
}

function maxOfThree(n1,n2,n3){
  var arr=[]
  arr.push(n1,n2,n3)
  console.log(arr)
  var large=0

  for (var i=0; i<arr.length; i++){
  large=max(large,arr[i])
  }
  console.log(large)
}

maxOfThree(4,5,6)
