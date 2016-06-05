var myApp = angular.module('myApp', [
  'ui.bootstrap',
  'ui.router',
  'ngMessages',

  'resources',
  'tools',

  'core',
  'postcardList',
  'navModule',
  'loginModule']);


myApp.run(function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});


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
      templateUrl: 'views/publicnav.html',
      controller: 'navCtrl as ctrl',
      abstract: false
    })
    .state('signup', {
      templateUrl: 'views/login/signup.html',
      url: '/signup',
      controller: 'loginCtrl as ctrl'
    })
    /*
    **  not found
    */
    .state('404', {
      url: '/404',
      templateUrl: '404.html'
    });
});
