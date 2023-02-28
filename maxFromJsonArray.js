const abalone = require('./data/abalone.json');

// console.log(abalone);
// console.log(require('./data/abalone.json'));

function sexToNum(sex){
    switch (sex){
      case 'F': return 0;
      case 'M': return 1;
      default: return 0.5;    
    }
}

var rings = abalone.map(x => x.rings);
console.log(Math.max(...rings));
//console.log(maxLength(...abalone));

