angular.module("todoListApp", [])
.controller('mainCtrl', function ($scope) {
    $scope.helloWorld = function () {
        console.log('Hello there');
    };
})

.controller('coolCtrl', function ($scope) {
    $scope.whoAmI = function () {
        console.log('Hey, bro. This is the cool controller function');
    }
    $scope.helloWorld = function () {
        console.log('tHis iS nOt ThE maIn CoNtrOLler');
    }
})   

.controller('imaSibling', function ($scope) {
    $scope.foobar = 1234;
});