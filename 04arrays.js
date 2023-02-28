const vector = [1,3,34,56,76,79,66];
console.log(vector);
console.log(vector.length);

const evenNumbers = vector.filter(x => x % 2 ===0);
console.log(`evenNumbers are ${evenNumbers}`);

const sum = vector.reduce((prev, current) => prev + current , 0);
console.log("Sum is ", sum);

console.log("Descending order ",vector.sort((a,b)=> b-a));