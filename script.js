// let and const//
// let and const es6 ka hai//
// lett and const ka kaam alag alag hai//
// let and const ye dono window me add nahi karta//
// let me ham value baad me v assign kar sakte hai//
// let a; ye hame error nahi dega//
// const me ham -> const a; karne par Erron dega SyntaxError: Missing initializer in const declaration
// const a;

// Tempeleted Literals Backticks//
//  "hey  2+3 is 4 and 4+5 is 9"
//  console.log("hey +: 2+3 is 4 and 4+5 is 9" + 3+4)
// console.log("9" +2+2);
// console.log(` the sum of two number is: ${10+5} `)
//DEFAULT PARAMETERS//
// function abcd(para=0){
//     console.log(para);

// }
//abcd(10);//10
//abcd(110);//110
//abcd();//undefine but muje undefine nahi chahiye taab ham parameter me 0 pass kar sakte hai
// abcd();
// REST OPERATORS//

// var A=[1,2,3,4,5];
// console.log(A)
// var B=[...A];
// console.log(B);

// REST OPERATORS Function me kaise kaam karta hai//

//  Mai helo name ka function bannaya hai aur ish parameters me a,b,c three parameters pass kia hai but Arguments me main ne 1,2,3,4,5,6,7,8,9 pass kia hai .To mujh srif a,b,c ka he value melega aur baki ke value ko IgNORE KAR DEGA But mai chahta hu ke mujhe baki ke value v mele to mai spread operator ki help se kar sakta hu aur d ek array hai
// function helo(a,b,c,){
//     console.log(a,b,c)
// }
// helo(1,2,3,4,5,6,7,8,9);
// function helo(a,b,c,...d){
//     console.log(a,b,c,d)
// }
// helo(1,2,3,4,5,6,7,8,9);

//DESTRUCTURE STNTEX  ...//

// ARRAY DESTRUCTURE///
/*let number=[1,2,3,4,5];
let [a,b,c,d]=number;

console.log(number[a])
console.log(number[b])
console.log(number[c])
console.log(number[d]) */

// OBJECT DESTRUCTURE///
// Multible comments here///
/*

let obj1={
         name:"Afroz",
     age:20,
     addres:"Kishanganj Bihar",
     Desigination:"Software developer"
 }
 console.log(obj1)

 let {name,age,address,Desigination}=obj1;
  console.log(obj1.name);
 console.log(obj1.age);

console.log(obj1.addres);
   console.log(obj1.Desigination)

*/

// let obj2 ={
//     d:'10',
//     e:'20',
//     f:'30'

// }
// console.log(obj2)//
// PROMISSES//
// Basically promises used krte hai future ke lia samaj lo//
// promises me basically three state hota hai 1.then() 2.catch()3.pending state//
// 1.then() tavi chalega jaab promisses poora hoga  to resolve chalega//
//2.catch tavi chalehga jaab promise reject hoga//
// pending jaab kuch v nahi hoga tab wo pending me rhega//
//Promises ko mai ek variable me store kar leta hu jaise ke Ans//
// Exapmle//
/*
   var Ans=new Promise((res,rej)=>{
    var a=10;
    if(a==100){
        return res("This is a resolve parameter hu");
    }
    else{
         return rej(" Mai reject parameter hu")
    }
  });
  Ans.then((data)=>{
    console.log(`${data}`)

  }).catch((data)=>{
    console.log(`${data}`);
  }).finally("finally i complete my promises!");
 */
//  let randomnum=Math.random();
//  console.log(randomnum)
//  let randomnum1= Math.floor(Math.random()*10);

//  console.log(randomnum1);
/*
 var ans=new Promise((res,rej)=>{
    let randomnum1= Math.floor(Math.random()*10);
    if(randomnum1 > 5){
       return  res("avobe 5 number Digits   print");
    }else{
        return rej("This Below 5 digit numbe ")
    }
    
 }).then((data)=>{
    console.log(`${data}`);
 }).catch((data)=>{
    console.log(`${data}`);
 })
 */
// 2.Example//
// Question
// sab se phaile ghar aoo//
//fir gate kholo aur gate lagao //
// khana pakao aur khana lago//
// Ten minute phone chalo fir sojao//
/*
var Ans=new Promise((res,rej)=>{
    return res("sab se phaile ghar aoo")
   
});


 var P1= Ans.then((data)=>{
    console.log(data);
   return  new Promise((res,rej)=>{
        res("fir gate kholo aur gate lagao")
    })
  

});
 var p2=P1.then((data)=>{
   console.log(data)
  return  new Promise((res,rej)=>{
        res("khana pakao aur khana lago")

    })
})

 p3=p2.then((data)=>{
    console.log(data);
    return new Promise((res,rej)=>{
        res('Ten minute phone chalo fir sojao')
    })
})
p3.then((data)=>{
    console.log(data)
})
*/
// Synchronouse ka matlab hota hai one by one code chalega mere for example//
/*var a="hwllo world";
console.log(a);

var b=100;
console.log(b)
function abc(a,b){
    return a*b
    
}
console.log(abc(10,30))
function abcd(a,b){
    return a+b

}
console.log(abcd(10,20))
// Asynchronouse code//
const name="first name Md afroz";
console.log(name);
function timelega(a,b){
    total= a+b;
    console.log(`the total sum a,b is ${total}`);
    setTimeout(() => {
        console.log("Google")
        
    }, 2000);
    return total
}
console.log(timelega(10,5))
const sume="10" +10;
console.log(sume)


//Promises//
// function fooo(){
//     fetch('https://randomuser.me/api/')
//     .then(function(rawdata){
//        return rawdata.json();

//     }).then((data)=>{
//         console.log(data)

//     })
// }
// console.log(fooo());

 
// Asyn Await///
// jab v ham asyn code likhte hai  tab ham ko wait karna padhta hai and  to hame pata nahi hota hai ke wo kab aayega   

 async function fooo(){
  let rowdata =await fetch('https://randomuser.me/api/');
   let ans= await rowdata.json()
   console.log(ans)
   
}
console.log(fooo());
// TRY AND CATCH();

// javascript ek interpriter language hai aur code one bye one chalti hai//
// Muje nahi pta error ayega ya nahi ayega but mujhe error bta dena//

console.log("Hey");
try{
    console.log(heyyyyyyyyyy);

}
catch(err){
    console.log("Hellow");
}
    */
//javascript question interview//

// console.log(a);
console.log(name);
let name;
// /HOF//

function abcd(card) {}
abcd();
