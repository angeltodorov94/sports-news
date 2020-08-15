import React from 'react'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    logo: {
        fontWeight: 'bold',
        lineHeight: '64px',
        fontSize: theme.spacing(4),
        margin: 'auto 24px',
        color: 'white'
    }
}))

const Logo = (props) => {
    const classes = useStyles()

    return <Link component={RouterLink} to="/" className={classes.logo} underline='none'>SportsNews</Link>
}

export default Logo