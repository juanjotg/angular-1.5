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
		}).when('/peliculas', {
			templateUrl : 'pages/peliculas.html',
			controller 	: 'peliculasController',
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


angularRoutingApp.controller("peliculasController", ["peliculasFactory", function(peliculasFactory){
		console.log("xx");	
		
		var vm = this;

		vm.nuevaPelicula = "";
		vm.peliculas = peliculasFactory.peliculas;

		vm.agregaPeli = function(){
            peliculasFactory.crearPelicula(vm.nuevaPelicula);
        }
	}] );

angularRoutingApp.factory("peliculasFactory", function(){
    var pelis = [];
    var crearPeli = function(nueva){
        pelis.push(nueva);
    };
    
    return {
        peliculas: pelis,
        crearPelicula: crearPeli
    };
});