angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('patientoryMenu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/patientoryMenu.html'
    })
      
    
      
        
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('patientoryMenu.profile', {
      url: '/page2',
      views: {
        'side-menu21': {
          templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
        }
      }
    })
        
      
    
      
        
    .state('patientoryHome', {
      url: '/page3',
      templateUrl: 'templates/patientoryHome.html',
      controller: 'patientoryHomeCtrl'
    })
        
      
    
      
        
    .state('patientoryMenu.bills', {
      url: '/page4',
      views: {
        'side-menu21': {
          templateUrl: 'templates/bills.html',
          controller: 'billsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('patientoryMenu.medications', {
      url: '/page6',
      views: {
        'side-menu21': {
          templateUrl: 'templates/medications.html',
          controller: 'medicationsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('patientoryMenu.medicalHisotry', {
      url: '/page5',
      views: {
        'side-menu21': {
          templateUrl: 'templates/medicalHisotry.html',
          controller: 'medicalHisotryCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page3');

});