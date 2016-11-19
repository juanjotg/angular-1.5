// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'pages/home.html',
			controller 	: 'mainController',
            controllerAs: 'vm'
		})
		.when('/acerca', {
			templateUrl : 'pages/acerca.html',
			controller 	: 'aboutController',
            controllerAs: 'vm'
		})
		.when('/contacto', {
			templateUrl : 'pages/contacto.html',
			controller 	: 'contactController',
            controllerAs: 'vm'
		})
		.otherwise({
			redirectTo: '/'
		});
});


angularRoutingApp.controller('mainController', function() {
	var vm = this;
    vm.message = 'Hola, Mundo!';
});

angularRoutingApp.controller('aboutController', function() {
    var vm = this;
	vm.message = 'Esta es la página "Acerca de"';
});

angularRoutingApp.controller('contactController', function() {
    var vm = this;
	vm.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});