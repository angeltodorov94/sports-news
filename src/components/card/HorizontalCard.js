import React from 'react'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import Image from '../imagesCloudinary/Image'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1),
        ">": {
            padding: theme.spacing(0)
        },
    },
    link: {
        fontSize: '36px',
        fontWeight: 'bold',

        '&:hover': {
            color: theme.palette.primary.dark
        }
    },
}))

const HorizontalCard = ({ id, title, imageUrl }) => {
    const classes = useStyles()

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={4} className={classes.picture}>
                <Image imageUrl={imageUrl} />
            </Grid>
            <Grid container item xs={8} className={classes.inner} alignItems='center'>
                <Link component={RouterLink} to={`/articles/${id}`} underline='none' className={classes.link}>
                    {title}
                </Link>
            </Grid>
        </Grid>
    )
}

export default HorizontalCard