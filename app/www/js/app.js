
angular.module('etudr', ['ionic', 'etudr.controllers', 'etudr.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppController'
    })
      .state('app.dashbaord', {
        url: '/dashboard',
        views: {
          'menuContent': {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardController'
          }
        }
      })
      .state('app.times', {
        url: '/times',
        views: {
          'menuContent': {
            templateUrl: 'templates/times.html',
            controller: 'TimesController'
          }
        }
      })
      .state('app.newTopic', {
        url: '/new-topic',
        views: {
          'menuContent': {
            templateUrl: 'templates/new-topic.html',
            controller: 'NewTopicController'
          }
        }
      })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');

});
