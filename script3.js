// const abcd = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("sucess");
//     }, 3000);
//   });
// };
// abcd()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(() => {
//     console.log("rejected", err);
//   });
// //////
// function Asynfun() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("data1");
//       res("sucess");
//     }, 3000);
//   });
// }
// function Asynfun1() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("data2");
//       res("sucess");
//     }, 3000);
//   });
// }
//callback Hell///
// console.log("getting data 1");
// Asynfun().then((res) => {
//   console.log("geting data2");
//   Asynfun1().then((res) => {
//     // console.log(res);
//   });
// });

//promise chainng//
function getdata(data) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("data1", data);
      res("sucess");
    }, 4000);
  });
}
getdata(1).then((res) => {
  console.log("getting data 2..");
  getdata(2).then((res) => {
    console.log("getting data 3...");
    getdata(3).then((res) => {});
  });
});
