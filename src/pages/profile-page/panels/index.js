import React, { Fragment } from 'react'
import TabPanel from '../../../components/tab/TabPanel'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import LikedPages from './LikedPages/LikedPages'
import Security from './SecurityPanel/Security'
import UsersManagement from './UsersManagement/UsersManagement'
import ArticlesManagement from './ArticlesManagement/ArticlesManagement'
import Archives from './ArchiveArticles/Archives'

const TabPanels = ({ value, data }) => {
    return (
        <Fragment>
            <TabPanel value={value} index={0}>
                <ProfileInfo data={data} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <LikedPages data={data} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Security />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <UsersManagement />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <ArticlesManagement />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Archives />
            </TabPanel>
        </Fragment>
    )
}

export default TabPanels