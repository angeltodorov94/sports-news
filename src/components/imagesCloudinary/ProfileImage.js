import React from 'react'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

const ProfileImage = ({ image, size }) => {
    return (
        <CloudinaryContext cloudName="achicha94">
            <Image publicId={image}>
                <Transformation width={size} crop="fit" aspect_ratio="1:1" />
            </Image>
        </CloudinaryContext>
    )
}

export default ProfileImage