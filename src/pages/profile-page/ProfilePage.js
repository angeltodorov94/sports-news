import React, { useState, useEffect } from 'react'
import PageLayout from '../PageLayout'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInformation } from '../../store/actions/index'
import TabPanels from './panels/index'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        color: '#272121',
        boxShadow: 'none',
    },
    indicator: {
        backgroundColor: '#e16428'

    }
}))

const ProfilePage = (props) => {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const isAdmin = useSelector(state => state.auth.isAdmin)
    const userDetails = useSelector(state => state.user.userDetails)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserInformation())
    }, [dispatch])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <PageLayout>
            <AppBar position="static" className={classes.root}>
                <Tabs value={value} classes={{ indicator: classes.indicator }} onChange={handleChange} variant='fullWidth' indicatorColor='primary'>
                    <Tab label="Profile Info" />
                    <Tab label="Liked Pages" />
                    <Tab label="Security" />
                    {isAdmin ? <Tab label="Users" /> : null}
                    {isAdmin ? <Tab label="Articles" /> : null}
                </Tabs>
            </AppBar>
            <TabPanels value={value} data={userDetails} />
        </PageLayout>
    )
}

export default ProfilePage