var myApp = angular.module('myApp', [
  'ui.bootstrap',
  'ui.router',
  'ngMessages',

  'resources',
  'tools',

  'navModule',
  'loginModule']);


myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('404')
    .when('', 'login');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller: 'loginCtrl as ctrl'
    })
    .state('nav', {
      url: "/nav",
      templateUrl: "views/nav.html",
      controller: 'navCtrl as ctrl',
      abstract: false
    })
    .state('signup', {
      url: "/signup"
    })
    /*
    **  not found
    */
    .state('404', {
      url: '/404',
      templateUrl: '404.html'
    });
});
