import React from 'react'
import { Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    hr: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2)
    }
}))

const DividerComponent = (props) => {
    const classes = useStyles()

    return <Divider component='hr' className={classes.hr} />
}

export default DividerComponent