var displayView = function (model) {
        var input =  document.createElement('input')
    
        function init() {
            input.className = model.className;
            input.style.width = model.width;
            input.style.height = model.height;
        }

        this.getInputElement = input;
        init();
} 
