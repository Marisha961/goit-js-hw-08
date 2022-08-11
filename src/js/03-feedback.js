const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const KEY_FORM = 'feedback-form-state';

const selectedInput = {};

const onInputChange = (e) => {

    selectedInput[e.target.name] = e.target.value;

    localStorage.setItem(KEY_FORM, JSON.stringify(selectedInput));
    // console.log(selectedInput);
};


refs.form.addEventListener('input', throttle(onInputChange, 500));

const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(refs.form);
    formData.forEach((value, name) => console.log(value, name));
    console.log(formData);
    console.log(e.currentTarget);
    e.currentTarget.reset();
    localStorage.removeItem(KEY_FORM);
};

refs.form.addEventListener('submit', onFormSubmit);


const pageLoading = () => {
    const receivedОbject = JSON.parse(localStorage.getItem(KEY_FORM));
    console.log(receivedОbject);
    if (receivedОbject) {
        refs.email.value = receivedОbject.email || '';
        console.log(refs.email.value);
        refs.textarea.value = receivedОbject.message || '';
        console.log(refs.textarea.value);
    }

};
pageLoading();
