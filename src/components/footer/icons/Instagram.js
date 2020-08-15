import React from 'react'
import Link from '@material-ui/core/Link'
import { Instagram } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    link: {
        color: 'white',

        '&:hover': {
            color: theme.palette.warning.main
        }
    },
}))

const InstagramIcon = (props) => {
    const classes = useStyles()

    return <Link href="https://www.instagram.com/" className={classes.link}><Instagram fontSize='large' /></Link>
}

export default InstagramIcon