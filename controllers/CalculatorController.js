var calculatorController = function () {
    var calView;

    function init() {

        var calculatorModelInstance = new calculatorModel(calModelSpec);
        calView = new calculatorView(calculatorModelInstance);
        displayController(calView.getCalculatorView);

        for (var i = 0; i < calModelSpec.numericButtons(buttonInfo).length; i++) {
          new numericButtonController(numericButtonModel, calModelSpec.numericButtons(buttonInfo)[i].textValue, calView.getCalculatorView, test);
        }

        for (var i = 0; i < calModelSpec.operatorButtons(buttonInfo).length; i++) {
            OperatorButtonController(OperatorButtonModel, calModelSpec.operatorButtons(buttonInfo)[i].textValue, calView.getCalculatorView);
        }
    }

    function test() {

        alert("btn clicked1");
    }

    this.render = function () {
        return calView.getCalculatorView;

    }

    this.addOnClick = function () {

        alert("btn clicked");
    }

    this.btnHandler = function (btnReference) {
        console.log('btn reference in calculator .. ' + btnReference);
        alert('btn reference in calculator');
    }


    init();
};