//Array in JavaScript
// let number = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(number[0]);
// console.log(number[1]);
// console.log(number[2]);
// console.log(number[3]);
// console.log(number[4]);
// console.log(number.push(9));
// console.log(number.unshift(0));
// console.log(number.splice(3, 0, "a", "b", "c"));
// console.log(number);
// console.log(number.indexOf(8));
// console.log(number.includes(7));

// let courses = [
//   { no: 1, naam: "Love" },
//   { no: 2, naam: "rahul" },
// ];
// console.log(courses[1]);
// // courses.indexOf({ no: 1, naam: "Love" });
// let course = courses.find((course) => course.naam === "navanit");
// console.log(course);
// Deleting number in Array
// let num = [1, 2, 3, 4, 5, 6, 7];
// num.pop();
// console.log(num);
// num.shift();
// console.log(num);
// num.splice(2, 1);
// console.log(num);

//Combining Array by spread oprator
// let first = [1, 2, 3];
// let second = [4, 5, 6];
// let combine = [...first, ...second];
// console.log(combine);

// first.forEach((element) => {
//   console.log(element);
// });

// let massesge = "this is my first javaScript class";
// let part = massesge.split(" ");
// console.log(part);
// let joned = part.join("_");
// console.log(joned);

//Sorting Array
// let nums = [10, 40, 30, 20, 50];
// nums.sort();
// console.log(nums);
// nums.reverse();
// console.log(nums);

// Filtering the Array value

// let number = [1, 3, -5, -6];
// by function simple
// let filtered = number.filter(function (value) {
//   //return value >= 0;
//   return value <= 0;
// });

// by Arraow function
// let filtered = number.filter((value) => value >= 0);
// console.log(filtered);

// Mapping Array

// let nums = [1, 3, 4, 7, 8, 9];

// let items = nums.map(function (value) {
//   return "Student_Id :" + value;
// });

// let items = nums.map((value) => "student_id :" + value);

// console.log(items);

// Mapping with Objects;
// let nums = [2, 3, -4, -5];
// let filtered = nums.filter((value) => value >= 0);
// console.log(filtered);
// let items = filtered.map(function (num) {
//   return { value: num };
// });
// console.log(items);

var x = 57;
var ans = function () {
  console.log(x);
  var x = 53;
};
ans();
