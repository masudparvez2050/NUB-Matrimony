const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const { authenticate, logout } = require("./helper/auth");

const { profile } = require("./helper/profile");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("./config/dbConnection");

const express = require("express");

const app = express();
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
//routes
app.use("/user", userRoutes);

//auth route
app.get("/", authenticate, (req, res) => {
  return res.json({
    Status: "Success",
    token: req.cookies.token,
    gender: req.gender,
  });
});

//profile route
app.get("/profile", authenticate, profile);

//logout route
app.get("/logout", logout);
//404 routes
app.get("/404", (req, res) => {
  res.render("404");
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
