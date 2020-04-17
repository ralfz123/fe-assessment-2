// Declare variables
let fieldset = document.getElementsByTagName('fieldset');
let button = document.getElementsByTagName('button');
let li = document.getElementsByTagName('li');
const form = document.getElementsByTagName('form');
const inputFile = document.getElementById("inputFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = document.querySelector(".image-preview__image");
const previewDefaultText = document.querySelector(".image-preview__default-text");

button[1].innerHTML = "Verder"; // Changes from "Submit" to "Verder", because JS is now included (Progressive Enhancement)

fieldset[1].style.display = "none"; // This fieldset is hidden, because the principle Progressive Disclosure
fieldset[2].style.display = "none"; // This fieldset is hidden, because the principle Progressive Disclosure

// Function to live preview the uploaded photo.
inputFile.addEventListener("change" , function() {
    const file = this.files[0];
    console.log(file);

    if (file) {
        const reader = new FileReader();

        previewDefaultText.style.display = "none"; 
        previewImage.style.display = "block";

        reader.addEventListener("load", function() {
            console.log(this);
            previewImage.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
        button[1].setAttribute("type", "submit"); // Form can be submit

    } else {
        previewDefaultText.style.display = null; // This line code says 'null', so it says that it has to activate the default (css properties)
        previewImage.style.display = null;
        previewImage.setAttribute("src", "");
    };
});

// When the current fieldset is equal to 0, then:
let current_fieldset = 0;
fieldset[current_fieldset].style.display = "block";
if (current_fieldset == 0) {
    li[0].style.backgroundColor = "red"; // The first bullet of the procesbar gets a red color
};


// When the right button ('Verder') gets hit
button[1].onclick = () => {
    current_fieldset++;
    let back_fieldset = current_fieldset - 1;
    if ((current_fieldset > 0) && (current_fieldset < 3)) {
        fieldset[current_fieldset].style.display = "block"; // This fieldset is now visible
        fieldset[back_fieldset].style.display = "none"; // This fieldset is now invisible
        li[current_fieldset].style.backgroundColor = "red"; // The current bullet of the procesbar gets a red color
        li[back_fieldset].style.backgroundColor = "#b3b3b3";
        if (current_fieldset == 2) {
            button[1].innerHTML = "Submit"; // Button text is changed to "Submit", because you can literally submit the form
        };
    };
};


// When the left button ('Terug') gets hit
button[0].onclick = () => {
    if (current_fieldset > 0) {
        current_fieldset--;
        let back_fieldset = current_fieldset + 1;
        fieldset[current_fieldset].style.display = "block"; // This fieldset is now visible
        fieldset[back_fieldset].style.display = "none"; // This fieldset is now invisible
        li[current_fieldset].style.backgroundColor = "red"; // The current bullet of the procesbar gets a red color
        li[back_fieldset].style.backgroundColor = "#b3b3b3";
        if (current_fieldset < 2) {
            button[1].innerHTML = "Verder"; // Button text is changed to "Verder", because you can tap through the form fieldsets
            button[1].setAttribute("type", "button"); // Prevent turning back to the home page
        };
    };

    // When user is on fieldset[0] and wants to go to the home page, he presses the back button
    if (current_fieldset == 0) {
        button[0].addEventListener('click', function home() {
            location.href = ('index.html'); // Destination of the page; home page
        });
    };
};
