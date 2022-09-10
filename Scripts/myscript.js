var app = angular.module('myApp', []).controller('myCtrl', function($scope) {
    $scope.employees = [
    {name:'Ben',dateOfBirth:new Date("November 23, 1980"),gender:"Male",salary:500000,city:"Mumbai"},
    {name:'Sara',dateOfBirth:new Date("May 3, 1970"),gender:"Female",salary:390000,city:"Kurla"},
    {name:'Mark',dateOfBirth:new Date("July 24, 1974"),gender:"Male",salary:200000,city:"Thane"},
    {name:'Pam',dateOfBirth:new Date("June 18, 1979"),gender:"Male",salary:350000,city:"Churchgate"},
    {name:'Todd',dateOfBirth:new Date("April 30, 1983"),gender:"Male",salary:300000,city:"Kopar"}
    ];
    $scope.sortColumn = "name";
    });
