angular.module('cleansingMusic')

    .factory('MusicService', function ($cordovaMedia, $cordovaLocalNotification, $ionicLoading, $cordovaGoogleAnalytics, $q) {
        var musicIsPlaying = false;
        var playingStation = {};
        var media;
        var service = {
            isPlaying: isPlaying,
            getPlayingStation: getPlayingStation,
            play: play,
            stop: stop,
            setVolume: setVolume,
            assertNotificationIsWorking: assertNotificationIsWorking
        };
        return service;

        function play(station) {
            //if (station.id == playingStation.id) return; //no need to play something that is already playing
            if (musicIsPlaying) {
                stop();
            }

            //google anaylictics
            $cordovaGoogleAnalytics.trackEvent('Music', 'Play', station.title, 0);

            media = new Media(station.streamingUrl, null, null, mediaStatusCallback);
            $cordovaMedia.play(media);
            musicIsPlaying = true;
            playingStation = station;
            $cordovaLocalNotification.add({
                id: station.id,
                message: 'Playing the ' + station.title + ' station',
                title: 'Cleansing Music',
                sound: null,
                autoCancel: false,
                ongoing: true
            });
        }

        function stop() {
            musicIsPlaying = false;
            $cordovaMedia.stop(media);
            $cordovaMedia.release(media);
            $cordovaLocalNotification.cancel(playingStation.id);
            playingStation = undefined;
        }

        function mediaStatusCallback (status) {
            if (status == 0) {
                $ionicLoading.hide();
                $cordovaDialogs.alert('Failed to start the music. Please try again.');
            } else if (status == 1) {
                $ionicLoading.show({template: 'Loading...'});
            } else if (status == 3 || status == 4) {
                $ionicLoading.hide();
                $cordovaLocalNotification.cancel(playingStation.id);
            } else {
                $ionicLoading.hide();
            }
        };

        function assertNotificationIsWorking() {

            if (!musicIsPlaying) $cordovaLocalNotification.cancel(playingStation.id);;

            $cordovaLocalNotification.isTriggered(playingStation.id).then(function(isTriggered) {
                if (isTriggered != true) {
                    //put one out!
                    $cordovaLocalNotification.add({
                        id: station.id,
                        message: 'Playing the ' + station.title + ' station',
                        title: 'Cleansing Music',
                        sound: null,
                        autoCancel: false,
                        ongoing: true
                    });
                }
            })
        }
        //range 0.0 to 1.0
        function setVolume(vol) {
            $cordovaMedia.setVolume(media, vol);
        }

        //Getters
        function isPlaying(station) {
            //console.log('Is playing fact ', playingStation, station);
            if (station) {
                return playingStation.id === station.id;
            }
            return musicIsPlaying;
        }

        function getPlayingStation() {
            return playingStation;
        }


    })
    .factory('StationService', function () {
        var playlists = [
            {title: '50\'s Bop', id: 1, streamingUrl: 'http://74.124.12.136:8000/'},
            {title: '60\'s Pop', id: 2, streamingUrl: 'http://74.124.12.136:8002/'},
            {title: '70\'s Rock', id: 3, streamingUrl: 'http://74.124.12.136:8004/'},
            {title: '80\'s Thrill', id: 4, streamingUrl: 'http://74.124.12.136:8006/'},
            {title: '90\'s Chill', id: 5, streamingUrl: 'http://74.124.12.136:8008/'},
            {title: '2000\'s Mil', id: 6, streamingUrl: 'http://74.124.12.136:8010/'},
            {title: 'Classically', id: 7, streamingUrl: 'http://74.124.12.136:8016/'},
            {title: 'Inspirational', id: 8, streamingUrl: 'http://74.124.12.136:8020/'},
            {title: 'Beyond Words', id: 9, streamingUrl: 'http://74.124.12.136:8012/'},
            {title: 'Country Comfort', id: 10, streamingUrl: 'http://74.124.12.136:8018/'},
            {title: 'Off Track', id: 11, streamingUrl: 'http://74.124.12.136:8024/'},
            {title: 'Mixup', id: 12, streamingUrl: 'http://74.124.12.136:8022/'},
            {title: 'Christmas', id: 13, streamingUrl: 'http://74.124.12.136:8014/'}
        ];
        var service = {
            get: get
        };
        return service;

        function get(id) {
            if (id) {
                return _.find(playlists, function (t) {
                    return t.id == id;
                });
            }
            return playlists;
        }


    });
