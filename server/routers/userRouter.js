const { Router } = require("express");
const router = new Router();

router.post("/send_code", (req, res) => {
  // const tel = req.fetchBody.tel;

  // let code = Math.floor(Math.random() * 1000000);
  // while (code.toString().length < 6) {
  //   code = "0" + code;
  // }
  // console.log(code);

  // map[tel] = code.toString();
  res.json({ code: 0, message: "ok" });
  setTimeout(() => {}, 2000);
});
module.exports = router;
