import React from 'react'
import Grid from '@material-ui/core/Grid'
import Logo from './logo/Logo'
import User from './user/User'
import { useSelector } from 'react-redux'

const Header = (props) => {
    const loading = useSelector(state => state.auth.loading)
    return (
        <Grid container justify='space-between'>
            <Logo />
            {!loading ? <User /> : null}
        </Grid>
    )
}

export default Header