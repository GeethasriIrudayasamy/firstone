let num1 = 5;
let num2 = 4;
num1 = num1 + num2; //9
num2 = num1 - num2; //9-4=5
num1 = num1 - num2; //9-5=4
console.log(num1, num2);

let Name = "Geethasri";
let age = 21;
let address = "T-Salapalayam,Tiruchengode";
result = "My name is " + Name + ",age is " + age + ",address is " + address;
console.log(result);
console.log(result.split(","));

const nums = [2, 3, 4, 5, 6];
nums.push(7);
nums.unshift(1);
nums.push(8);
nums.pop();
console.log(nums.indexOf(7));
console.log(nums);
