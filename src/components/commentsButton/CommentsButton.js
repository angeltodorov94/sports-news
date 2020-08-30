import React from 'react'
import { ExpandMore, ExpandLess } from '@material-ui/icons'
import Box from '@material-ui/core/Box'
import Typography from '../typography/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        '&:hover': {
            cursor: 'pointer'
        },
        '& > *': {
            color: '#272121',
            margin: theme.spacing(0)
        }
    }
}))

const CommentsButton = ({ toggle, onClick }) => {
    const classes = useStyles()

    return (
        <Box onClick={onClick} textAlign='center' className={classes.root} py={2} my={2}>
            <Typography type='h6' text='COMMENTS' />
            {toggle ? <ExpandLess fontWeight="large" />
                : <ExpandMore fontWeight="large" />}
        </Box>
    )
}

export default CommentsButton