const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");
const { authenticate, logout } = require("./helpers/auth");
const { profile } = require("./helpers/profile");
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
    methods: ["POST", "GET"],
    credentials: true,
  })
);
//routes
app.use("/student", studentRoutes);

//auth route
app.get("/", authenticate, (req, res) => {
  return res.json({
    Status: "Success",
    token: req.cookies.token,
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
