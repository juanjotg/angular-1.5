var configurarEstado = function($stateProvider){
    $stateProvider
        .state('/configuracion', {
            url: '/configuracion',
            template: '<configuracion></configuracion>'
        })
}


angular.module('configuracion', ['ngMaterial'])
    .component('configuracion', {
         templateUrl: './componentes/configuracion/configuracion.html'
    })
    .config(configurarEstado);