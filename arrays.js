var places = ["Scotland", "New Zealand", "Japan", "Bhutan"]
var birthDates = [1988, 1990, 1984, 1956]
var wullyBooleans = [3 < 9, 10 > 5, 6 > 2, 1 > 0]

//This will remove the last element "Bhutan" from the array 
places.pop()
console.log(places)

//This will add 1932 as the last birthDate in the array
birthDates.push(1932)
console.log(birthDates)

//This will remove the first boolean in the array
wullyBooleans.shift()
console.log(wullyBooleans)

//In the variable places, Scotland is 0, New Zealand is 1, Japan is 2, Bhutan is 3

//console.log(birthDates(2)) = 1984 
console.log(birthDates[2])

//console.log(wullyBooleans(0)) = 3 < 9 (True)
console.log(wullyBooleans[0])