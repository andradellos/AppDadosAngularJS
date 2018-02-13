var injecaoDep = ['ngRoute', 'ui.select'];
'use strict';
var app = angular.module('MacAPP', injecaoDep);

app.config(function ($routeProvider) {

    $routeProvider.when('/home', {
        
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
    });

    $routeProvider.when('/pesquisa', {
        controller: 'PesquisaCtrl',
        templateUrl: 'views/Pesquisa.html'
        
    });

    $routeProvider.when('/resultado', {
       
        controller: 'ResultadoCtrl',
        templateUrl: 'views/resultado.html'
    });

    $routeProvider.when('/resultado/:nome', {

        controller: 'ResultadoCtrl',
        templateUrl: 'views/resultadoComSelect.html'
    });

    // caso não seja nenhum desses, redirecione para a rota '/'
    $routeProvider.otherwise({ redirectTo: '/home' });
});