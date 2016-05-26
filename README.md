# Post Free
## 本地开发调试

首先确认本机已经安装 [Node.js](http://nodejs.org/) 运行环境和 [LeanCloud 命令行工具](https://www.leancloud.cn/docs/leanengine_cli.html)

安装依赖：

```
$ npm install
```

关联应用：

```
lean app add origin <appId>
```

这里的 appId 为在 LeanCloud 上创建的应用的 appId 。

启动项目：

```
lean up
```

 打开 [http://localhost:3000/todos](http://localhost:3000/todos)   即可

## 部署到 LeanEngine

部署到预备环境（若无预备环境则直接部署到生产环境）：
```
lean deploy
```

将预备环境的代码发布到生产环境：
```
lean publish
```
