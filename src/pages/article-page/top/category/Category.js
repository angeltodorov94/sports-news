import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        backgroundColor: '#03fc96',
        padding: '10px 25px',
        marginBottom: theme.spacing(2)
    },
    p: {
        margin: theme.spacing(0)
    }
}))

const Category = ({ text }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <p className={classes.p}>{text}</p>
        </Box>
    )
}

export default Category