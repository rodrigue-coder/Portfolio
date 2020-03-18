const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 3000
const STATUS_CREATED = 201
const STATUS_NO_CONTENT = 204
const STATUS_NO_FOUND = 404

const app = express()

let todos = [
  { id: 1, text: 'Learn Javascript', done: true },
  { id: 2, text: 'Seek for a job', done: false },
  { id: 3, text: 'Forget everything' }
]

// GET http://localhost:3000/todos
app.get('todos', (request, response) => {
  response.json(todos)
})

// GET http://localhost:3000/todos/2

app.get('/todos/:id', (request, response) => {
  let id = +request.params.id
  let index = findIndex(id)
  const todos = todos[index]
  response.json(todo)
})

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))

// function findIndex(id) {
//   let index = -1
//   for (let i = 0; i < todos.length; i++) {
//     let todo = todos[i]
//     if (todo.id === id) {
//       return i
//     }
//   }
//   return -1
// }

function findIndex(id) {
  return todos.findIndex(todo.id === id)
}
