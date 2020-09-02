import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import Tab from './tabs/Tab'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        // width: 100,
    }
}))

const ProfileNavigation = (props) => {
    const isAuth = useSelector(state => state.auth.id)
    const classes = useStyles()
    const { path } = useRouteMatch()

    return (
        <Grid container spacing={0} className={classes.root}>
            <Tab text="Profile Info" />
            <Tab text="Liked Articles" to={`${path}/favorites`} />
            <Tab text="Security" to={`${path}/security`} />
            {isAuth ? <Tab text="Articles" to={`${path}/articles`} /> : null}
            {isAuth ? <Tab text="Users" to={`${path}/users`} /> : null}
        </Grid>
    )
}

export default ProfileNavigation