import React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import categories from '../../utils/navigations'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    select: {
        marginBottom: theme.spacing(2)
    }
}))

const SelectInput = ({ text, name, value, error, onChange, onBlur }) => {
    const classes = useStyles()

    return <TextField
        className={classes.select}
        select
        value={value}
        name={name}
        label={text}
        onChange={onChange}
        onBlur={onBlur}
        error={error ? true : false}
        helperText={error}
        variant="outlined"
        required
        fullWidth
        margin='none'
    >
        {categories.map(x => <MenuItem key={x} value={x}>{x.toUpperCase()}</MenuItem>)}
    </TextField>
}

export default SelectInput