import React from 'react'
import { Alert } from '@material-ui/lab'

const InfoMessage = ({ text }) => {
    return <Alert severity="info"><strong>{text}</strong></Alert>
}

export default InfoMessage