var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function($routeProvider) {
    $routeProvider
        .when('/Home', {
            templateUrl : "pages/Home.html",
            controller:"BooksCtrl"
        })
        .when('/About', {
            templateUrl : "pages/About.html",
            //  controller:"AboutCtrl"

        })

});
myApp.controller('BooksCtrl', function($scope) {
    $scope.BooksList = [{BookName: 'Harry Potter and the goblet of fire', done: false,
        ISBN: '0-439-13959-7',
        AuthorName: 'J.K.Rowling',
        YearPublished: '2000',
        ReadBooks: 'http://harrypotter.scholastic.com/excerpts/HP_Book4_Chapter_Excerpt.pdf'}];
    $scope.editIndex = false;
    $scope.add = function() {
        if( $scope.editIndex === false) {
            $scope.BooksList.push({
                BookName: $scope.BookName,
                ISBN: $scope.ISBN,
                AuthorName: $scope.AuthorName,
                YearPublished: $scope.YearPublished,
                ReadBooks:$scope.ReadBooks,
                done: false
            });
            localStorage.setItem('BookName',JSON.stringify($scope.BookName));
            localStorage.setItem('ISBN',JSON.stringify($scope.ISBN));
            localStorage.setItem('AuthorName',JSON.stringify($scope.AuthorName));
            localStorage.setItem('YearPublished',JSON.stringify($scope.YearPublished));
            localStorage.setItem('ReadBooks',JSON.stringify($scope.ReadBooks));

        }
        else {
            $scope.BooksList[$scope.editIndex].BookName = $scope.BookName;
            $scope.BooksList[$scope.editIndex].ISBN = $scope.ISBN;
            $scope.BooksList[$scope.editIndex].AuthorName = $scope.AuthorName;
            $scope.BooksList[$scope.editIndex].YearPublished = $scope.YearPublished;
            $scope.BooksList[$scope.editIndex].ReadBooks = $scope.ReadBooks;

        }
        $scope.editIndex = false;
        $scope.BookName = "";
        $scope.ISBN = "";
        $scope.AuthorName = "";
        $scope.YearPublished = "";
        $scope.ReadBooks="";

    };

    $scope.remove = function() {
        var oldList = $scope.BooksList;
        $scope.BooksList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.BooksList.push(x);
        });
    };
    $scope.edit = function(x) {
        $scope.BookName = $scope.BooksList[x].BookName;
        $scope.ISBN = $scope.BooksList[x].ISBN;
        $scope.AuthorName = $scope.BooksList[x].AuthorName;
        $scope.YearPublished = $scope.BooksList[x].YearPublished;
        $scope.ReadBooks = $scope.BooksList[x].ReadBooks;

        $scope.editIndex = x;
    };
    $scope.save = function (x) {
        $scope.current = {};
    }
});


