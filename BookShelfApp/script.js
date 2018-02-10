var app = angular.module('myApp', []);
app.controller('BooksCtrl', function($scope) {
    $scope.BooksList = [{BooksText1: 'Harry Potter and the goblet of fire', done: false,
        BooksText2: '0-439-13959-7',
        BooksText3: 'J.K.Rowling',
        BooksText4: '2000',
        BooksText5: 'http://publish.uwo.ca/~hamendt/WD%20final%20Project/litertaure/Goblet%20of%20Fire.pdf'}];

    $scope.add = function () {
        $scope.BooksList.push({BooksText1: $scope.BooksInput1,BooksText2: $scope.BooksInput2, BooksText3: $scope.BooksInput3,BooksText4: $scope.BooksInput4, BooksText5: $scope.BooksInput5,done: $scope.done});
        $scope.BooksInput1 = "";
        $scope.BooksInput2 = "";
        $scope.BooksInput3 = "";
        $scope.BooksInput4 = "";
        $scope.BooksInput5 = "";


    };
    $scope.delete = function() {
        var oldList = $scope.BooksList;
        $scope.BooksList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.BooksList.push(x);
        });
        console.log($scope.BooksList);
    };

    var up = $scope.BooksList;
    $scope.edit = function (x) {
        $scope.current = x;
        console.log($scope.current);
    };

    $scope.save = function (x) {
        $scope.current = {};
    }

    $scope.current = {};
});
