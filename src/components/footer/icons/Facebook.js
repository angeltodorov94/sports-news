import React from 'react'
import Link from '@material-ui/core/Link'
import { Facebook } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    link: {
        color: 'white',

        '&:hover': {
            color: theme.palette.primary.light
        }
    },
}))

const FacebookIcon = (props) => {
    const classes = useStyles()

    return <Link href="https://www.facebook.com/" className={classes.link}><Facebook fontSize='large' /></Link>
}

export default FacebookIcon