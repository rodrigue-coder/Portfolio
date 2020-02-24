const arr = ['hello', 'world', 'how', 'are', 'you']

const arr = ['hello', 'world']
const firstItem = arr[0]
const lastItem = arr[1]
const thirdItem = arr[2]

//same with
// can also start with (let)

const [firstItem, lastItem, thirdItem] = arr

const [firstItem, secondItem, ...rest] = arr

const clone = arr.slice(0)

const obj = { a: 1, b: 2, c: 3 }
let a = obj.a
let b = obj.b

AbortController
