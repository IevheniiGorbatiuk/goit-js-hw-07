const registerForm = document.querySelector("form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        return window.alert('All form fields must be filled in');
      }

    let values = ({email : email, password : password});
    console.log(values);
    form.reset();
}

