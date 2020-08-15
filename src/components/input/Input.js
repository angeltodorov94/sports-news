import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    inputField: {
        marginBottom: theme.spacing(2),
    }
}))

const InputField = ({ type, name, value, onChange, onBlur, error, text }) => {
    const classes = useStyles()

    return <TextField
        className={classes.inputField}
        type={type}
        name={name}
        label={text}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error ? true : false}
        helperText={error}
        variant='outlined'
        required
        fullWidth
        margin='none'
    />
}

export default InputField