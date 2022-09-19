const form = document.getElementById("form")
const username = document.getElementById("name")
const email = document.getElementById("email")
const address = document.getElementById("address")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener("submit", e => {
    e.preventDefault()

    const validName = usernameValidation()
    const validEmail = emailValidation()
    const validAddress = addressValidation()
    const validPassword = passwordValidation()
    const validPassword2 = password2Validation()

    if (
        !validName ||
        !validEmail ||
        !validAddress ||
        !validPassword ||
        !validPassword2
    ) {
        return
    } else {
        const val = {
            name: validName,
            email: validEmail,
            address: validAddress,
            password: validPassword,
        }
        alert(`New User Created\nName: ${val.name}\nEmail: ${val.email}`)
        console.log(val)
    }
    username.value = ""
    email.value = ""
    address.value = ""
    password.value = ""
    password2.value = ""

    document
        .querySelectorAll(".form-control")
        .forEach(element => (element.className = "form-control"))
})

const usernameValidation = () => {
    if (username.value.trim() === "") {
        setErrorFor(username, "*Username cannot be blank")
    } else if (username.value.length <= 5) {
        setErrorFor(username, "*Username must be at least 5 characters")
    } else if (username.value.length > 20) {
        setErrorFor(username, "*Username must less than 20 characters")
    } else {
        setSuccessFor(username)
        return username.value
    }
}

const emailValidation = () => {
    if (email.value.trim() === "") {
        setErrorFor(email, "*Email cannot be blank")
    } else if (email.value.length < 10 || email.value.length > 50) {
        setErrorFor(email, "*Email must be in 10 to 50 characters")
    } else if (!isEmail(email.value)) {
        setErrorFor(email, "*Not a valid email")
    } else {
        setSuccessFor(email)
        return email.value
    }
}

const addressValidation = () => {
    const addressValue = address.value.trim()
    if (address.value.trim() === "") {
        setErrorFor(address, "*Address cannot be blank")
    } else if (address.value.length < 10) {
        setErrorFor(address, "*Address must be at least 10 characters")
    } else if (address.value.length > 50) {
        setErrorFor(address, "*Address must be less than 50 characters")
    } else {
        setSuccessFor(address)
        return address.value
    }
}

const passwordValidation = () => {
    if (password.value === "") {
        setErrorFor(password, "*Password cannot be blank")
    } else if (password.value.length < 8) {
        setErrorFor(password, "*Password must be at least 8 characters")
    } else {
        setSuccessFor(password)
        return password.value
    }
}

const password2Validation = () => {
    if (password2.value === "") {
        setErrorFor(password2, "*Password cannot be blank")
    } else if (password.value !== password2.value) {
        setErrorFor(password2, "*Passwords does not match")
    } else {
        setSuccessFor(password2)
        return password2.value
    }
}

username.addEventListener("keyup", usernameValidation)
username.addEventListener("blur", usernameValidation)

email.addEventListener("keyup", emailValidation)
email.addEventListener("blur", emailValidation)

address.addEventListener("keyup", addressValidation)
address.addEventListener("blur", addressValidation)

password.addEventListener("keyup", passwordValidation)
password.addEventListener("blur", passwordValidation)

password2.addEventListener("keyup", password2Validation)
password2.addEventListener("blur", password2Validation)

const setErrorFor = (input, message) => {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    formControl.className = "form-control error"
    small.innerText = message
}

const setSuccessFor = input => {
    const formControl = input.parentElement
    formControl.className = "form-control success"
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    )
}
