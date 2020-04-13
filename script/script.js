// Variable declarations
var fieldset = document.getElementsByTagName('fieldset');
var button = document.getElementsByTagName('button');
// var buttonOne = document.getElementsByClassName("back");
// var buttonTwo = document.getElementsByClassName("next");
var li = document.getElementsByTagName('li');
var form = document.getElementsByTagName('form');
form.onsubmit =()=>{return false};


// Functions
var current_fieldset = 0;
fieldset[current_fieldset].style.display = "block";
if (current_fieldset == 0){
    // button[0].style.display = "none";
    li[0].style.backgroundColor = "red";
    button[0].style.display = "inline";

}
// When the right button ('Verder') gets hit
button[1].onclick = ()=>{
    current_fieldset++;
    var back_fieldset = current_fieldset - 1;
    if ((current_fieldset > 0) && (current_fieldset < 3)){
            button[1].style.display = "inline";
            fieldset[current_fieldset].style.display = "block";
            fieldset[back_fieldset].style.display = "none";
            li[current_fieldset].style.backgroundColor = "red";
            li[back_fieldset].style.backgroundColor = "#b3b3b3";
             if (current_fieldset == 2){
                 button[1].innerHTML = "Submit";
             }
 
    } else {
        if (current_fieldset > 2){
            form.onsubmit =()=>{return true};
        }
    }
}

// When the left button ('Terug') gets hit
button[0].onclick = ()=>{
    if (current_fieldset > 0){
             current_fieldset--;
             var back_fieldset = current_fieldset + 1;
             fieldset[current_fieldset].style.display = "block";
             fieldset[back_fieldset].style.display = "none";
             li[current_fieldset].style.backgroundColor = "red";
             li[back_fieldset].style.backgroundColor = "#b3b3b3";
                if (current_fieldset < 2){
                 button[1].innerHTML = "Verder";
             }

    }
    if (current_fieldset == 0){
        // button[0].style.display = "none";
        
    }
}

// Wanneer user alleen op fieldset[0] is en naar home wilt gaan.
button[0].addEventListener('click', function home() {
    if (current_fieldset == 0) {
        if (button[0].onclick = function goHome(){
            location.href = ('index.html')
        });
    }
});






// // Variabelen declareren
// const persoonsgegevens = document.getElementById('infoNummerEen');
// const accountgegevens = document.getElementById('infoNummerTwee');
// const buttonNext = document.getElementById('next');
// const buttonTerug = document.getElementById('back');
// const form = document.getElementById('registratepage');


// // Wanneer buttonNext wordt geklikt
// buttonNext.addEventListener('click', function(e) {
//     e.preventDefault;
//     accountgegevens.style.display = 'block';
//     persoonsgegevens.style.display = 'none';
//     console.log(persoonsgegevens);
// });

// buttonTerug.addEventListener('click', function(e) {
//     e.preventDefault;
//     accountgegevens.style.display = 'none';
//     persoonsgegevens.style.display = 'block';
//     console.log(persoonsgegevens);
// });