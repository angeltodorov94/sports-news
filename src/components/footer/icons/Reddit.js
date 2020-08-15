import React from 'react'
import Link from '@material-ui/core/Link'
import { Reddit } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    link: {
        color: 'white',

        '&:hover': {
            color: theme.palette.error.main
        }
    },
}))

const RedditIcon = (props) => {
    const classes = useStyles()

    return <Link href="https://www.reddit.com/" className={classes.link}><Reddit fontSize='large' /></Link>
}

export default RedditIcon