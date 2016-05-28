import AV from 'leanengine';
import { assert } from 'chai';


/*
	创建用户
	Parameters:phone, smsCode, name
*/
export default async function createUser(req, res) {
  let phone = req.body.phone;
  let username = req.body.username;
  let password = req.body.password;
  try {

    assert(/\d{11}/.test(phone), "phone");
    assert(/\w{0,20}/.test(username), "name");
    let user = new AV.User();
    user.set('mobilePhoneNumber', phone);
    user.set('username', username);
    user.set('password', password);
    let newUser = await user.signUp();
    res.saveCurrentUser(newUser);
    res.status(201).json({
      id: newUser.id
    });


  } catch (err) {
    let message;
    if (err.name === 'AssertionError') {
      switch (err.message) {
        case "phone":
          message = "您输入的手机号有误";
          res.status(400);
          break;
        case "smsCode":
          message = "您输入的短信验证码有误";
          res.status(400);
          break;
        case "name":
          message = "您输入的名字有误";
          res.status(400);
          break;
        case "mobile ready":
          message = "您已绑定手机号";
          res.status(409);
          break;
      }
    } else {
      message = err.stack;
      res.status(500);
    }
    res.json({
      message,
    });
  }

}
