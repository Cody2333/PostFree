'use strict'
/* log in modules */

class loginCtrl {
	constructor($state, UserService) {
		this.$state = $state;
		this.UserService = UserService;
	}
	login() {
		let self = this;
		let user = new self.UserService({
			phone: self.phone,
			password: self.password
		});
		user.$login(function() {
			self.$state.go('nav');
		}, function(err) {
			alert(err.data.message);
		});
	}
}

angular.module('loginModule', [])
.controller('loginCtrl', ['$state', 'UserService', loginCtrl]);
