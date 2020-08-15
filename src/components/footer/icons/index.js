import React from 'react'
import Grid from '@material-ui/core/Grid'
import Facebook from './Facebook'
import YouTube from './YouTube'
import Instagram from './Instagram'
import Twitter from './Twitter'
import Reddit from './Reddit'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(3)
    },
}))

const SocialMedia = (props) => {
    const classes = useStyles()

    return (
        <Grid container justify='space-around' className={classes.root}>
            <Facebook />
            <Instagram />
            <YouTube />
            <Twitter />
            <Reddit />
        </Grid>
    )
}

export default SocialMedia