var arrOfArr = (
    [
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1]
    ]
  )

function flattenArr(arr){
  var flatArr=[]
  for (var i=0; i<arr.length; i++){
    flatArr=flatArr.concat(arr[i])
  }
  return flatArr
}

console.log(flattenArr(arrOfArr))
