angular.module('cleansingMusic')

.directive('fitText', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                $(element).fitText();
            }
        };
    });