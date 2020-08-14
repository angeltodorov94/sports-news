import React from 'react'
import { Image, Transformation } from 'cloudinary-react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%'
    }
}))

const ImageTransformation = ({ imageUrl }) => {
    const classes = useStyles()

    return (
        <Image cloudName="achicha94" publicId={imageUrl} className={classes.image}>
            <Transformation width="1.0" crop="fill" aspect_ratio="16:9" />
        </Image>
    )
}

export default ImageTransformation