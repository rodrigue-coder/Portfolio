setTimeout(handler, 1000)
clearInterval(id)

function handler() {
  console.log('One second has passed')
  return 42
}

let response = $.get
