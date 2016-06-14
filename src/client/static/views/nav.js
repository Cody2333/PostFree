"use strict";

class navCtrl {
  constructor($state) {
    this.$state = $state;
  }
  toUserpage() {
    console.log('touser');
    window.location.href = '#/user/001';
  }
}

angular.module('navModule', ['ui.router'])
  .controller('navCtrl', ['$state', navCtrl]);
