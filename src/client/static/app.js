var myApp = angular.module('myApp', [
  'ui.bootstrap',
  'ui.router',
  'ngMessages',

  'resources',
  'tools',

  'core',
  'postcardList',
  'postcardDetail',
  'navModule',
  'userpageModule',
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
      templateUrl: 'views/login/login.template.html',
      controller: 'loginCtrl as ctrl'
    })
    .state('nav', {
      url: "/nav",
      templateUrl: 'views/publicnav.template.html',
      controller: 'navCtrl as ctrl',
      abstract: false
    })
    .state('signup', {
      templateUrl: 'views/login/signup.template.html',
      url: '/signup',
      controller: 'loginCtrl as ctrl'
    })
    .state('detail', {
      url: '/postdetail/:postId',
      template: '<postcard-detail></postcard-detail>'
    })
    .state('user', {
      url: '/user/:userId',
      templateUrl: 'views/userpage/userpage.template.html',
      controller: 'userpageCtrl as ctrl'
    })
    /*
    **  not found
    */
    .state('404', {
      url: '/404',
      templateUrl: '404.html'
    });
});
