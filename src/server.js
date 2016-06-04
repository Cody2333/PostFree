import AV from 'leanengine';

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});
AV.Cloud.useMasterKey();
import app from './app';

// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
let PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 3000);
let server = app.listen(PORT, function() {
  console.log('Node app is running, port:', PORT);
});