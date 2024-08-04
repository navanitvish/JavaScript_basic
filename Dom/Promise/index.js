// let meraPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise");
//   }, 5000);
//   //   resolve(2334332);
//   reject(new Error("Bhaisahab Error aaya hai"));
// });

// meraPromise.then((value) => {
//   console.log(value);
// });

// meraPromise.catch((error) => {
//   console.log("Recev ied an Error");
// });

// let waada1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("SetTime out Start");
//   }, 3000);
//   resolve(true);
// });

// let output = waada1.then(() => {
//   let waada2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("SetTime2 out Start");
//     }, 5000);
//     resolve("waada 2 resolved");
//   });
//   return waada2;
// });
// output.then((value) => console.log(value));

// async function ancd() {
//   return "kya hal ji sabke";
// }

// async function

async function utility() {
  let delhiMausam = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delhi me garmi hai");
    }, 5000);
  });

  let UPMausam = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Utter Pardesh me Cooling  hai");
    }, 10000);
  });

  let Dm = delhiMausam;
  let UM = UPMausam;
  return [Dm, UM];
}
