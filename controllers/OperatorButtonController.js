var OperatorButtonController = function(model,domText , domElement){

    var btn;
    function init(){
        btn = new OperatorButtonView(model,this.onClickHandler);
        btn.init();
        btn.setListener();
        var btnElem = btn.getButtonElement();
        btnElem.innerText = domText;
        btnElem.value = domText;
        domElement.appendChild(btnElem);
    }

    this.onClickHandler = function (btnReference){
        if (typeof listener === 'function') {
            listener(btnReference);
        }
    };

    init();
}
