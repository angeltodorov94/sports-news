import React from 'react'
import Link from '@material-ui/core/Link'
import { Twitter } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    link: {
        color: 'white',

        '&:hover': {
            color: theme.palette.primary.light
        }
    },
}))

const TwitterIcon = (props) => {
    const classes = useStyles()

    return <Link href="https://www.twitter.com/" className={classes.link}><Twitter fontSize='large' /></Link>
}

export default TwitterIcon