// Declare variables
var fieldset = document.getElementsByTagName('fieldset');
var button = document.getElementsByTagName('button');
var li = document.getElementsByTagName('li');
var form = document.getElementsByTagName('form');
form.onsubmit = () => { return false };


// When the current fieldset is equal to 0, then:
var current_fieldset = 0;
fieldset[current_fieldset].style.display = "block";
if (current_fieldset == 0) {
    // button[0].style.display = "none";
    li[0].style.backgroundColor = "red";
    button[0].style.display = "inline";

}

// if (current_fieldset == 2){
//     button[1].innerHTML = "Submit";
//     button[1].setAttribute("type", "submit")
//     // form.onsubmit =()=>{return true};
// } else {
//     button[1].innerHTML = "Verder";
//     button[1].setAttribute("type", "submit")
//     // form.onsubmit =()=>{return true};
// }

// When the right button ('Verder') gets hit
button[1].onclick = () => {
    current_fieldset++;
    var back_fieldset = current_fieldset - 1;
    if ((current_fieldset > 0) && (current_fieldset < 3)) {
        button[1].style.display = "inline";
        fieldset[current_fieldset].style.display = "block";
        fieldset[back_fieldset].style.display = "none";
        li[current_fieldset].style.backgroundColor = "red";
        li[back_fieldset].style.backgroundColor = "#b3b3b3";
        if (current_fieldset == 2) {
            button[1].innerHTML = "Submit";
            button[1].setAttribute("type", "submit")
            // form.onsubmit =()=>{return true};
        }

    } else {

    }
}

// When the left button ('Terug') gets hit
button[0].onclick = () => {
    if (current_fieldset > 0) {
        current_fieldset--;
        var back_fieldset = current_fieldset + 1;
        fieldset[current_fieldset].style.display = "block";
        fieldset[back_fieldset].style.display = "none";
        li[current_fieldset].style.backgroundColor = "red";
        li[back_fieldset].style.backgroundColor = "#b3b3b3";
        if (current_fieldset < 2) {
            button[1].innerHTML = "Verder";
            button[1].setAttribute("type", "button")

        }

    }
    if (current_fieldset == 0) {
        // button[0].style.display = "none";

    }

    // Wanneer user alleen op fieldset[0] is en naar home wilt gaan.
    button[0].addEventListener('click', function home() {
        if (current_fieldset == 0) {
            if (button[0].onclick = function goHome() {
                location.href = ('index.html')
            });
        }
    });

    // Deze doet het niet, want wanneer op 2e scherm op 'terug' geklikt wordt, gaat hij terug naar 1e scherm en gelijk door naar ('/')
    // if (current_fieldset <= 0) {
    //     location.href = ('/');
    // }
}
