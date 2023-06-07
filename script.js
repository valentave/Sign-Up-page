let errorMessage = function(input) {
    switch(input.id) {
        case "first-name":
            return "Enter a name with at least 3 characters.";
            break;
        case "last-name":
            return "Enter a last name with at least 3 characters.";
            break;
        case "email":
            return "Enter an email in the format xxxxxx@xxxxx.xxx.";
            break;
        case "phone":
            return "Enter only and at least 8 numeric digits.";
            break;
        case "password":
            return "Enter a password between 8 and 16 characters.";
        case "repeat-password":
            return "Repeat your password."
    }
}

const repeatPassword = document.querySelector("#repeat-password");
const password = document.querySelector("#password");

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("input", function(evt){
        this.setCustomValidity("");
        if (this.value === "") {
            this.classList.add("empty");
            this.parentNode.lastChild.previousSibling.textContent = ""
        }
        else {
            this.classList.remove("empty");
            let parent = this.parentNode;
            parent.lastChild.previousSibling.textContent = errorMessage(this);
        }
        if (this.validity.valid) this.parentNode.lastChild.previousSibling.textContent = "";
    })
})


repeatPassword.addEventListener("input", function (event) {
    let parent = this.parentNode;
    if (repeatPassword.value !== password.value) {
        parent.lastChild.previousSibling.textContent = "Passwords do not match";
        this.setCustomValidity("Passwords do not match");
    } else {
        parent.lastChild.previousSibling.textContent = "";
    }
});
