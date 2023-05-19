const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
const userController = require("./controllers/userController");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("combined"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello Express");
});
app.get("/users", userController.getUserList);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
