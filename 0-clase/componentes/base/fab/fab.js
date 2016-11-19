import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const raiz ="./componentes/base/"
const nombreComponente = 'fab'

angular.module(nombreComponente, ['ngMaterial'])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`
    })


//export var nombre = nombreComponente

export default nombreComponente