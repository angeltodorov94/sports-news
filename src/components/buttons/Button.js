import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    button: {
        marginBottom: theme.spacing(2)
    }
}))

const Buttons = ({ type, text, onClick }) => {
    const classes = useStyles()

    return <Button
        className={classes.button}
        type={type ? type : 'button'}
        variant='contained'
        color='primary'
        disableElevation
        size='large'
        onClick={onClick}
    >
        {text}
    </Button>
}

export default Buttons