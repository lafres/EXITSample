const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const passport = require("passport");

const userController = require("./controllers/userController");
const passportConfig = require("./passport");

const app = express();

// 미들웨어 설정
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));

// 루트 경로
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 유저 조회 API
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);
app.get("/user", userController.getUsers);
app.get("/user/:id", userController.getUser);

// 서버 시작
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
