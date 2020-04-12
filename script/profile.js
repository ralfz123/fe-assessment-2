// Variable declarations
var inputs = document.getElementsByTagName('input');
var enableButton = document.getElementById('enableButton');

// Functions
enableButton.onclick = () => {
    console.log('Clicked')

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'text' || inputs[i].type == 'password' || inputs[i].type == 'number' || inputs[i].type == 'radio') {
            inputs[i].disabled = false;
            console.log('Removed "disabled"');
        }
    }
}