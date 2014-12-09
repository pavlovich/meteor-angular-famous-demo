angular.module('taskMaster', ['angular-meteor', 'famous.angular'])
    .controller('mainController', ['$scope', function($scope){
        $scope.myGridLayoutOptions = {
            dimensions: [1,3]
        };
        $scope.items = [
            {name: 'one', height: 100, color: 'yellow'},
            {name: 'two', height: 600, color: 'green'},
            {name: 'three', height: 200, color: 'blue'}
        ];
    }]);

Meteor.startup(function () {
    angular.bootstrap(document, ['taskMaster']);
});
