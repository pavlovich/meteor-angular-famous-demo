angular.module('taskMaster', ['angular-meteor', 'famous.angular'])
    .controller('mainController', ['$scope', '$famous', function($scope, $famous){

        var Transform = $famous['famous/core/Transform'];
        var Easing = $famous['famous/transitions/Easing'];
        'famous/views/Lightbox'


        window.peter = $scope;
        $scope.myGridLayoutOptions = {
            dimensions: [1,1]
        };
        $scope.items = [
            {name: 'header', height: 50, color: 'yellow'},
            {name: 'body', height: 'undefined', color: 'green'},
            {name: 'footer', height: 100, color: 'blue'},
            {name: 'header', height: 50, color: 'orange'},
            {name: 'body', height: 'undefined', color: 'purple'},
            {name: 'footer', height: 100, color: 'pink'}
        ];

        $scope.cameraWidth = 0.5 * window.innerHeight;

        $scope.slideData = null;
        var Utility = $famous['famous/utilities/Utility'];
        Utility.loadURL(demo.SlideData.getUrl(), function(data){
            $scope.slideData = demo.SlideData.parse(data);
        });

        $scope.myCameraOptions = {
            size: [$scope.cameraWidth, true],
            content: 'img/camera.png',
            properties: {
                width: '100%'
            }
        };

        $scope.slideWidth = 0.8 * $scope.cameraWidth;
        $scope.slideHeight = $scope.slideWidth + 40;
        $scope.slidePosition = 0.77 * $scope.cameraWidth;

        $scope.slideShowOptions = {
            size2: [($scope.slideWidth), ($scope.slideHeight)],

            size: [450, 500],
            data: undefined,
            lightboxOpts: {
                inOpacity: 1,
                outOpacity: 0,
                inOrigin: [0, 0],
                outOrigin: [0, 0],
                showOrigin: [0, 0],
                inTransform: Transform.thenMove(Transform.rotateX(0.9), [0, -300, -300]),
                outTransform: Transform.thenMove(Transform.rotateZ(0.7), [0, window.innerHeight, -1000]),
                inTransition: { duration: 650, curve: 'easeOut' },
                outTransition: { duration: 500, curve: Easing.inCubic }
            }
        };

        $scope.ssmOrigin = [0.5, 0];
        $scope.ssmAlign = [0.5, 0];
        $scope.ssmTransform = Transform.translate(0, (0.77 * $scope.cameraWidth), 0);

        $scope.calign = [0.5, 0];

        $scope.ctransform = Transform.behind;

        $scope.sscOptions = {
            properties: {
                overflow: 'hidden'
            }
        };

    }]);

Meteor.startup(function () {
    angular.bootstrap(document, ['taskMaster']);
});
