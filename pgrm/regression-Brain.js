const abalone = require('./data/abalone.json');
const { NeuralNetwork } = require('brain.js');

console.log("length=> ",abalone.length);
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
var maxNumber = Math.max(...rings);
//console.log(maxNumber);

function divideEach(...arr){
  //  arr.map(x=>x.rings/maxNumber);
  // return newArray;
  return arr.map(x=>x.rings/maxNumber);
}

function preparedData(data){
  return data.map(row=>{
    var values = Object.values(row).slice(0,-1);
    values[0]= sexToNum(values[data.sex]);
    return {input: values, output:[row.rings/maxNumber]};
  })
}

function shuffleData(data){
  return data.sort(()=>0.5-Math.random());
}
// console.log(divideEach(...abalone));
// console.log(abalone);
//console.log(preparedData(abalone));
//console.log(shuffleData(preparedData(abalone)));

const split=(arr, trainRatio=0.75)=>{
var l = Math.floor(arr.length * trainRatio);
return { train:arr.slice(0,l), test:arr.slice(l)}
}
const prepared = split(shuffleData(preparedData(abalone)));
console.log(split(shuffleData(preparedData(abalone))).test);
console.log(split(shuffleData(preparedData(abalone))).train.length);
console.log(split(shuffleData(preparedData(abalone))).test.length);

const net = new NeuralNetwork();
net.train(prepared.train, {
  iterations: 500,
  logPeriod: 10,
  log: (str) => console.log(str),
});
let totalError = 0;
prepared.test.forEach(item => {
  const output = net.run(item.input);
  console.log(`Expected: ${item.output * 29} Predicted: ${output * 29}`);
  totalError += (output - item.output) ** 2;
});

console.log(totalError / prepared.test.length);