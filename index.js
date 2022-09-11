console.log(2 + 3);
console.log(`Riyad ${24 - 24}`);

const obj = {
  naem: "Riayd",
  age: 24,
  frindes: ["saeed", "mortada"],
  _sum() {
    return this.age - 0;
  },
};

console.log(obj, obj._sum());

// console.log(window); // Web API
// console.log(document); // Web API
