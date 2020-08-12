import React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import categories from '../../utils/navigations'

const SelectInput = ({ text, name, value, error, onChange, onBlur }) => {
    return <TextField
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
        margin='normal'
    >
        {categories.map(x => <MenuItem key={x} value={x}>{x.toUpperCase()}</MenuItem>)}
    </TextField>
}

export default SelectInput