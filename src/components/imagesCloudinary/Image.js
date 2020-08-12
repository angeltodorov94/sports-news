import React from 'react'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%'
    }
}))

const ImageTransformation = ({ imageUrl }) => {
    const classes = useStyles()

    return (
        <CloudinaryContext cloudName="achicha94">
            <Image publicId={imageUrl} className={classes.image}>
                <Transformation width="1.0" crop="fill" aspect_ratio="16:9" />
            </Image>
        </CloudinaryContext>
    )
}

export default ImageTransformation