// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('cleansingMusic', ['ionic', 'ngCordova'])

    .run(function ($ionicPlatform, MusicService, $cordovaDialogs) {
        $ionicPlatform.ready(function () {
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
        $ionicPlatform.on('pause', function () {
            if (!MusicService.isPlaying()) {
                MusicService.stop();
            }
        });
        $ionicPlatform.on('resume', function () {
            if (!MusicService.isPlaying()) {
                MusicService.stop();
            }
        });
        $ionicPlatform.on('offline', function () {
            MusicService.stop();
            $cordovaDialogs.alert('Your internet connection has been lost.');
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent': {
                        templateUrl: "templates/home.html"
                    }
                }
            })

            .state('app.about', {
                url: "/about",
                views: {
                    'menuContent': {
                        templateUrl: "templates/about.html"
                    }
                }
            })
            .state('app.stations', {
                url: "/stations",
                views: {
                    'menuContent': {
                        templateUrl: "templates/stations.html",
                        controller: 'StationsCtrl'
                    }
                }
            })

            .state('app.single', {
                url: "/stations/:stationId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/station.html",
                        controller: 'StationCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
