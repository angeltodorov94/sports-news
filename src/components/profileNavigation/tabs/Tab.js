import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: '0',
        width: '100%',
        // color: '#272121',
        backgroundColor: 'transparent',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),

        '&:hover': {
            backgroundColor: '#272121'
        }
    }
}))

const Tab = ({ text, to }) => {
    const classes = useStyles()

    return (
        <Grid item xs={true}>
            <Button
                variant="contained"
                className={classes.button}
                component={RouterLink}
                to={to}
                disableElevation
                size='large'
            >
                {text}
            </Button>
        </Grid>
    )
}

export default Tab