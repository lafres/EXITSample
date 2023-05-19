const sql = require("mssql");
const dotenv = require("dotenv");
dotenv.config();

const config = {
  user: process.env.DB_DEV_USERNMAE,
  password: process.env.DB_DEV_PASSWORD,
  server: process.env.DB_DEV_SERVER,
  databse: process.env.DB_DEV_DATABASE,
  port: parseInt(process.env.DB_DEV_PORT),
  options: {
    encrypt: false,
  },
  stream: true,
};

const user = {
  getUserList: async (req, res) => {
    try {
      const pool = await sql.connect(config);
      const result = await pool
        .request()
        .query("SELECT USER_ID, USER_NM FROM USERMT");

      res.json(result.recordset);
    } catch (error) {
      console.error("Error retrieving user data : ", error);
      res.status(500).json({ error: "Internal server error" });
    } finally {
      sql.close();
    }
  },

  createUser: async (req, res) => {
    try {
      const {
        USER_ID,
        USER_NM,
        USER_PWD,
        APST_YMD,
        APFN_YMD,
        USER_GRAD_CD,
        DPRT_CD,
        CM_YN,
        ETC_CTN,
        DLTN_YN,
        LAST_CNCT_DT,
      } = req.body;

      const pool = await sql.connect(config);

      await pool
        .request()
        .input("USER_ID", sql.VarChar, USER_ID)
        .input("USER_NM", sql.VarChar, USER_NM)
        .input("USER_PWD", sql.VarChar, USER_PWD)
        .input("APST_YMD", sql.DateTime, APST_YMD)
        .input("APFN_YMD", sql.DateTime, APFN_YMD)
        .input("USER_GRAD_CD", sql.VarChar, USER_GRAD_CD)
        .input("DPRT_CD", sql.VarChar, DPRT_CD)
        .input("CM_YN", sql.VarChar, CM_YN)
        .input("ETC_CTN", sql.VarChar, ETC_CTN)
        .input("DLTN_YN", sql.VarChar, DLTN_YN)
        .input("LAST_CNCT_DT", sql.VarChar, LAST_CNCT_DT)
        .query(
          "INSERT INTO USERMT (USER_ID,USER_NM,USER_PWD,APST_YMD,APFN_YMD,USER_GRAD_CD,DPRT_CD,CM_YN,ETC_CTN,DLTN_YN,LAST_CNCT_DT) VALUES (@USER_ID, @USER_NM, @USER_PWD, @APST_YMD, @APFN_YMD, @USER_GRAD_CD, @DPRT_CD, @CM_YN, @ETC_CTN, @DLTN_YN, @LAST_CNCT_DT )"
        );

      res.json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error creating user : ", error);
      res.status(500).json({ error: "Internal server error" });
    } finally {
      sql.close();
    }
  },
};

module.exports = user;
