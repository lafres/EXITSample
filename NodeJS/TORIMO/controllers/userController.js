const sql = require("mssql");
const dotenv = require("dotenv");
const crypto = require("crypto");

function generateSHA256Hash(data) {
  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("hex");
}
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

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

// 유저 조회 컨트롤러
exports.getUsers = (req, res) => {
  // 데이터베이스 연결 풀 사용
  poolConnect
    .then(() => {
      // 쿼리 실행
      const query =
        "SELECT USER_ID, USER_NM, APST_YMD, APFN_YMD, USER_GRAD_CD, DPRT_CD, CM_YN, ETC_CTN FROM USERMT";
      return new sql.Request(pool).query(query);
    })
    .then((result) => {
      // 결과 반환
      res.json(result.recordset);
    })
    .catch((err) => {
      console.log("Query execution error: ", err);
      res.status(500).json({ error: "Query execution error" });
    });
};

exports.getUser = (req, res) => {
  poolConnect
    .then(() => {
      //파라미터로 전달된 USER_ID
      const userId = req.params.id;
      const query = `SELECT USER_ID, USER_NM,  FROM USERMT WHERE USER_ID = '${userId}'`;
      return new sql.Request(pool).query(query);
    })
    .then((result) => {
      if (result.recordset.length == 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(result.recordset[0]);
      }
    })
    .catch((err) => {
      console.log("Query execution error: ", err);
      res.status(500).json({ error: "Query execution error" });
    });
};

exports.loginUser = (req, res) => {
  poolConnect
    .then(() => {
      const userId = req.params.id;
      const inputPwd = req.params.pwd;
      const userPwd = generateSHA256Hash(inputPwd);
      const query = `SELECT USER_ID, USER_NM, USER_PWD FROM USERMT WHERE USER_ID = '${userId}' and USER_PWD = '${userPwd}' `;
      return new sql.Request(pool).query(query);
    })
    .then((result) => {
      if (result.recordset.length == 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(result.recordset[0]);
      }
    })
    .catch((err) => {
      console.log("Query execution error: ", err);
      res.status(500).json({ error: "Query execution error" });
    });
};
