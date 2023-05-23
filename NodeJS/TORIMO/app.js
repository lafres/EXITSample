const express = require("express");
const bodyParser = require("body-parser");
const userController = require("./controllers/userController");

const app = express();

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));

// 루트 경로
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 유저 조회 API
app.get("/users", userController.getUsers);

// 서버 시작
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
