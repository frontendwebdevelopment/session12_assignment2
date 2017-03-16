var app = angular.module('myApp', []);

app.filter('setDecimal', function ($filter) {
    return function (input, places) {
        if (isNaN(input)) return input;
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
        return Math.round(input * factor) / factor;
    };
});

app.controller('Ctrl', function ($scope) {
    $scope.val = 1.5678;
});