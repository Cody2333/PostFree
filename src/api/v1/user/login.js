import AV from 'leanengine';
import moment from 'moment';
import { assert } from 'chai';

export default async function login(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  try {
    assert(/\w{0,20}/.test(password), JSON.stringify({
      status: 400,
      field: 'password',
      message: '密码格式不正确'
    }));
    let user = await AV.User.logIn(username, password);
    res.saveCurrentUser(user);
    res.status(200).json({
      id: user.id
    });
  } catch (err) {
    if (err.name == 'AssertionError') {
      let mobj = JSON.parse(err.message);
      res.status(mobj.status).json({
        field: mobj.field,
        message: mobj.message
      });
    } else {
      res.status(500).json({
        message: err.message
      });
    }
  }
}
