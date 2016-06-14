"use strict";

class userpageCtrl {
  constructor($stateParams) {
    this.$stateParams = $stateParams;
    this.userId = $stateParams.userId;
  }
}

angular.module('userpageModule', [])
  .controller('userpageCtrl', ['$stateParams', userpageCtrl]);
