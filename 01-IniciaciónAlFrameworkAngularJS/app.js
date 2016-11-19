angular.module("miApp", []).
	controller("MiAppController", function(){
		console.log("xx");	
		
		var vm = this;

		vm.nuevaPelicula = "";
		vm.peliculas = [];

		vm.agregaPeli = function(){
			console.log("agregando pelicula");

			vm.peliculas.push(vm.nuevaPelicula);
		}
	} );