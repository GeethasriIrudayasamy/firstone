const person = {
  firstName: "Geethasri",
  lastName: "I",
  age: 21,
  hobbies: ["music", "movies", "dance"],
  address: {
    street: "Namakkal main road",
    city: "Tiruchengode",
    state: "Tamilnadu",
  },
};

const {
  age,
  address: { state },
} = person;

console.log(age);
console.log(state);
