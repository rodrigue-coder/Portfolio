function generateError() {
  //here
  //let connection
  try {
    console.log('Before errors')

    // here there will be errors...
    lalala

    console.log('After errors')
  } catch (err) {
    console.log('Error:', err)
  } finally {
    console.log('Finally!')
    if (connection != null) {
      connection.close()
    }
  }
  //here
  console.log('After the try block')

  try {
    console.log(sum('1', '2'))
  } catch (err) {
    throw new Error('Values should be numbers-à-')
  }
  function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      let error = new Err('values should be numbers')
      throw error
    }
    return a + b
  }
}
