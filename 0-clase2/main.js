import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const nombreAplicacion = 'frontEdge'

angular.module(nombreAplicacion,['ngMaterial'])

let documentoHTML = angular.element(document)

let iniciarApp  = ()=> angular.bootstrap(documentoHTML, [nombreAplicacion])

documentoHTML.ready(iniciarApp)


