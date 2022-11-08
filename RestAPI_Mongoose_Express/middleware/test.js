/*
const firstMiddleware = (req, res, next) => {
  console.log("this is first middlewares");
  next();
};

const secondMiddleware = (req, res, next) => {
  console.log("this is Second middlewares");
  next();
};

const firstSecondMiddleware = [firstMiddleware, secondMiddleware];

// app.use(firstMeddleware);
// app.use(secondMiddleware);

app.use(
  (req, res, next) => {
    console.log("this is first Middlewar");
    next();
  },
  (req, res, next) => {
    console.log("this is second middleware");
    next();
  }
);

app.get(
  "/test2",
  firstSecondMiddleware, (req, res) => {
    res.send("This is Home Page");
  }
);
*/
