document.addEventListener('DOMContentLoaded', function(){
    const form=document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    const bioTextarea = document.getElementById('bio');
    const charCount = document.getElementById('charCount');

    if (bioTextarea && charCount) {
        bioTextarea.addEventListener('input', function() {
            charCount.textContent = this.value.length;
        });
    }

    inputs.forEach(input => {
        input.addEventListener('blur', validateFiled);
        input.addEventListener('input', clearError);
    });

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    if (password && confirmPassword) {
        confirmPassword,addEventListener('input', function() {
            validatePasswordMatch();
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;

        inputs.forEach(input => {
            if (!validateFiled({target: input})) {
                isValid = false;
            }
        });

        if (password && confirmPassword) {
            if (!validatePasswordMatch()) {
                isValid = false;
            }
        }

        if (isValid) {
            showSuccessMessage();
        } else {
            showErrorMessage('Пожалуйства, исправьте ошибки в форме');
        }
    });

    function validateFiled(e) {
        const filed = e.target;
        const errorElement = document.GetElementById(filed.id + 'Error');

        if (!filed.required && !filed.value.trim()) {
            clearErrorForField(field);
            return true;
        }

        if (!filed.checkValidity()) {
            showErrorForField(field, getErrorMessage(field));
            return false;
        } else {
            clearErrorField(field);
            return true;
        }
    }

    function validatePasswordMatch() {
        const passwordValue = password.value;
        const confirmPasswordValue = confirmPassword.value;
        const errorElement = document.getElementById('confirmPasswordError');

        if (confirmPasswordValue && passwordValue !== confirmPasswordValue) {
            showErrorForField(confirmPassword, 'пароли не совпадают');
            return false;
        } else {
            clearErrorForField(confirmPassword);
            return true;
        }

    }

    function getErrorMessage(filed) {
        if(field.validity.valueMissing) {
            return 'Это поле обязательно для заполнения';
        }

        if (field.validity.typeMismatch) {
            if (filed.type === 'email') {
                return 'Введите корректный email адрес';
            }

        }

        if(field.validity.tooShort) {
            return `Максимальная длина: ${filed.minLength} символов`;
        }

        if (field.validity.tooLong) {
            return `Максимальная длина: ${filed.MaxLenght} символов`;
        }

        if (field.validity.patternMismatch) {
            if (field.type === 'password') {
                return 'Пароль должен содержать заглавные и строчные буквы, цифры';
            }

            if (filed.type === 'tel')  {
                return 'Введите телефон в формате +7 (999) 999-99-99';
            }
        }
        return 'некорректное значение'
    }

    function showErrorForField(field, message) {
        field.classList.add('error');
        const errorElement = document.getElementById(field.id + 'Error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrorForField(field) {
        field.classList.remove('error');
        const errorElement = document.getElementById(field.id + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    function clearError(e) {
        clearErrorForField(e.target);
    }

    function showMessage() {
        alert('Форма успешно отправлена!');
        form.reset();
        charCount.textContent = '0';

        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        document.querySelectorAll('.error').forEach(el => {
            el.classList.remove('error');
        });
    }

    function showErrorMessage(message) {
        alert(message);
    }
});

