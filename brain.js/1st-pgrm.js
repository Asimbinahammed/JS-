//input 0 0, output 0
// input 0 1, output 1
// input 1 0, output 1
// input 1 1, output 0


const { NeuralNetwork } = require('brain.js');


const trainingData = [
 { input: [0, 0], output: [0] },
 { input: [0, 1], output: [1] },
 { input: [1, 0], output: [1] },
 { input: [1, 1], output: [0] }
];

const net = new NeuralNetwork({ hiddenLayers: [2, 2] });
//const net = new brain.NeuralNetwork({ hiddenLayers: [2, 2] });

net.train(trainingData);


console.log(net.run([0, 0]));
console.log(net.run([0, 1]));
console.log(net.run([1, 1]));
console.log(net.run([1, 0]));
console.log(net.run([5, 3]));

//2nd page

net.train(trainingData, {
    log: (error) => console.log(error),
    logPeroid: 1000000000000
 });