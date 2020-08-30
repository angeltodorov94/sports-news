import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'
import { categories } from '../../utils/navigations'
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
        {categories.map(x => <MenuItem key={x.value} value={x.value}>{x.name}</MenuItem>)}
    </TextField>
}

export default SelectInput