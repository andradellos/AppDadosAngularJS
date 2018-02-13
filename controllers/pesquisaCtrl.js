
app.controller('PesquisaCtrl',  function ($scope) {

    $scope.tituloLista = 'Pesquisa de pessoas';  

    $scope.emploiee = {};
   // $scope.emploiee.selected = { nome: 'Mariana' };
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

        window.sessionStorage.setItem('people', JSON.stringify($scope.emploiee.selected));
       // window.location.href = '#!/resultado/' + emploiee.selected.nome

        //do selectedItem.PropertyName like selectedItem.Name or selectedItem.Key 
        //whatever property your list has.
    };
});