let Url = "https://cat-fact.herokuapp.com/facts";
const p = document.getElementById("para");
const btn = document.querySelector(".btn");

console.log(p);
// let p = fetch(Url);
// console.log(p); //promise return krta hai//
// const getDataApi = async () => {
//   let response = await fetch(Url);
//   // console.log(response.json());
//   let data = await response.json();
//   console.log(data);
//   p.innerText = data[0].text;
//   // console.log(data[0].text);
// };
//promise chaining//
function getDataApi() {
  fetch(Url).then((res) => {
    return res.json().then((data) => {
      console.log(data);
      p.innerHTML = data[1].text;
    });
  });
}
btn.addEventListener("click", getDataApi);
