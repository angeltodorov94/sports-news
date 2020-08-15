import React from 'react'
import Link from '@material-ui/core/Link'
import { YouTube } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    link: {
        color: 'white',

        '&:hover': {
            color: theme.palette.error.main
        }
    },
}))

const YoutubeIcon = (props) => {
    const classes = useStyles()

    return <Link href="https://www.youtube.com/" className={classes.link}><YouTube fontSize='large' /></Link>
}

export default YoutubeIcon