class Tools {
	constructor() {

	}

	simpleAlert(msg, code) {
		if (code == '201') {
			alert('创建成功');
		}
		else if (code == '400' || code== '403') {
			alert('发生错误：' + msg.message);
		}
		else if (code == '404') {
			alert('无权访问');
		}
		else if (code == '429') {
			alert('操作过频');
		}
	}
}

angular.module('tools', [])
.service('tools', Tools);