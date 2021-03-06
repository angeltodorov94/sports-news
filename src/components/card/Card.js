import React from 'react'
import { Link, Grid, Card, CardContent } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import Image from '../imagesCloudinary/Image'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    content: {
        height: '60px',
        backgroundColor: 'white',
        marginTop: '-4px'
    },
    link: {
        color: '#272121',
        display: 'block',
        textOverflow: 'ellipsis',
        wordWrap: 'break-word',
        overflow: 'hidden',
        maxHeight: '60px',
    },
}))

const CardComponent = (props) => {
    const classes = useStyles()

    return (
        <Grid item xs={6} sm={3}>
            <Card>
                <Image imageUrl={props.imageUrl} />
                <CardContent className={classes.content}>
                    <Link component={RouterLink} to={`/articles/${props.id}`} underline='none' className={classes.link}>{props.title}</Link>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CardComponent