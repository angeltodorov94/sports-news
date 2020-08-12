const validation = (field, value) => {
    switch (field) {
        case 'email':
            return emailValidator(value)
        case 'rePassword':
        case 'password':
            return passwordValidator(value)
        case 'title':
        case 'author':
        case 'comment':
            return basicValidation(value)
        case 'content':
            return contentValidation(value)
        case 'category':
            return categoryValidation(value)
        case 'image':
            return imageUrlValidator(value)
        default:
            break;
    }
}

const checkValidity = (dataObj) => {
    let result = true
    Object.keys(dataObj).forEach(element => {
        if (dataObj[element].value === '' || dataObj[element].error !== null)
            result = false
    })
    return result
}

// validators

const emailValidator = (value) => {
    value = value.trim().toLowerCase()
    if (value === '') return { value, error: "The field cannot be empty!" }
    else if (!/\S+@\S+\.\S+/.test(value)) return { value, error: "The email is not valid!" }

    return {
        value,
        error: null
    }
}

const passwordValidator = (value) => {
    if (value === '') return { value, error: "The field cannot be empty!" }
    else if (value.length < 8)
        return { value, error: "The password must be at least 8 characters!" }
    else if (!/^[a-zA-Z0-9]+$/.test(value))
        return { value, error: "The password is not valid!" }

    return {
        value,
        error: null
    }
}

const basicValidation = (value) => {
    if (value === '') return { value, error: "The field cannot be empty!" }

    return {
        value,
        error: null
    }
}

const categoryValidation = (value) => {
    if (value === '') return { value, error: "You must pick a category!" }

    return {
        value,
        error: null
    }
}

const imageUrlValidator = (value) => {
    if (value === '')
        return { value, error: "You must select a picture!" }

    if (!value.startsWith('http://') && !value.startsWith('https://'))
        return { value, error: "Invalid URL!" }

    return {
        value,
        error: null
    }
}

const contentValidation = (value) => {
    if (value === '')
        return { value, error: "The field cannot be empty!" }
    if (value.length < 50)
        return { value, error: "The field must be at least 50 characters!" }

    return {
        value,
        error: null
    }
}

module.exports = {
    validation,
    checkValidity
} 