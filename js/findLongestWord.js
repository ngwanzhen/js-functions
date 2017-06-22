function findLongestWord (arr) {
  var ans = arr.reduce(function (re, x, i, ar) {
    if (re.length < x.length) { re = x }
    return re
  }, arr[0])
  return ans
}

console.log(findLongestWord(['The', 'quick']))
