import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// import Typography from '../typography/Typography'

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none'
    },
    button: {
        marginBottom: theme.spacing(2),
        backgroundColor: '#272121',

        '&:hover': {
            backgroundColor: '#e16428',
        }
    }
}))


const ImageInput = ({ name, onChange, value }) => {
    const classes = useStyles()

    return (
        <Fragment>
            <input
                id="contained-button-file"
                accept="image/*"
                className={classes.input}
                type="file"
                name={name}
                onChange={onChange}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" className={classes.button} disableElevation>Upload Image</Button>
            </label>
            <span>{value}</span>
        </Fragment>
    )
}

export default ImageInput