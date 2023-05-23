const sql = require("mssql");
const dotenv = require("dotenv");
dotenv.config();
// MsSQL 연결 정보
const config = {
  user: process.env.DB_DEV_USERNMAE,
  password: process.env.DB_DEV_PASSWORD,
  server: process.env.DB_DEV_SERVER,
  databse: process.env.DB_DEV_DATABASE,
  port: parseInt(process.env.DB_DEV_PORT),
  options: {
    encrypt: false,
  },
  stream: false,
};

// 유저 조회 컨트롤러
exports.getUsers = (req, res) => {
  // 데이터베이스 연결
  sql.connect(config, (err) => {
    if (err) {
      console.log("Database connection error: ", err);
      res.status(500).json({ error: "Database connection error" });
      return;
    }

    // 쿼리 실행
    const query = "SELECT USER_ID, USER_NM, USER_PWD FROM User";
    new sql.Request().query(query, (err, result) => {
      if (err) {
        console.log("Query execution error: ", err);
        res.status(500).json({ error: "Query execution error" });
        return;
      }

      // 결과 반환
      res.json(result.recordset);
    });
  });
};
