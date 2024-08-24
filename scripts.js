// let first = prompt("Enter number");

// if (first % 5 === 0) {
//   console.log("Multiple of Five");
// } else {
//   console.log("Not multiple of five...");
// }
2; //write a code which can given grades to students according to their scors
// let score = 75;
// let grade;
// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// }

// console.log("According to score your grades was:", grade);
//CHAPTER 3 LOOPS AND STRINGS///
// for (let i = 0; i <= 100000; i++) {
//   console.log("Afroz");
// }

// console.log("loops has ended");

//write a code addtion 1 to 100
//using for loops//
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log("Total sum 1to10:", sum);
//using while loops 1 to 10 sum
// let i = 1;
// let sum = 0;
// while (i <= 10) {
//   i++;
//   sum += i;
// }
// console.log("total sum:", sum);
//LETS PRACTICES QUESTION
//1. print all the Even number 0 to 100;

// for (let count = 0; count <= 100; count++) {
//   if (count % 2 === 0) {
//     console.log(count);
//   }
// }
// for (let count = 0; count <= 100; count++) {
//   if (count % 2 !== 0) {
//     console.log("Count :", count);
//   }
// }
//2.

// let gamenumber = 35;
// let User_number = prompt("enter user number");
// while (gamenumber != User_number) {
//   User_number = prompt(" enter  again u are wrong number");
// }
// console.log("y are right number y win");
//replace() method/
// let str = "hellow";
// let newstr = str.replace("h", "y");
// console.log(newstr);
//charAt() method//
// let number = "1234567890";
// let newind = number.charAt(4); //5
// console.log(newind);

//question//
// let user_Name = prompt("Enter full name");
// console.log(user_Name);
// let user = "@" + user_Name + user_Name.length;
// let user = "@" + user_Name.concat(user_Name.length);

// console.log(user);
//LECTURE-4 ARRAY IN JS//
//for in loops
// let heros = ["hulk", "spiderMan", "superMan", "shaktiMan"];

// for (let ind = 0; ind < heros.length; ind++) {
//   console.log(heros[ind]);
// }
//for of
// for(let el of heros){
//     console.log(el)
// }
//practics question//

// let Marks = [20, 40, 50, 90, 40];
// let sum = 0;
// for (let val of Marks) {
//   sum += val;
// }
// console.log(sum);
// let avg = sum / Marks.length;
// console.log(`the total average sum ${avg}`);

1; //
// let items = [200, 400, 600, 300, 500];
// let i = 0;
// for (let itms of items) {
//   let offer = itms / 20;
//   items[i] = items[i] - offer;
//   console.log(`value after ${items[i]}`);
//   i++;
// }

2; //
// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items);

//array methods in js
let companies = ["Bloomberg", "uber", "IBM", "GOOGLE", "Microsoft", "Netflix"];
//1 Remove the first companies in an array
// console.log(companies);
// let final = companies.splice(0, 1);
// console.log(final);
// console.log(companies);
//2.............. Remove the uber and add the ola at this place in array;.................
// let final = companies.splice(1, 1, "ola");
// console.log(final);
// console.log(companies);
//3*********** add the Amazon to the end***************//
// let addi = companies.push("Amazon");
// console.log(addi);
// console.log(companies);
// console.log("g" * 3);
// function Multi(a, b) {
//   return a * b;
// }

// let Final = Multi(9, 12);
// console.log(Final);

// let a = 25;
let b = sqrt(456);
console.log(b);
