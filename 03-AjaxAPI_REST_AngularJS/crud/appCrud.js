var appCrud = angular.module("appCrud", []);

appCrud.controller("appCrudController", ["$http", function($http){
    
    var vm = this;    
    vm.error = false;   
    vm.peliculas = [];
    vm.clasificaciones = [];
    

    
    vm.nuevaPelicula = {
        nombre: '',
        director: '',
        clasificacion: 'Drama'
    };
    
    vm.editando = false;
    
    function traerPeliculas(){
        $http.get("http://localhost:3000/peliculas")
            .then(function(res){
                vm.peliculas = res.data;
            }, function(rest){
                vm.error = "Error:" + res.status;
            });
    }
    
    traerPeliculas();
    
    $http.get("http://localhost:3000/clasificaciones")
        .then(function(res){
            vm.clasificaciones = res.data;
        }, function(rest){
            vm.error = "Error:" + res.status;
        });
    
    vm.insertarPelicula = function(){
        
        $http.post("http://localhost:3000/peliculas", vm.nuevaPelicula)
            .then(function(){
                    traerPeliculas();
            });
             
    }
    
    vm.borrarPelicula = function(id){        
        $http.delete("http://localhost:3000/peliculas/" + id)
            .then(function(){
                traerPeliculas();
        });
    }
    
    vm.editarPelicula = function(index){
        console.log("editando", vm.peliculas[index]);
        vm.editPelicula = vm.peliculas[index];
        vm.editando = true;
        
    }
    
    vm.guardarPelicula = function(){
        $http.put("http://localhost:3000/peliculas/" + vm.editPelicula.id, vm.editPelicula)
            .then(function(){
                vm.editando = false; 
        });
    }
    
}]);