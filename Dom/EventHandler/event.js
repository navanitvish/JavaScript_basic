// let a = document.querySelectorAll("h1");
// a.addEventListener("click", function () {
//   a.style.backgroundColor = "red";
// });

// document.addEventListener("click", function () {
//   console.log("i am click on webpage ");
// });

// function print() {
//   console.log("Hi i am remove event listener");
// }
// document.addEventListener("click", print);
// document.removeEventListener("click", print);

// this is event object that is show the information of event who add into tag
// const content = document.querySelector("#web");
// content.addEventListener("click", function (event) {
//   console.log(event);
// });

// hamne yaha ek paticuler link ko rok diya event,preventDefualt laga kar
// let links = document.querySelectorAll("a");
// let thirdlink = links[2];
// thirdlink.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Maza aaya , achha laga");
// });

// eske  duara hamne ek div create kiya by javascript and ek function banaya js

// let myDiv = document.createElement("div");

// function paraStaus(event) {
//   console.log("para" + event.target.textContent);
// }
// myDiv.addEventListener("click", paraStaus);

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para" + i;
//   myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector("#article");
element.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN") {
    console.log("span par click huya" + event.target.textContent);
  }
});
