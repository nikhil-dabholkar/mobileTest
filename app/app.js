
var urlBase = 'http://localhost:8127/assignment';
var app = angular.module('assignmentApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/login',
            {
                controller: 'loginController',
                templateUrl: urlBase+'/app/partials/login.html'
            })
        .when('/register',
            {
                controller: 'registerController',
                templateUrl: urlBase+'/app/partials/register.html'
            })
        .when('/logout',
            {
                controller: 'logoutController',
                templateUrl: urlBase+'/app/partials/logout.html'
            })  
        .when('/test',
            {
                controller: 'testController',
                templateUrl: urlBase+'/app/partials/test.html'
            })     
        .when('/result',
            {
                controller: 'resultController',
                templateUrl: urlBase+'/app/partials/result.html'
            })                                                                           
        .otherwise({ redirectTo: '/login' });
});




