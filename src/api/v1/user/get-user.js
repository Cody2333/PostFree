import AV from 'leanengine';
import moment from 'moment';
import { assert } from 'chai';

export default async function getUser(req, res) {

  let id = req.params.id;
  console.log('get user');
  try {
    if (id == '-1') {
      //获取当前用户信息
      if (req.currentUser) {
        let result = {
          id: req.currentUser.id,
          username: req.currentUser.username
        };
        res.status(200).json(result);
      } else {
        let message = 'not login';
        res.status(400).json({
          message,
        });
      }
    } else {
      let message = ' havenot finished yet';
      res.status(200).json({
        message,
      });
    }

  } catch (err) {

    let message;
    if (err.name === 'AssertionError') {
      switch (err.message) {
        case "id":
          message = "用户ID有误";
          res.status(400);
          break;
        case 'taskId':
          message = 'task id格式有误';
          res.status(400);
          break;
        case 'task down':
          message = '非您的task下游寝室用户';
          res.status(403);
          break;
        case 'normal user':
          message = '您无权查看他人信息';
          res.status(403);
          break;
        case 'time out':
          message = '您的task已超时';
          res.status(403);
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
