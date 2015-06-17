
var numericButtonController = function(model, domText, domElement, listener){

    function init(){
        var btn;
        btn = new numericButtonView(model,this.onClickHandler);
        btn.init();
        btn.setListener();

        var btnElem = btn.getButtonElement();
        btnElem.innerText = domText;
        domElement.appendChild(btnElem);
    }

    this.onClickHandler = function (btnReference){
        console.log(1, btnReference)
        if (typeof listener === 'function') {
            listener(btnReference);
        }
    };

    init();
}
