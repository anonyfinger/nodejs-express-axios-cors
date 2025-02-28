// server.js
const express = require("express");
const cors = require("cors");
const app = express();

// CORS 설정
app.use(
  cors({
    origin: "http://127.0.0.1:9000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// 미들웨어 설정
app.use(express.json());
app.use(express.text());

let data = { message: "여러분 화이팅!" };

// GET 요청 처리
app.get("/", (req, res) => {
  res.json(data);
});

// POST 요청 처리
app.post("/", (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
});

// PUT 요청 처리
app.put("/", (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

// DELETE 요청 처리
app.delete("/", (req, res) => {
  data = {};
  res.send("데이터가 삭제되었습니다.");
});

// 서버 시작
app.listen(3000, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
