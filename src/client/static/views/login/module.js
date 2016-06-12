'use strict'
/* log in modules */

class loginCtrl {
  constructor($state, UserService) {
    this.$state = $state;
    this.UserService = UserService;

    this.UserService.fetchInfo()
      .then((res) => {
        if (res.isLogin) {
          this.$state.go('nav');
        }
      })

  }
  login() {
    let self = this;
    self.UserService.login(self.username, self.password)
      .then((res) => {
        if (res.isLogin == true) {
          self.$state.go('nav');
        }
      });
  }
  toSignup() {
    let self = this;
    self.$state.go('signup');
  }
  signup() {
    /*    let self = this;
        let user = new self.UserService({
          username: self.username,
          password: self.password,
          phone: self.phone
        });
        user.$signup(function() {
          self.$state.go('nav');
        }, function(err) {
          alert(err.data.message);
        });*/
  }
}

angular.module('loginModule', ['resources'])
  .controller('loginCtrl', ['$state', 'UserService', loginCtrl]);
