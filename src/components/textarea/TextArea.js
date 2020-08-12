import React from 'react'
import TextField from '@material-ui/core/TextField'

const TextArea = ({ text, name, value, error, onChange, onBlur }) => {
    return (
        <TextField
            label={text}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error ? true : false}
            helperText={error}
            variant="outlined"
            required
            fullWidth
            margin='normal'
            multiline
            rows={5}
        />
    )
}

export default TextArea