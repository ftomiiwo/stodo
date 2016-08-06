// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('stodo', ['ionic', LocalStorageModule]);

app.config(function(localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('stodo');
});

 app.controller('main', function ($scope, $ionicModal, localStorageService) { 
 //store the entities name in a variable var taskData = 'task';
    //initialize the tasks scope with enpty array
    $scope.tasks = [];

    // initialize the task scope with empty object
    $scope.task = {};

    //configure the modal before use
    $ionicModal.fromTemplateUrl('new-task-modal.html', {
        scope: $scope, 
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.newTaskModal = modal;
    });

    $scope.getTasks = function() {

        //This function will fetch task from local storage
    }
    $scope.createTask = function() {
        // This function will create a new task

    }
    $scope.removeTask = function() {
        // This function will remove a task
    }
    $scope.completeTask = function() {
        //This function will update the state of a task
    }

 })
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
