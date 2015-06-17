var buttonView = function (model, listener) {
    this.model = model;
    this.btn = document.createElement('button');
    this.listener = listener;
};

buttonView.prototype.init = function () {

    // this.model = model;
    //this.listener = listener;
    this.btn.className = this.model.className;
    this.btn.style.width = this.model.width;
    this.btn.style.height = this.model.height;
    this.btn.style.color = this.model.color;

}

buttonView.prototype.setListener = function () {
    this.btn.addEventListener('click', function (event) {
        var myValue = event.target.innerHTML;
        var displayObj = event.target.parentNode.firstChild;

        if (myValue == 'c') {

            displayObj.value = " ";

        } else if (myValue == '=') {

            displayObj.value = eval(displayObj.value);
        } else {
            displayObj.value = displayObj.value + myValue;
        }
    }, false);
}

buttonView.prototype.getButtonElement = function () {
    return this.btn;
}
buttonView.prototype.addElementonClick = function (callback) {

    alert('add elem click..');

}