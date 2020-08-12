import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../imagesCloudinary/Image'
import Grid from '@material-ui/core/Grid'
import Typography from '../titles/Typography'
import { makeStyles } from '@material-ui/core/styles'

const HorizontalCard = ({ id, title, imageUrl }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Image imageUrl={imageUrl} />
            </Grid>
            <Grid item xs={8}>
                <Link to={`/articles/${id}`}><Typography type='h4' text={title} /></Link>
            </Grid>
        </Grid>
    )
}

export default HorizontalCard