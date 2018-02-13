app.controller('ResultadoCtrl', function ($scope, $routeParams) {
    $scope.emploiee = {};
    $scope.tituloLista = "Resultados";

   
    //Recuperando dados pela sessionStorage
    $scope.emploiee.selected = JSON.parse(window.sessionStorage.getItem('people'));
    window.sessionStorage.removeItem('people');

    //recuperando dados pela URL
    //$scope.emploiee.selected = { nome: $routeParams.nome };

    if ($routeParams.nome != null){
        $scope.tituloLista = "Resultado é " + $routeParams.nome;
    };
   
    $scope.emploiees = [
         { nome: 'Manuca', email: 'manuca@bol.com' },
         { nome: 'Luca', email: 'luca@bol.com' },
         { nome: 'Mariana', email: 'mariana@bol.com' },
         { nome: 'Naiana', email: 'naiana@bol.com' },
         { nome: 'Juan', email: 'jua@bol.com' },
         { nome: 'Esther', email: 'esther@bol.com' }
    ];
  
  

    $scope.onSelectCallback = function (selectedItem) {
        // alert(selectedItem.nome);
        //do selectedItem.PropertyName like selectedItem.Name or selectedItem.Key 
        //whatever property your list has.
    };
});