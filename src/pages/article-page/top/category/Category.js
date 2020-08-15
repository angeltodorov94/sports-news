import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { categoriesObj } from '../../../../utils/navigations'

const useStyles = makeStyles((theme) => ({
    root: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        backgroundColor: '#e16428',
        padding: '10px 25px',
        marginBottom: theme.spacing(2)
    },
    p: {
        color: 'white',
        margin: theme.spacing(0)
    }
}))

const Category = ({ text }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <p className={classes.p}>{categoriesObj[text].name}</p>
        </Box>
    )
}

export default Category