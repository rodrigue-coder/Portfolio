/*
function b() {
  var myVar
  console.log(myVar)
}

function a() {
  var myVar = 2
  console.log(myVar)
  b()
}

var myVar = 1
console.log(myVar)
a()
console.log(myVar)
/*
//long running function
/*
function waitThreeSeconds() {
    vas ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
    }

    function clickHandler() {
        console.log('click event!');
    }

    //liste for the click event
    document.addEventListener('click', clickHandler);

    waitThreeSeconds();
    console.log('finished execution');
    */

/*
    var person = new Object();

person['firstname'] = 'Tony'
person['lastname'] = 'Alicea'

var firstNameProperty = 'firstname'

console.log(person)
console.log(person[firstNameProperty])

console.log(person.firstname)
console.log(person.lastname)

person.address = new Object()
person.address.street = 'via Assisi 40'
person.address.city = Turin
person.address.region = Piemont

console.log(person.address.street)
console.log(person.address.city)
console.log(person['address']['region'])
*/

//new way more faste to create an object

var person = {
  firstname: 'Rodrigue',
  lastname: 'Edjui',
  address: {
    street: 'via Assisi 40',
    city: 'Turin',
    region: 'Piedmont'
  }
}

function greet(person) {
  console.log('Hi ' + person.firstname)
}

greet(Rodrigue)

greet({})
console.log(person)
