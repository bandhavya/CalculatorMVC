function OperatorButtonView(model,listener){

        this.model = model;

        buttonView.call(this , this.model);

    }

OperatorButtonView.prototype = new buttonView();
OperatorButtonView.prototype.constructor = OperatorButtonView;