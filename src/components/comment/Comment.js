import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Paper, Box, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '../../components/typography/Typography'
import ProfileImage from '../imagesCloudinary/ProfileImage'
import { deleteComment } from '../../store/actions/index'

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        backgroundColor: 'white',
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1.5)
    },
    delete: {
        color: theme.palette.error.main,
        display: 'block',
        marginLeft: 'auto',
        marginRight: theme.spacing(0)
    }
}))

const Comment = ({ data }) => {
    const date = new Date(data.createdAt)
    const dateFormatted = `${date.getMonth()}.${date.getDate()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    const params = useParams()
    const classes = useStyles()
    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.id)

    const onClickHandler = () => {
        dispatch(deleteComment(params.id, data._id))
    }

    return (
        <Paper variant="outlined" className={classes.paper}>
            <Box mr={2}>
                <ProfileImage image={data.author !== null ? data.author.profilePicture : '/cs5r1hymw0fxypw6pivd'} size={64} />
            </Box>
            <Box width={1}>
                <Box component='div' display="flex" justifyContent="space-between" mb={1}>
                    <Typography type="caption" text={data.author !== null ? data.author.email : 'unknown user'} />
                    <Typography type="caption" text={dateFormatted} />
                </Box>
                <Typography type="body" text={data.content} />
                {data.author === null ? null :
                    (data.author._id === userId ? <Link component="button" onClick={onClickHandler} className={classes.delete}>Delete</Link> : null)}
            </Box>
        </Paper>
    )
}

export default Comment