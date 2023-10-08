let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});
const fullName = document.getElementById('fName');
const email = document.getElementById('email');
const phone = document.getElementById('phone') ;
const gender = document.getElementById('gender');


function validate(){
    if (fullName.value.trim()===""){
        alert('Full Name must be filled')
        return false;
    } else
    if (email.value.trim()===""){
        alert('Email must be filled')
        return false;
    } else

    if (phone.value.trim()===""){
        alert('phone must be filled')
        return false;
    }else
    {
        alert('Message saved,Thank you.')
    }
}
// Attach a submit event listener to the form
const form = document.getElementById('yourFormId'); // Replace 'yourFormId' with your actual form's id
form.addEventListener('submit', function (event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Access form elements by their id
    const fullName = document.getElementById('fName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const gender = document.getElementById('gender');

    // Perform validation checks
    if (fullName.value.trim() === "") {
        alert('Full Name must be filled');
    } else if (email.value.trim() === "") {
        alert('Email must be filled');
    } else if (phone.value.trim() === "") {
        alert('Phone must be filled');
    } else if (gender.value === "") {
        alert('Please select a gender');
    } else {
        // All fields are filled, show a success message
        alert('Message saved. Thank you.');
        // You can optionally submit the form here if needed
        // form.submit();
    }
});

