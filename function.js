// function function name(params) {
    
// }

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Did parents allow you?');
//     }
//   }

// function checkAge(age) { 
//     return(age > 18)? true: confirm('Did parents allow you?');

// }

// let x = 3;
// let y = 2;

// function pow(x, n) {
//     let result = x;

//     for(let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;

//   }
//   console.log(pow(x, y))
//   console.log(pow(2, 3))
//   console.log(pow(2, x * y))
//   console.log(pow(y))


//Write a function pow(x,n) that returns x in power n. Or, in other words, 
//multiplies x by itself n times and returns the result.
// let x = 3;
// let y = 2;

// function pow(x, n) {
//     let result = x;

//     for(let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;

//   }
//   console.log(pow(x, y))
//   console.log(pow(2, 3))
//   console.log(pow(2, x * y))
//   console.log(pow(1, 100))
//   console.log(pow(0, 2))
//   console.log(pow(-3, 2))
//   console.log(pow(5, 0))

// funtion Prova(a) {
//     var greeting = "Hi My name is" + a;
//     return greeting;

// }
// var name = "Rodrigue";
// console.log(testExample("Nick"));


// /(function() {
//     var greeting = "Hi! My name is Rodrigue";
//     console.log(greeting);
//     ())
// }
//  //fullNameMaker(John, Doe)



 let myAdder = function(num1, num2) {
     let added = num1 + num2
     return added
 }

let result = myAdder(3, 5)
console.log(result);