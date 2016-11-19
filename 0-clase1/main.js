// fichero principal
// importar librerias ES5 estilo ES6 
import * as angular from 'angular'
import * as ngMaterial from 'angular-material'

angular.module('holaApp', ['ngMaterial'])


// arranque manual de AngularJS 
// uso de las arrow functions de ES6 
angular.
  element(document).
    ready(() => angular.bootstrap(document, ['holaApp']))