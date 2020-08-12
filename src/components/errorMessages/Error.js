import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'

const ErrorMessage = ({ error }) => {
    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <strong>{error}</strong>
        </Alert>
    )
}

export default ErrorMessage