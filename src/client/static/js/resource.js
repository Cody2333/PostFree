'use strict';
angular.module('resources', [])
  .factory('UserService', function($http, $q) {
    const baseUrl = '/api/v1';
    let user = {
      info: {
        id: 0,
        isLogin: false,
        name: 'default'
      }
    };

    //用于判断是否已经登录
    user.fetchInfo = function() {
      var deferred = $q.defer();
      $http.get(baseUrl + '/user/-1')
        .success(function(res) {
          user.info.isLogin = true;
          user.info.id = res.id;
          deferred.resolve({
            isLogin: true
          });
        })
        .error(function(res) {
          deferred.resolve({
            isLogin: false
          });
        });
      return deferred.promise;
    }
    user.login = function(username, password) {
      let deferred = $q.defer();
      let user = {
        username,
        password
      };
      $http.post(baseUrl + '/user/login', user)
        .success((res) => {
          user.info.isLogin = true;
          user.info.id = res.id;
          deferred.resolve({
            isLogin: true
          });
        })
        .error((res) => {
          deferred.resolve({
            isLogin: false
          });
        });
      return deferred.promise;
    }
    return user;
  })
