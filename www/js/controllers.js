angular.module('cleansingMusic')

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('StationsCtrl', function ($scope, StationService) {
        $scope.playlists = StationService.get();
    })

    .controller('StationCtrl', function ($scope, $stateParams, MusicService, StationService) {
        $scope.playing = false;
        $scope.playlist = StationService.get($stateParams.stationId);
        console.log($stateParams);
        console.log($scope.playlist);
        $scope.play = function (src) {
            MusicService.play(src);
        };

        $scope.stop = function () {
            MusicService.stop();
        };

        $scope.isPlaying = function () {
            return MusicService.isPlaying();
        };


        //var mediaStatusCallback = function (status) {
        //    if (status == 0) {
        //        $cordovaDialogs.alert('Failed to start the music. Please try again.');
        //    } else if (status == 1) {
        //        $ionicLoading.show({template: 'Loading...'});
        //    } else if (status == 3 || status == 4) {
        //        $cordovaLocalNotification.cancelAll();
        //    } else {
        //        $ionicLoading.hide();
        //    }
        //};

    });
