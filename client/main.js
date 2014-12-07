



Meteor.startup(function () {
    angular.module('taskMaster', ['angular-meteor', 'famous.angular'])
        .controller('mainController', ['$scope', function($scope){
            $scope.myGridLayoutOptions = {
                dimensions: [1,3]
            };
        }]);

    angular.bootstrap(document, ['taskMaster']);
});
