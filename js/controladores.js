
miApp.controller('bodyC',function($scope){




    $scope.papa = function(){
        alert("Ejecutaste PAPA!!");
    }

    $scope.name = "pepee control body"

    $scope.tabla = ["bla 1","bla2","bla3"]

    $scope.agregar = function(){
        //$scope.tabla.push("nuevo!!"+Math.random());
        rowData.push("make: 'Fiat', model: 'Palio', price: 60000");

    }

    $scope.arriba = function () {

        //getDisplayedRowAtIndex(index)
        //$scope.men= $scope.gridOptions.rowIndex;
        $scope.mensaje="Arriba";
        //alert("dentro de la funcion Arriba");

        var rowNode = $scope.gridOptions.api.getRowNode(2);
        var newPrice = Math.floor(Math.random()*100000);
        var newModel = 'T-' + Math.floor(Math.random()*1000);


        var newData = {
            id: 2,
            make: 'Ford',
            model: newModel,
            price: newPrice
        };

        rowNode.setData(newData);
        //rowNode.setData(tabla);



    }

    $scope.abajo=function () {
        $scope.mensaje="abajo"
        //var row_sel = function (g, xpos) {
          xpos=0;
            xpos=xpos+1;
            $scope.gridOptions.api.forEachNode(function (node) {
                if (node.childIndex === xpos) {
                    node.setSelected(true, true);
                }
            });
        //};
    }

    $scope.izquierda=function () {
        $scope.mensaje="izq"
    }

    $scope.derecha=function () {
        $scope.mensaje="der"
    }
    function onRowSelected(event) {
        //window.alert("row " + event.node.rowIndex + " selected = " + event.node.selected);
        if (event.node.selected){seleccionFila=event.node.rowIndex}

        //alert(seleccionFila)

        //$scope.men = seleccionFila
    }

    function onSelectionChanged(event) {
        var rowCount = event.api.getSelectedNodes();

        console.log(rowCount[0].id);
        $scope.men=rowCount[0].id;

        //window.alert('selection changed, ' + rowCount + ' rows selected');
        //alert(event.api.cellFocused);
    }









    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];

    var rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowSelection: 'single',
        onRowSelected: onRowSelected,
        onSelectionChanged: onSelectionChanged,
        rowData: rowData

    };

});



miApp.controller('div1C',function($scope){
    $scope.name = 'nombre desde scope control div1c';

    $scope.f1 = function(){
        alert("Ejecutaste f1");
    }
});



miApp.controller('div2C',function($scope){
    $scope.name = 'nombre desde scope controlador div2c';

    $scope.f2 = function(){
        //alert("Ejecutaste f2!!");
        ngDialog . abierto ({
            plantilla :  ' <p> Ejecutaste </ p> ' ,
            plain :  true
        });
    }
});

