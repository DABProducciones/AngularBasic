agGrid.initialiseAgGridWithAngular1(angular);

miApp = angular.module('miApp', ['agGrid']);

aplicación.controller ( 'div2C' , function ( $ scope ){
    $scope.clickToOpen = function () {
        ngDialog.open({template: ' popupTmpl.html ', className: ' ngdialog-theme-default '});
    };
});







