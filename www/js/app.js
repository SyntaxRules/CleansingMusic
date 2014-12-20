angular.module('cleansingMusic', ['ionic', 'ngCordova'])

    .run(function ($ionicPlatform, MusicService, $cordovaDialogs, $cordovaDevice, $cordovaGoogleAnalytics) {
        //Google analytics id: UA-57872558-2
        //get user uuid $cordovaDevice.getUUID();
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

            //setup google analytics
            $cordovaGoogleAnalytics.debugMode();
            $cordovaGoogleAnalytics.startTrackerWithId('UA-57872558-2');
            $cordovaGoogleAnalytics.setUserId('$cordovaDevice.getUUID()');

            //setup the bottome add
            var ad_units = {
                ios : {
                    banner: 'ca-app-pub-6869992474017983/4806197152',
                    interstitial: 'ca-app-pub-6869992474017983/7563979554'
                },
                android : {
                    banner: 'ca-app-pub-1274149562908374/2477052445',
                    interstitial: 'ca-app-pub-6869992474017983/1657046752'
                }
            };
            var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
            if (! AdMob ) { alert( 'admob plugin not ready' ); return; }
            var defaultOptions = {
                bannerId: admobid.banner,
                //interstitialId: admobid.interstitial,
                //adSize: 'SMART_BANNER',
                //width: integer, // valid when set adSize 'CUSTOM'
                //height: integer, // valid when set adSize 'CUSTOM'
                position: AdMob.AD_POSITION.BOTTOM_CENTER,
                //offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
                bgColor: 'black', // color name, or '#RRGGBB'
                //x: integer, // valid when set position to 0 / POS_XY
                //y: integer, // valid when set position to 0 / POS_XY
                isTesting: false, // set to true, to receiving test ad for testing purpose
                //autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
            };
            AdMob.setOptions( defaultOptions );
            document.addEventListener('onAdFailLoad', function(data){
                alert('error: ' + data.error +
                ', reason: ' + data.reason +
                ', adNetwork:' + data.adNetwork +
                ', adType:' + data.adType +
                ', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
            });
            document.addEventListener('onAdLoaded', function(data){});
            document.addEventListener('onAdPresent', function(data){});
            document.addEventListener('onAdLeaveApp', function(data){});
            document.addEventListener('onAdDismiss', function(data){});

            AdMob.createBanner({});
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
