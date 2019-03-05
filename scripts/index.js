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

// squareNumbers function takes an array of numbers and returns a new array with the result of each number sqaure
function squareNumbers(array) {
    let result = array.map(function (num){
        return num * num;
    })
    return result;
}

// console.log(squareNumbers([1, 2, 3, 4, 5, 6]));

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
    ];

// coldCity function takes in an array of cities and its temperature and returns the ones that are colder than 70 degrees
function coldCity(array) {
    let result = array.filter(function (city){
        return city.temperature < 70;
    })
    return result;
}

// console.log(coldCity(cities));

// nameCity function takes in array of cities and temperatures and returns an array of city names only
function nameCity(array) {
    let result = array.map(function (city) {
        return city.name;
    })
    return result;
}

// console.log(nameCity(coldCity(cities)));

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
    ];

// goodJob function takes an array of names and returns "Good Job, name!" on a line
function goodJob(array) {
    array.forEach(function (name){
        console.log(`Good Job, ${name}!`);
    })
}

// goodJob(people);

// call3Times function to print Hello, world! three times
function helloWorld(){
    console.log("Hello, world!");
}

function call3Times(fun) {
    fun();
    fun();
    fun();
  }

// call3Times(helloWorld);

// callNTimes function takes two arguments (time and fun) and completes the function n times
function callNTimes(time, fun) {
    let i = 0;
    while(i < time){
        fun();
        i++;
    }
}

// callNTimes(7, helloWorld);

// strMultiply function takes in str and times to return a string n times
function strMultiply(str, time) {
    let baseStr = str;
    for(let i = 1; i < time; i++){
        str += baseStr;
    }    
    return str;
}

// console.log(strMultiply("testLOL", 6));

