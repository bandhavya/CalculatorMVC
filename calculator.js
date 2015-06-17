var calculator = function() {

    var createdElement = calciOuterDiv.divElem();

    var outerDivElem = createdElement;
    var displayElem = Object.create(calciInputText),
        dispElem = displayElem.display();
    dispElem.className = 'inputField';
    
    outerDivElem.appendChild(dispElem);
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttonContainerClass';

    for (var i = 0; i < ButtonInfo.data.length; i++) {
        var btn, elem;
        if (ButtonInfo.data[i].type == 'arthimetic') {
            btn = Object.create(arthimeticButton),
                elem = btn.btnElem();
            elem.className = 'arth_btnClass';

        } else if (ButtonInfo.data[i].type == 'equalType') {
            btn = Object.create(numericButton),
                elem = btn.btnElem();
            elem.className = 'eq_btnClass';

        } else {
            btn = Object.create(numericButton),
                elem = btn.btnElem();
            elem.className = 'num_btnClass';

        }
        elem.innerHTML = ButtonInfo.data[i].value;
        elem.name = ButtonInfo.data[i].type;
        buttonContainer.appendChild(elem);

    }
    window.onload = function() {

        var containerBtns = document.getElementsByClassName('buttonContainerClass');
        for (var i = 0; i < containerBtns.length; i++) {
            containerBtns[i].addEventListener('click', function(j, event) {
                console.log(event.target);
                if (event.target.name == 'arthimetic' || event.target.name == 'equalType') {
                    arthButtonCtrl(event.target, j);

                } else {
                    numButtonCtrl(event.target, j);
                }
            }.bind(window, i), false);
        }
    }

    outerDivElem.appendChild(buttonContainer);

    return outerDivElem;
}
