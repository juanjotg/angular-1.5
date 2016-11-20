angular.module('frontEdge', ['ngMaterial', 'ui.router', 'toolbar', 'sidenav',  'tarea', 'listatareas', 'fab', 'fichatarea', 'configuracion'])
    .config(
        function($mdThemingProvider){
            $mdThemingProvider.theme('default').primaryPalette('lime').accentPalette('red');                        
    }) 
    .config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    })  
    .config(function($stateProvider){
       
       $stateProvider.state('portada',{
           url: '/',
           template: '<listatareas></listatareas>'
       })
    })
    


// forma distinta de enganchar un modulo con una vista (arranque de la aplicación manejado)
// equivale a poner el "ng-app" al código html, pero interesa hacerlo de esta forma para que la 
// carga se vaya haciendo dinamicamente

var documentoHTML = angular.element(document);

var iniciarApp =  function(){
            angular.bootstrap(documentoHTML, ['frontEdge']);
        };

documentoHTML.ready(iniciarApp);

