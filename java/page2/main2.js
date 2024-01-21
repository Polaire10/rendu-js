document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form')
    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')
    let successContainer = document.querySelector('.message-success')
    let email = document.querySelector('#email')
    let pseudo = document.querySelector('#pseudo')
    let password = document.querySelector('#password')
    let password2 = document.querySelector('#password2')
    let darkModeButton = document.querySelector('#darkModeButton')

    darkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode')
    })

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        errorList.innerHTML = ""
        errorContainer.classList.remove('visible')
        successContainer.classList.remove('visible')

        if (pseudo.value.length < 6) {
            showError("Le champ pseudo doit contenir au moins 6 caractères")
        } else {
            showSuccess(pseudo)
        }

        if (!isValidEmail(email.value)) {
            showError("L'adresse e-mail n'est pas valide")
        } else {
            showSuccess(email)
        }

        if (!isValidPassword(password.value)) {
            showError("Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial")
        } else {
            showSuccess(password)
        }

        if (password.value !== password2.value) {
            showError("Les mots de passe ne correspondent pas")
        } else {
            showSuccess(password2)
        }

        if (isFormValid()) {
            successContainer.classList.add('visible')
        }
    })

    function showError(message) {
        errorContainer.classList.add('visible')
        let err = document.createElement('li')
        err.innerText = message
        errorList.appendChild(err)
    }

    function showSuccess(element) {
        element.classList.add('success')
    }

    function isValidEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    function isValidPassword(password) {
        let passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^6*. ,?]).+$/
        return password.length >= 10 && passCheck.test(password)
    }

    function isFormValid() {
        return (
            pseudo.classList.contains('success') &&
            email.classList.contains('success') &&
            password.classList.contains('success') &&
            password2.classList.contains('success')
        )
    }
})
