const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const formObject = {};

    if (!Number(email.value.length) && !Number(password.value.length)) {
        alert('Заповніть поля!')
    } else {
        const formData = new FormData(event.currentTarget);

        formData.forEach((value, name) => {
            formObject[name] = value;
        })
        
        console.log(formObject);
        event.currentTarget.reset();
    }
}