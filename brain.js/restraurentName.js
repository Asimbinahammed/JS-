
const { NeuralNetwork } = require('brain.js'); 
const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

// input: { Monday, Tuesday, Wednesday, etc. }
// output: { Restaurant1, Restaurant2 }

const trainingData = [];

for (let restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
        input: { [dayOfWeek]: 1 },
        output: { [restaurantName]: 1 }
    });
}

const net = new NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({ 'Monday': 1 }));

function restaurantForDay(dayOfWeek) {
    const result = net.run({ [dayOfWeek]: 1 });
    let highestValue = 0;
    let highestRestaurantName = '';
    for (let restuarantName in result) {
        if (result[restuarantName] > highestValue) {
            highestValue = result[restuarantName];
            highestRestaurantName = restuarantName;
        }
    }
    
    return highestRestaurantName;
}

console.log(restaurantForDay('Monday'));
console.log(restaurantForDay('Tuesday'));
console.log(restaurantForDay('Wednesday'));
console.log(restaurantForDay('Thursday'));
console.log(restaurantForDay('Friday'));
console.log(restaurantForDay('Saturday'));
console.log(restaurantForDay('Sunday'));

//reverse
for (let day in restaurants) {
    const restaurantName = restaurants[day];
    trainingData.push({
        input: { [restaurantName]: 1 },
        output: { [day]: 1 }
    });
}

const netReverse = new NeuralNetwork({ hiddenLayers: [3] });

const statsReverse = netReverse.train(trainingData);

console.log(stats);

console.log(net.run({ 'Monday': 1 }));

function day(restaurants) {
    const result = net.run({ [restaurants]: 1 });
    let highestValue = 0;
    let highestDay = '';
    for (let dayOfWeek in result) {
        if (result[dayOfWeek] > highestValue) {
            highestValue = result[day];
            highestDay = day;
        }
    }
    
    return highestDay;
}

console.log(restaurantForDay('Brilliant Yellow Corral'));
console.log(restaurantForDay('Owls'));