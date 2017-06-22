
function letterCount(word){
  word=word.replace(/[!,&@.]|_/g, "").replace(/\s/g, "")
  // console.log(word)
  var arr=word.split("")
  var tempArr=word.split("")

 var counter=0
 var ansObj={
   alpha: [],
   counter: []}

 function count(letter){
  for (var i=0; i<arr.length; i++){
    if (tempArr.indexOf(letter) !== -1){
      tempArr.splice(tempArr.indexOf(letter),1)
      counter++
    }
   else if (tempArr.indexOf(letter) == -1){ }
  }
  ansObj.alpha.push(letter)
  ansObj.counter.push(counter)
  // console.log(ansarr)
  counter=0
}

arr.map(count)
//console.log(ansObj)

for (var j=0;j<arr.length;j++)
if (ansObj.counter[j]!==0) {
console.log (ansObj.alpha[j] + "-" + ansObj.counter[j])}
}

console.log(letterCount("a&p,p l.e!"))
