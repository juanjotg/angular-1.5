angular.module('holaApp', ['ngMaterial'])


// forma distinta de enganchar un modulo con una vista (arranque de la aplicación manejado)
// equivale a poner el "ng-app" al código html, pero interesa hacerlo de esta forma para que la 
// carga se vaya haciendo dinamicamente
angular.element(document).  // esto equivale a $(document).ready(function(){ ...});   // angular utilza jquery por dentro
    ready(  
        function(){
            angular.bootstrap(document, ['holaApp']);
        }
)