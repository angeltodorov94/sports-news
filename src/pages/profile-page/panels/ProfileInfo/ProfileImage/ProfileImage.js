import React, { } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import imageUpload from '../../../../../utils/imageUpload'
import ImageInput from '../../../../../components/input/ImageInput'
import ProfileImage from '../../../../../components/imagesCloudinary/ProfileImage'
import { makeStyles } from '@material-ui/core/styles'
import { updateUserInformation } from '../../../../../store/actions/index'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center'
    }
}))

const ProfileImageContainer = ({ image }) => {
    const id = useSelector(state => state.auth.id)
    const dispatch = useDispatch()
    const classes = useStyles()
    // const [showImgInput, setShowImgInput] = useState(false)

    const onImageUpload = async e => {
        const publicId = await imageUpload(e.target.files)
        dispatch(updateUserInformation(id, { profilePicture: publicId }))
    }

    return (
        <Grid item xs={6} className={classes.root}>
            <ProfileImage image={image} size={256} />
            <ImageInput name='image' value={image.value} onChange={(e) => onImageUpload(e)} />
        </Grid>
    )
}

export default ProfileImageContainer