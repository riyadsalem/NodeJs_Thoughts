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
/*
const { add, sub } = require("./add");
console.log(add(1, 2));
console.log(sub(2, 1));

//console.log(__dirname);
//console.log(__filename);
*/

const add = require("./calculator/add");
const sub = require("./calculator/sub");
const mul = require("./calculator/mul");
const div = require("./calculator/div");

const node = process.argv[0];
const fileName = process.argv[1]; // __filename
const a = parseInt(process.argv[2]);
const choise = process.argv[3];
const b = parseInt(process.argv[4]);

switch (true) {
  case choise === "ADD":
    console.log(add(a, b));
    break;
  case choise === "SUB":
    console.log(sub(a, b));
    break;
  case choise === "MUL":
    console.log(mul(a, b));
    break;
  case choise === "DIV":
    console.log(div(a, b));
    break;
  default:
    console.log(`${fileName}`);
}
