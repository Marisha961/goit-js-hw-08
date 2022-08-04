const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const KEY_FORM = 'feedback-form-state';

const formData = {};

const onInputChange = (e) => {

    formData[e.target.name] = e.target.value;
    console.log(e.target.value);
    localStorage.setItem(KEY_FORM, JSON.stringify(formData));
};


refs.form.addEventListener('input', throttle(onInputChange, 500));

const onFormSubmit = (e) => {
    e.preventDefault();

    formData.email = refs.email.value;
    formData.message = refs.textarea.value;
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(KEY_FORM);
};

refs.form.addEventListener('submit', onFormSubmit);


const pageLoading = () => {
    const receivedОbject = JSON.parse(localStorage.getItem(KEY_FORM));

    if (receivedОbject) {
        refs.email.value = receivedОbject.email;
        refs.textarea.value = receivedОbject.message;
    }
};
pageLoading();

