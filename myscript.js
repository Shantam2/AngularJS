(function () {

    var app = angular.module("MyApp", []);

    var MainController = function ($scope, $http) {
        $scope.username = "Angular";
        $scope.message = "Hello, Angular";
        var person = { firstname: "Shantam", lastname: "Mogali", imageSrc: "" };
        $scope.me = person;

        var onComplete = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url).then(onRepos);
        };

        var onRepos = function (response) {
            $scope.repos = response.data;
        };
        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" + username).then(onComplete);
        }
    };


    app.controller("MainController", MainController);

} ());


