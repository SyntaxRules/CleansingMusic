angular.module('cleansingMusic')

    .directive('fitText', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).fitText();
            }
        };
    }).directive('footerBar', function(MusicService) {
        return {
            restrict: 'E',
            templateUrl: 'templates/footerBar.html',
            link: function (scope, ele, attrs) {
                var init = function() {
                    scope.station = MusicService.getPlayingStation();
                };

                scope.getStationTitle = function() {
                    return MusicService.getPlayingStation().title;
                };

                scope.stop = function () {
                    MusicService.stop();
                };

                scope.isPlaying = function () {
                    return MusicService.isPlaying();
                };

                init();
            }
        }
    })