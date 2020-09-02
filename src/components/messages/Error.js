import React from 'react'
import { Alert } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    alert: {
        marginBottom: theme.spacing(2)
    }
}))

const ErrorMessage = ({ error }) => {
    const classes = useStyles()

    return <Alert severity="error" className={classes.alert}><strong>{error}</strong></Alert>
}

export default ErrorMessage