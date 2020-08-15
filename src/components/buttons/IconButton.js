import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(-0.5),

        '& > *': {
            color: '#e16428'
        }
    }
}))

const IconButtonComponent = (props) => {
    const classes = useStyles()

    return (
        <IconButton onClick={props.onClick} className={classes.root}>
            {props.children}
        </IconButton>
    )
}

export default IconButtonComponent