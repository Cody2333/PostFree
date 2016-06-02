import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import AV from 'leanengine';

import routes from './routes';
let app = express();

// 加载 cookieSession 以支持 AV.User 的会话状态
app.use(AV.Cloud.CookieSession({
  secret: '05XgTktKPMkU',
  maxAge: 3600000,
  fetchUser: true
}));



require('./cloud');
app.use(AV.express());

// 强制使用 https
app.enable('trust proxy');
app.use(AV.Cloud.HttpsRedirect());

app.use(methodOverride('_method'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', routes);

// 如果任何路由都没匹配到，则认为 404
// 生成一个异常让后面的 err handler 捕获
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.end(`<h1>${err.message}</h1><pre>${err.stack}</pre>`)
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.end(`<h1>${err.message}</h1>`);
});

export default app;
