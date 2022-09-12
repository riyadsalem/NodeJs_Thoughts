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

/*
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
*/

// FILE SYSTEM MODULE

/*
const fs = require("fs");

// Write File
fs.writeFile("./app.txt", "Hi", (err) => {
  if (err) console.log(err);
  else console.log("File Just Created");
});

// Read File
fs.readFile("./app.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

// Rename Fiel
fs.rename("./app.txt", "./helper.txt", (err) => {
  if (err) console.log(err);
  else console.log("File Successfuly Rename");
});

// Delete File
fs.writeFile("./app2.txt", "Test For DELETE", (err) => {
  if (err) console.log(err);
  else console.log("File Just Created");
});

fs.unlink("./app2.txt", (err) => {
  if (err) console.log(err);
  else console.log("DELETED FILE");
});
*/

/*
const fs = require("fs").promises;

async function getSum() {
  let data = await fs.readFile("./data.json", "utf-8");
  data = JSON.parse(data);

  let sum = 0;
  for (let user of data) {
    sum += user.Salary;
  }
  console.log(sum);
}

getSum();
*/

/*
// HTTP MODULE
// Create a Server
// Read a html File
// Send this data as a response from server

const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
  console.log("SERVER IS NOW RUNING");
  //res.writeHead(200, { "Content-Type": "text/plain" });
  //res.end("<h1>HI</h1>");
  const data = await fs.readFile("./new.html", "utf-8");
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(data);
});

server.listen(3000);
*/

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return;
  const myURL = new URL(req.url, "http://localhost:3000/");
  console.log(myURL);
  console.log(myURL.pathname);

  console.log("Server is now runing");
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("<h1>HI<h1>");
});
server.listen(3000);

// http://localhost:3000/product?id=1&category=teshirt
// 0 - 65535
