import React from 'react'
import Typography from '../../components/titles/Typography'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import ProfileImage from '../imagesCloudinary/ProfileImage'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from "react-redux"
import { deleteComment } from "../../store/actions/index"

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
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

    const classes = useStyles()
    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.id)

    const onClickHandler = () => {
        dispatch(deleteComment(data._id))
    }

    return (
        <Paper variant="outlined" className={classes.paper}>
            <Box marginRight={2}>
                <ProfileImage image={data.author.profilePicture} size={64} />
            </Box>
            <Box width={1}>
                <Box component='div' display="flex" justifyContent="space-between">
                    <Typography type="caption" text={data.author.email} />
                    <Typography type="caption" text={dateFormatted} />
                </Box>
                <Typography type="body" text={data.content} />
                {data.author._id === userId ? <Link component="button" onClick={onClickHandler} className={classes.delete}>Delete</Link> : null}
            </Box>
        </Paper>
    )
}

export default Comment