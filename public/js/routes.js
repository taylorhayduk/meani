angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.browse', {
      url: '/browse',
      views: {
        'tab1': {
          templateUrl: 'templates/browse.html',
          controller: 'browseCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.wishList', {
      url: '/wishlist',
      views: {
        'tab2': {
          templateUrl: 'templates/wishList.html',
          controller: 'wishListCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.friends', {
      url: '/friends',
      views: {
        'tab3': {
          templateUrl: 'templates/friends.html',
          controller: 'friendsCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('login', {
      url: '/page5',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page5');

});