# 首次开发

* 克隆仓库

	> git clone ...

* 安装构建工具及其依赖
	> cd PostFree

	> npm install -g gulpjs/gulp-cli#4.0

	> npm install

* 执行构建任务（该任务将会跟踪文件改动，因而需要长期驻留，无需关闭）
	> gulp debug

* 安装依赖
	> cd debug

	> npm install

  > npm install -g bower (如果没有安装过bower)

	> cd ..

  > bower install

* 安装leancloud命令行工具
	> npm install -g avoscloud-code

* 配置leancloud
	> cd debug

	> lean app add {appName} {appId}

* 运行程序 (在debug目录 )
	> lean up

# 再次开发

* 进入仓库目录
	> cd PostFree

* 执行构建任务（该任务将会跟踪文件改动，因而需要长期驻留，无需关闭）
	> gulp debug

* 运行程序
	> cd debug
	> lean up

# 部署

* unfinished
