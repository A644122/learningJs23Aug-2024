//learning function in javascript///
//block of code thats performs   a specifics task can be invoked whenever needed
// function Abcd() {
//   console.log("hello function");
// }
// Abcd();
// Abcd();
// Abcd();
// Abcd();
// Abcd();
// function some(msg) {
//   //parameter->input
//   console.log(msg);
// }
// some("I love Developer"); //Argument

// function 2 number
// function add(a, b) {
//   c = a + b;
//   return c;
// }
// console.log(add(20, 6));
//.....................ARROW FUNCTION.................
// const Sum = (a, b) => {
//   //local variables acts a,b //
//   //block scop//
//   adds = a + b;
//   return adds;
// };
// let Fn = Sum(30, 40);
// console.log(Fn);
//Practice question
1; //create a function using function Keywords that take a string an a argument &return the number of vowels in the string;
// function Vowel(str) {
//   let count = 0;
//   for (const chart of str) {
//     // console.log(chart)
//     if (
//       chart === "a" ||
//       chart === "e" ||
//       chart === "i" ||
//       chart === "o" ||
//       chart === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// let Ans = Vowel("apnacollage");
// console.log(Ans);
//......................arrow function  .solve this problems........................
// const AllVowels = (str1) => {
//   let num = 0;
//   for (const chat of str1) {
//     if (
//       chat === "a" ||
//       chat === "e" ||
//       chat === "i" ||
//       chat === "o" ||
//       chat === "u"
//     ) {
//     }
//     num++;
//   }
//   return num;
// };
// const F_result = AllVowels("apnacollage");
// console.log(F_result);

const mult = (a, b) => {
  return a * b;
};
mult(20, 5);

function cdes(a, b) {
  c = a + b;
  return c;
}
let callback = cdes(2, 3, mult);
console.log(callback);

let number = [1, 2, 3, 4, 5];
number.forEach((val) => {
  let a = val * val;
  console.log(a);
});

//map()
const Result = number.map((val) => {
  let sum = val * 5;
  return sum;
});

console.log(Result);
//Filter// //
const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const Filte_Number = nums.filter((val) => {
  let F = val % 2 === 0;
  //   let F = val <= 6;

  return F;
});
console.log(Filte_Number);
console.log(nums);
//REDUCE METHOD//
let arr = [1, 2, 3, 4];
const Multi = arr.reduce((pre, curr) => {
  return pre * curr;
});
console.log(Multi); //24

// console.log("64" / 6);
// let temperature = 25.5;
// console.log("celsius " + temperature);
// console.log(`kelvin= ${temperature}+ ${273}`);
// console.log("kelvin=", "273" + temperature);
//Pactice question//
//1. we are give array of marks of students.Filter out of the marks od students that scor 90+//
let Marks = [90, 30, 80, 70, 50, 40, 100];

const mark = Marks.filter((val) => {
  return val < 70;
});
console.log(mark);

//2.Take a number n as input from user.creat an array of numbers from 1 to n;
//a. use the resuce method to calculate the sum of all number in  array//
//b.//use the reduce method to calculate the  product of all number in the array?
let n = prompt("enter user number: ");
let arr1 = [];
for (i = 1; i <= n; i++) {
  arr1[i - 1] = i;
}

const TotalSumArray = arr1.reduce((prev, cur1) => {
  return prev + cur1;
});
console.log(TotalSumArray);

// const TotalProducArray=arr.map((val)=>{
//   return val*val;
// });
// console.log(TotalProducArray)
