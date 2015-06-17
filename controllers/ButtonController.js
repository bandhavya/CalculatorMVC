
function buttonController(model,domTextContent,domElement , listener) {
    this.model =model;
    this.listener = listener;
    this.domTextContent = domTextContent;
    this.domElement = domElement;
};

buttonController.prototype.init = function() {
    // create a view using the model
    this.btnView = new buttonView(this.model, this.onClickHandler);
    this.btnView.init();
    this.btnElement = this.btnView.getButtonElement();
    this.btnElement.innerText = this.domTextContent;
    this.btnElement.value = this.domTextContent;
    this.domElement.appendChild(this.btnElement);

};

buttonController.prototype.onClickHandler = function (btnReference){
    if (typeof this.listener === 'function') {
        alert('btn ctrl..');
        this.listener(btnReference);
    }
};
