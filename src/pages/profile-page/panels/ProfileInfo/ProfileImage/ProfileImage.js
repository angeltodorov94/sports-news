import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Link } from '@material-ui/core'
import imageUpload from '../../../../../utils/imageUpload'
import ImageInput from '../../../../../components/input/ImageInput'
import ProfileImage from '../../../../../components/imagesCloudinary/ProfileImage'
import { makeStyles } from '@material-ui/core/styles'
import { updateUserInformation } from '../../../../../store/actions/index'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        marginBottom: theme.spacing(3)
    }
}))

const ProfileImageContainer = ({ image }) => {
    const id = useSelector(state => state.auth.id)
    const dispatch = useDispatch()
    const classes = useStyles()
    const [showImgInput, setShowImgInput] = useState(false)

    const onImageUpload = async e => {
        const publicId = await imageUpload(e.target.files)
        dispatch(updateUserInformation(id, { profilePicture: publicId }))
        setShowImgInput(false)
    }

    return (
        <Grid item xs={6} className={classes.root}>
            <ProfileImage image={image} size={256} />
            {showImgInput ? <ImageInput name='image' value={image.value} onChange={(e) => onImageUpload(e)} />
                : <Link component="button" variant="body2"
                    onClick={() => setShowImgInput(!showImgInput)}>Change Profile Picture</Link>}
        </Grid>
    )
}

export default ProfileImageContainer