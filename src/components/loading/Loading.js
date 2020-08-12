import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
    loading: {
        color: '#273c75',
        display: 'block',
        margin: '0 auto'
    },
}))

const Loading = (props) => {
    const classes = useStyles()

    return <CircularProgress className={classes.loading} />
}

export default Loading