import React from 'react'
import { Alert } from '@material-ui/lab'

const ErrorMessage = ({ error }) => {
    return <Alert severity="error"><strong>{error}</strong></Alert>
}

export default ErrorMessage