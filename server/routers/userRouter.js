const { Router } = require("express");
const router = new Router();
const map = {};

router.post("/send_code", (req, res) => {
  // 手机号码
  const tel = req.fetchBody.tel;
  //生成手机验证码
  let code = Math.floor(Math.random() * 1000000);
  while (code.toString().length < 6) {
    code = "0" + code;
  }
  console.log(code);

  map[tel] = code.toString();
  // 给用户手机发短信
  // [xxxx]:你的验证码:[code],60秒内有效.
  setTimeout(() => {
    res.json({ code: 0, message: "ok" });
  }, 2000);
});

module.exports = router;
