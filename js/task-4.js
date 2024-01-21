const registerForm = document.querySelector("form");
let values =[];
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        return window.alert('All form fields must be filled in');
      }

    values.push({userEmail : email, userPassword : password});
    console.log(values);
    form.reset();
}

