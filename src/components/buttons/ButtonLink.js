import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    buttonLink: {
        color: 'white',
        borderRadius: theme.spacing(0),
        fontSize: theme.spacing(2),
        lineHeight: '64px',
        padding: theme.spacing(0),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),

        '&:hover': {
            backgroundColor: '#e16428'
        }
    }
}))

const ButtonLink = ({ to, text }) => {
    const classes = useStyles()

    return <Button component={RouterLink} to={to} className={classes.buttonLink} disableRipple>{text}</Button>
}

export default ButtonLink