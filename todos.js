// c = create
// R = read / retrieve
// U = update
// D = delete

let todos = [
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Seek for a job', completed: false },
  { id: 3, text: 'Forget everything' }
]

function showTodos() {
  let html = (
    <ul>
      $
      {todos.map(todo => {
        return `<li>${todo.text}</li>`
      })}
    </ul>
  )
  return html
}
