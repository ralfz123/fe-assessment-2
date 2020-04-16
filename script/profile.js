// Variable declarations
const enableButton = document.getElementById('enableButton');
const inputs = document.getElementsByTagName('input')


disablen();

function disablen() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }
}

// Functions
enableButton.onclick = () => {
    console.log('Clicked')

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'text' || inputs[i].type == 'password' || inputs[i].type == 'number' || inputs[i].type == 'radio')
            if (inputs[i].disabled != false) {
                inputs[i].disabled = false;
                console.log('Removed "disabled"');
                enableButton.innerHTML = 'Opslaan';
            } else {
                console.log("Disabled!")
                enableButton.innerHTML = 'Bewerk'
                inputs[i].disabled = true;
            }
    }
}