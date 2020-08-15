import React from 'react'
import Grid from '@material-ui/core/Grid'
import Logo from './logo/Logo'
import User from './user/User'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#272121'
    }
}))

const Header = (props) => {
    const classes = useStyles()
    const loading = useSelector(state => state.auth.loading)

    return (
        <Grid container justify='space-between' className={classes.root}>
            <Logo />
            {!loading ? <User /> : null}
        </Grid>
    )
}

export default Header