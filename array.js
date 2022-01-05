// An array can hold more than one value


const cars = ['maruti', 'hyundai', 'honda', 'tata', 'mahindra', 'skoda', 'ford', 'mg']

const bikes = ['hero' ,'bajaj', 'yamaha']

/*array methods*/

// array to string
console.log(cars.toString())

 // act like string but we can add any separator.
console.log(cars.join("+"))

//remove last element from array
console.log(cars.pop())

//suzuki will add in the array (end position)
console.log(cars.push("suzuki"))

// shift removes the first array element and shift all other element one index back
console.log(cars.shift())

console.log("car_shift_name:", cars)

//unshift add new element in the array at the beginning
console.log(cars.unshift("tesla"))

console.log("cars_unshift_name:",cars)

//length can give you the element by the index number
console.log(cars.length = "4")
console.log(cars)

//concat create new array by mergine two existing array
console.log(cars.concat(bikes))

//splice methode used to add new items in an array
console.log(bikes.splice(0,3, 'ducati', 'spelender'))
console.log(bikes)

//slice the part from the given index
console.log(bikes.slice(2))
console.log(bikes)



/*array Sort*/

//sort method sorts array alphabetically
console.log(bikes.sort())
console.log(bikes)

//reverse the element in the array
console.log(cars.reverse())
console.log(cars)