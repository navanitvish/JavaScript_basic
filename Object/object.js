console.log("this lecture is the onject");

// let rectangle = {
//   length: 1,
//   breadth: 2,

//   drow: function () {
//     console.log("Drow  reatangle");
//   },
// };
// this function used to crate many object by Factary Function
// function createFunction() {
//   return (rectangle1 = {
//     length: 1,
//     breadth: 2,

//     drow() {
//       console.log("Drow  reatangle");
//     },
//   });
// }

// let reatangleObj = createFunction();
// console.log(reatangleObj);

// passing parameter in this function
// function createFunction(length, breadth) {
//   return (rectangle1 = {
//     length: length,
//     breadth: breadth,

//     drow() {
//       console.log("Drow  reatangle");
//     },
//   });
// }

// let reatangleObj = createFunction(6, 3);
// let reatangleObj1 = createFunction(7, 5);
// let reatangleObj2 = createFunction(8, 7);
// let reatangleObj3 = createFunction(6, 2);
// console.log(reatangleObj);

//this function used to crate many object by constructor Function
// function Rectangle() {
//   this.length = 1;
//   this.breadth = 2;

//   this.drow = function () {
//     console.log("this is constructor function");
//   };
// }
// let reactangleObject = new Rectangle();

// passing parameter to constructor function
// function Rectangle(len, bre) {
//   this.length = len;
//   this.breadth = bre;

//   this.drow = function () {
//     console.log("this is constructor function");
//   };
// }
// let reactangleObject = new Rectangle(6, 4);
// reactangleObject.color = "Green";
// console.log(reactangleObject);
// delete reactangleObject.color;
// console.log(reactangleObject);

// this is primitive type
// let a = 10;

// function inc(a) {
//   a++;
// }
// inc(a);
// console.log(a);
// // output is 10

// this is refrence types
// let a = { value: 10 };

// function inc(a) {
//   a.value++;
// }
// inc(a);
// console.log(a.value);
//output is 11

// let reatangle = {
//   length: 2,
//   breadth: 3,
// };

// for (let key in reatangle) {
//   //key variable  for key
//   // key values  for the reatangle[key]
//   console.log(key, reatangle[key]);
// }

// for (let key of Object.entries(reatangle)) {
//   console.log(key);
// }

// if ("length" in reatangle) {
//   console.log("Present");
// } else {
//   console.log("Absent");
// }

// let reatangle = {
//   length: 2,
//   breadth: 3,
// };

// let angle = {};

//cloning of Object by iteration
// for (let key in reatangle) {
//   angle[key] = reatangle[key];
// }
// console.log(angle);

// cloning of Object by Assign

// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };
// let src2 = { value: 25 };
// let angle = Object.assign({}, src, src2);
// console.log(angle);
// src.a++;
// console.log(angle);

// let src4 = {
//   x: 20,
//   y: 30,
//   z: 25,
// };
// let dest1 = { ...src4 };
// console.log(dest1);

// string in object
// let lastname = "Navanit";
// let firstname = new String("Navanit");
// console.log(firstname);
// console.log(lastname);
