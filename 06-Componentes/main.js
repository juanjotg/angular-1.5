angular.module('frontEdge', ['ngMaterial', 'toolbar', 'sidenav',  'tarea', 'listatareas', 'fab', 'fichatarea'])
    .config(
        function($mdThemingProvider){
            $mdThemingProvider.theme('default').primaryPalette('lime').accentPalette('red');                
        }
    )


// forma distinta de enganchar un modulo con una vista (arranque de la aplicación manejado)
// equivale a poner el "ng-app" al código html, pero interesa hacerlo de esta forma para que la 
// carga se vaya haciendo dinamicamente

var documentoHTML = angular.element(document);

var iniciarApp =  function(){
            angular.bootstrap(documentoHTML, ['frontEdge']);
        };

documentoHTML.ready(iniciarApp);

