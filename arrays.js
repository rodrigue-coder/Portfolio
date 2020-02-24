/*
let arr = [1, 2, 3, 4, 5]

function printAllItems(arr) {
  console.log(arr.length)
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i}: ${arr[i]}`)
  }
}
printAllItems(arr)

let arr = [1, 2, 3, 4, 5]
let newArray = []

function doubleArray(arr) {
  /* initialize some variable*/
  for (let i = 0; i < arr.length; i++) {
    /* update the variable*/
    newArray[newArray.length] = arr[i] * 2
    console.log(newArray[i])
  }
}
doubleArray(arr)

/*
let arr = [1, 2, 3, 4, 5]

// Check if array has at leat one even number

function isEven(num) {
  return num % 2 === 0
}

function isOdd(num) {
  return num % 2 != 0
}
console.log(arr.every(isEven))

//Check if all items are even

// Return an array of even numbers, or an empty one

let evenNumbers = arr.filter(isEven)
console.log(evenNumbers)

let oddNumbers = arr.filter(isOdd)
console.log(oddNumbers)

console.log(arr.filter(isEven))

Sum numbers together

function Sum(arr) {
  return num(arr)
}
console.log(Sum(arr))

Get even numbers, square them, then add them together

let evenNumbers = arr.filter(isEven)
let square = evenNumbers * 2
