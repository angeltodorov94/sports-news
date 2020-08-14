import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    textarea: {
        marginBottom: theme.spacing(2)
    }
}))

const TextArea = ({ text, name, value, error, onChange, onBlur }) => {
    const classes = useStyles()

    return (
        <TextField
            className={classes.textarea}
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
            margin='none'
            multiline
            rows={5}
        />
    )
}

export default TextArea