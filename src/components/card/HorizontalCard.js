import React from 'react'
import { Link, Grid } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import Image from '../imagesCloudinary/Image'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1),
        ">": {
            padding: theme.spacing(0)
        },
    },
    link: {
        color: '#272121',
        fontSize: '36px',
        fontWeight: 'bold',

        '&:hover': {
            color: '#e16428'
        }
    },
}))

const HorizontalCard = ({ id, title, imageUrl }) => {
    const classes = useStyles()

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={4}>
                <Image imageUrl={imageUrl} />
            </Grid>
            <Grid container item xs={8} alignItems='center'>
                <Link component={RouterLink} to={`/articles/${id}`} underline='none' className={classes.link}>
                    {title}
                </Link>
            </Grid>
        </Grid>
    )
}

export default HorizontalCard