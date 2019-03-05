// add your solutions here
// implementing functions without a for and while loop

// positiveNumbers function takes an array of numbers and returns a new array with only positive numbers
function positiveNumbers(array) {
    let result = array.filter(function (num){
        return num >= 0;
    })
    return result;
}

// console.log(positiveNumbers([1, 2, 3, -5, -6, -7, 10]));

// evenNumbers function takes in an array of numbers and returns a new array containing only the even numbers
function evenNumbers(array) {
    let result = array.filter(function (num){
        return num%2 == 0;
    })
    return result;
}

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, -8, 10]));

