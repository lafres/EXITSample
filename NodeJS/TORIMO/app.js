const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userController = require("./controllers/userController");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    { usernameField: "userId", passwordField: "password" },
    userController.authenticateUser
  )
);

passport.serializeUser(userController.serializeUser);
passport.deserializeUser(userController.deserializeUser);
app.user;
// 루트 경로
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});
app.post("/login", passport.authenticate("local"), userController.login);

// 로그아웃 API
app.get("/logout", userController.logout);

// 서버 시작
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
