const vector = [1,3,34,56,76,79,66];

const evenNumbers =  vector.filter(x => x%2===0).map(x => x/2);
console.log(evenNumbers);


function oneLine(arr) {
    return arr.filter(x => x%2===0).map(x=>x/2);
}

console.log("New array is ", oneLine(vector));
