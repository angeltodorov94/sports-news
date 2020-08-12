import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Image from '../imagesCloudinary/Image'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}))

const CardComponent = (props) => {
    const classes = useStyles()

    return (
        <Grid item xs={6} sm={3}>
            <Card>
                <Image imageUrl={props.imageUrl} />
                <CardContent>
                    <Link to={`/articles/${props.id}`}>{props.title}</Link>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CardComponent