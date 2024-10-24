import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Middleware to greet user when they visit the site
const greetUser = (req, res, next) => {
  console.log("Hello user!");
  next();
};

app.use(greetUser);

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
  const userLogged = true;
  if (!userLogged) {
    res.status(401).send("You are not logged in!");
  }
  next();
};

// This is the public route: No login  is required here
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// This is the private route: Login is required here
app.get("/dashboard", isLoggedIn, (req, res) => {
  res.send("Welcome to the dashboard!");
});
