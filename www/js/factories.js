angular.module('cleansingMusic')

.factory('MusicService', function($cordovaMedia, $cordovaLocalNotification) {
    var musicIsPlaying = false;
    var musicSrc = '';
    var media;
    var service = {
        isPlaying: isPlaying,
        getMusicSrc: getMusicSrc,
        play: play,
        stop: stop,
        setVolume: setVolume
    };
    return service;

    function play(src, mediaStatusCallback) {
        musicIsPlaying = true;
        musicSrc = src;
        media = new Media(src, null, null, mediaStatusCallback);
        $cordovaMedia.play(media);
        $cordovaLocalNotification.add({
            id: musicSrc,
            message: 'Playing a song',
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
        $cordovaLocalNotification.cancelAll();
    }

    //range 0.0 to 1.0
    function setVolume(vol) {
        $cordovaMedia.setVolume(media, vol);
    }

    //Getters
    function isPlaying(streamingUrl) {
        if (streamingUrl) {
           return musicSrc == streamingUrl;
        }
        return musicIsPlaying;
    }

    function getMusicSrc() {
        return musicSrc;
    }


})
    .factory('StationService', function() {
         var playlists = [
            { title: '50\'s Bop', id: 1, streamingUrl: 'http://74.124.12.136:8000/' },
            { title: '60\'s Pop', id: 2, streamingUrl: 'http://74.124.12.136:8002/' },
            { title: '70\'s Rock', id: 3, streamingUrl: 'http://74.124.12.136:8004/' },
            { title: '80\'s Thrill', id: 4, streamingUrl: 'http://74.124.12.136:8006/' },
            { title: '90\'s Chill', id: 5, streamingUrl: 'http://74.124.12.136:8008/' },
            { title: '2000\'s Mil', id: 6, streamingUrl: 'http://74.124.12.136:8010/' },
            { title: 'Classically', id: 7, streamingUrl: 'http://74.124.12.136:8016/' },
            { title: 'Inspirational', id: 8, streamingUrl: 'http://74.124.12.136:8020/' },
            { title: 'Beyond Words', id: 9, streamingUrl: 'http://74.124.12.136:8012/' },
            { title: 'Country Comfort', id: 10, streamingUrl: 'http://74.124.12.136:8018/' },
            { title: 'Off Track', id: 11, streamingUrl: 'http://74.124.12.136:8024/' },
            { title: 'Mixup', id: 12, streamingUrl: 'http://74.124.12.136:8022/' },
            { title: 'Christmas', id: 13, streamingUrl: 'http://74.124.12.136:8014/' }
        ];
        var service = {
            get: get
        };
        return service;

        function get(id) {
            if (id) {
                return _.find(playlists, function(t) { return t.id == id; });
            }
            return playlists;
        }


    });
