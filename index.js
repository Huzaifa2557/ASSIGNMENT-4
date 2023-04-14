 console.log("=================TASK 1==================");



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumofevennumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}
const EvenNumbers = sumofevennumbers(array);
console.log(EvenNumbers);

// output 30 



console.log("=================TASK 2==================");
function NumberofVowels(string) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        count++;
      }
    }
    return count;
  }
  const string = "Hello Beautifull World";
  const numVowels = NumberofVowels(string);
  console.log(numVowels);

  //output 8 


  console.log("=================TASK 3==================");
  let arrays = ["Html", "css", "Javascript", "Boostrap"];

function getLongestStr(arr) {
  let longestStr = {
    string: "",
    length: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestStr.length) {
      longestStr.string = arr[i];
      longestStr.length = arr[i].length;
    }
  }
  return longestStr;
}
let longestString = getLongestStr(arrays);
console.log(
  `
 Longest Array is"${longestString.string} & thier length is ${longestString.length}"
  `
);

// output Longest Array is"Javascript & thier length is 10"

console.log("=================TASK 4==================");

function calculateAverages(numbers){
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
     sum += numbers[index]
    
  }
    return sum/ numbers.length
}


const numbers = [3,2,5,9,8,7,];
const average = calculateAverages(numbers);
console.log("Average of all the numbers in array is "+average);

// output Average of all the numbers in array is 5.666666666666667

console.log("=================TASK 5==================");


function getObjectKeys(obj) {
  return Object.keys(obj);
}
const myObj = {
  name: 'M.Huzaifa',
  age: 20,
  city: 'Karachi'

};

const keys = getObjectKeys(myObj);
console.log(keys); // Output: ["name", "age", "city"]
 

// output [ 'name', 'age', 'city' ]

console.log("=================TASK 6==================");


function getValuesByKey(array, key) {
  let values = [];

  for (let i = 0; i < array.length; i++) {
    let value = array[i][key];
    values.push(value);
  }

  return values;
}

let Obj = [
  { name: "Huzaifa", age: 19 },
  { name: "Saad", age: 23 },
  { name: "Talha", age: 20 },
];
let result = getValuesByKey(Obj, "name");
console.log("THis is an Array List Key--------------------" +result +"--------------------"); 

//output THis is an Array List Key--------------------Huzaifa,Saad,Talha--------------------

console.log("=================TASK 7==================");


function getUniqueStrings(array) {
  return [...new Set(array)];
}
const myArrays = ['Pakistan', 'America', 'Phalestine', 'Saudi arabia', 'Europe'];
const uniqueStrings = getUniqueStrings(myArrays);
console.log("Here are some Unique  Arrays===" +uniqueStrings);

// output Here are some Unique  Arrays===Pakistan,America,Phalestine,Saudi arabia,Europe


console.log("=================TASK 8==================");

function calculateProduct(numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
}
const arr = [1, 2, 3, 4, 5,6,7,8,9];
const product = calculateProduct(numbers);
console.log("Product is =" +product);
 // Output Product is =15120
