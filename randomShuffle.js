var newArray = [1,3456,7776,4545,4554,6767,56];

var shuffledArray = newArray.sort(()=>0.5 - Math.random());
console.log(shuffledArray);

const abalone = require('./pgrm/data/abalone.json');
var shuffledArray = abalone.sort(()=>0.5-Math.random());
console.log(shuffledArray);