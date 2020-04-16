// Variable declarations
const enableButton = document.getElementById('enableButton');
const inputs = document.getElementsByTagName('input')


disablen(); // Invoke the function, so the disabled attribute is set to true

function disablen() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    };
};

// Functions
enableButton.onclick = () => { // When user presses on the button
    console.log('Clicked');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'text' || inputs[i].type == 'password' || inputs[i].type == 'number' || inputs[i].type == 'radio') // Activate all kinds of input fields
            if (inputs[i].disabled != false) { // When it's not equal to false (so true)
                inputs[i].disabled = false; // Remove "disabled" attribute
                console.log('Removed "disabled"');
                enableButton.innerHTML = 'Opslaan'; // Change button text to "Opslaan"
            } else { 
                console.log("Disabled!")
                enableButton.innerHTML = 'Bewerk'; // Change button text to "Bewerk"
                inputs[i].disabled = true; // Set "disabled" attribute to true
            };
    };
};