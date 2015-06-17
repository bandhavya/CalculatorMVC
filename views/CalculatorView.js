var calculatorView = function (model) {
    var numericBtns, operatorBtns;

    var calculatorButtonsContainer = document.createElement('div');

    function init() {
        numericBtns = model.numberButtons;
        operatorBtns = model.operatorButtons;
        calculatorButtonsContainer.className = model.className;
        calculatorButtonsContainer.style.width = model.width;
        calculatorButtonsContainer.style.height = model.height;
        calculatorButtonsContainer.id = model.id;
        calculatorButtonsContainer.style.backgroundColor = model.backgroundColor;

        /*******/
        //this.render();

    }

    this.getCalculatorView = calculatorButtonsContainer;

    /**
     * this function renders the calculator
     */
    render = function () {

    };


    init();

};


