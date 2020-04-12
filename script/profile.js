// var inputs = document.getElementsByTagName('input');
// var enableButton = document.getElementsByClassName('enableButton');

// enableButton.onclick = () => {
//     console.log('geklikt')
// for(var i = 0; i < inputs.length; i++) {
//     if (inputs[i].type == 'text'){
//         inputs[i].disabled = false;
//     }
// }
// }

// var enableButton = document.getElementsByClassName('enableButton');

// enableButton.addEventListener("click", disableWeg);



document.getElementById('enableButton').onclick = function() {disableWeg()};

function disableWeg() {
    console.log("geklikt")
} 