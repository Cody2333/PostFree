import AV from 'leanengine';
const _ = require('underscore');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', (req, res) => {
  console.log(req);
  res.success('Hello world!');
});

export default AV.Cloud;
