import React from 'react'
import PageLayout from '../PageLayout'
import TopNews from './topNews/TopNews'
import RecentNews from './recentNews/RecentNews'

const HomePage = (props) => {
    document.title = 'Sports News | Welcome'

    return (
        <PageLayout>
            <TopNews />
            <RecentNews />
        </PageLayout>
    )
}

export default HomePage