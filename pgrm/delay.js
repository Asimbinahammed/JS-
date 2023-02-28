// // function delayTimer(){
// //     return setTimeout("hello", 3000);
// // }
// console.log("s");
// setTimeout("sdds", 10000)
// //var s = delayTimer(3000);
// console.log("s");

// console.log("before setTimeout");

//  //delay is in milliseconds 

//    console.log("after setTimeout");
//    console.log(inputTimer(3000));

//    function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

// delay(5000);
// console.log("hello");
// delay(3000);
// console.log("hai")


// var timerDelay = 3000;
// console.log("after 3sec");
// // setTimeout(myFunction, timerDelay*3);
// console.log("after ? sec");
// function myFunction(){
//   console.log("after 3sec");
// }

// function delayFunction(inputTimer){
//    setTimeout(myFunction,inputTimer);
// }
// delayFunction(3000);
// console.log("all good togo");

function timeoutFunction(inputTimer){
  setTimeout(() => {}, inputTimer);
}

timeoutFunction(5000);