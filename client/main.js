angular.module('taskMaster', ['angular-meteor', 'famous.angular'])
    .controller('mainController', ['$scope', function($scope){
        $scope.myGridLayoutOptions = {
            dimensions: [1,3]
        };
        $scope.items = [
            {name: 'header', height: 50, color: 'yellow'},
            {name: 'body', height: 'undefined', color: 'green'},
            {name: 'footer', height: 100, color: 'blue'}
        ];
    }]);

Meteor.startup(function () {
    angular.bootstrap(document, ['taskMaster']);
});
