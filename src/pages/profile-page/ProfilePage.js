import React, { useState, useEffect } from 'react'
import PageLayout from '../PageLayout'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInformation } from '../../store/actions/index'
import TabPanels from './panels/index'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        color: theme.palette.primary.dark,
        boxShadow: 'none'
    }
}))

const ProfilePage = (props) => {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const id = useSelector(state => state.auth.id)
    const isAdmin = useSelector(state => state.auth.isAdmin)
    const userDetails = useSelector(state => state.user.userDetails)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserInformation(id))
    }, [dispatch, id])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <PageLayout>
            <AppBar position="static" className={classes.root}>
                <Tabs value={value} onChange={handleChange} variant='fullWidth' indicatorColor='primary'>
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