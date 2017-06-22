console.log('linked to my html')

function cleanStr (str) {
  str = str.replace(/[,!@#?$%^&*~]/, '').replace(/\s/, '').toLowerCase()
  console.log(str)
}

cleanStr('Ap !ple')

function pausecomp (millis) {  var date = new Date()
  var curDate = null
  while (curDate - date < millis) {    curDate = new Date()
  }
}

//  pausecomp(10000)
