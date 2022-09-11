/*
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
console.log("End");

// console.log(window); // Web API
// console.log(document); // Web API
*/

// Understanding Modules

/*
import add from "./add";
console.log(add(2, 3));
*/

const { add, sub } = require("./add");
console.log(add(1, 2));
console.log(sub(2, 1));

console.log(__dirname);
console.log(__filename);
