var displayController = function (domElement, domId) {
    var dispView;

    function init() {
        dispView = new displayView(displayModel);
        var inputElem = dispView.getInputElement;

        domElement.appendChild(inputElem);
    }

    init();
}