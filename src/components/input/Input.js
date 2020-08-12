import React from 'react'
import TextField from '@material-ui/core/TextField'

const InputField = ({ type, name, value, onChange, onBlur, error, text }) => {
    return <TextField
        type={type}
        name={name}
        label={text}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error ? true : false}
        helperText={error}
        variant="outlined"
        required
        fullWidth
        margin='normal'
    />
}

export default InputField