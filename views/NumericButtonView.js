
function numericButtonView(model,listener){

    buttonView.call(this, model);
}

numericButtonView.prototype = new buttonView();
numericButtonView.prototype.constructor = numericButtonView;
