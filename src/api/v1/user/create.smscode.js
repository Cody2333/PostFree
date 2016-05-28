import AV from 'leanengine';
import { assert } from 'chai';


/*
	获取smsCode
	Parameters:phone
	未使用
*/
export default async function smsCode(req, res) {
  let phone = req.body.phone;
  try {
    assert(/\d{11}/.test(phone), "phone");
    console.log(phone);
    await AV.Cloud.requestSmsCode(phone);
    res.status(200).json({});
  } catch (err) {
    let message;
    if (err.name === 'AssertError') {
      switch (err.message) {
        case "phone":
          message = "您输入的手机号有误";
          res.status(400);
          break;
      }
    } else {
      message = err.message;
      res.status(500);
    }
    res.json({
      message,
    });
  }
}
