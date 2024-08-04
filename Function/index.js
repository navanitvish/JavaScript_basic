console.log("Hello Hanuman ji");

// function declaration
// function Ayodhya() {
//   console.log("Ram ji aaye gye Ayodhya.");
// }

// function call or invoke;
// Ayodhya();

// function assignment = we are assige Function into a variable

// let run = function runs() {
//   console.log(" Runing on the ground");
// };

// run();

// let x = 3;
// x = "b";
// console.log(x);

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// console.log(sum(1, 2));
// console.log(sum(2));
// console.log(sum());
// console.log(sum(2, 3, 4, 5, 6, 7));

// in programe  creatng a function and pass the multiple parameter
// function sum() {
//   let total = 0;
//   for (let value of arguments) total = total + value;
//   return total;
// }
// let ans = sum(1, 2, 3, 4);
// console.log(ans);

// REst Operator

// function sum(...args) {
//   console.log(args);
// }
// sum(2, 3, 4, 5, 6, 7, 8, 9);

// function sum(num, value, ...args) {
//   console.log(args);
//}
// sum(2, 3, 4, 5, 6, 7, 8, 9);

//default parameter

// function intrest(p, r = 5, y = 9) { // in this we write the default value
//   return (p * r * y) / 100;
// }
// console.log(intrest(1000, undefined, 8));

// Getter and Setter for accesinf and change the value

// let person = {
//   fname: "Navanit",
//   lname: "Vishwakarma",
//   get fullName() {
//     return `${person.fname}  ${person.lname}`;
//   },

//   set fullName(value) {
//     if (typeof value !== String) {
//       throw new Error(" you not send a string");
//     }
//     let parts = value.split(" ");
//     this.fname = parts[0];
//     this.lname = parts[1];
//   },
// };
// console.log(person);

// function fullname() {
//   return `${person.fname}  ${person.lname}`;
// }
// console.log(fullname());

// person.fullName = "Shubham pandey";
// console.log(person.fullName);

// Try and Catch   for error Handling

// try {
//   person.fullName = true;
// } catch (e) {
//   alert(e);
// }

// console.log(person.fullName);

// {
//   let a = 6;
//   console.log(a);
// }

// function wolk() {
//   var b = 5;
// }
// console.log(b);

for (var i = 0; i < 10; i++) {}
console.log(i);

if (true) {
  var a = 19;
}
console.log(a);
