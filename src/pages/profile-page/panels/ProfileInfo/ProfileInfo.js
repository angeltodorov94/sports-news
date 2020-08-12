import React, { Fragment } from 'react'
import Typography from '../../../../components/titles/Typography'
import Grid from '@material-ui/core/Grid'
import Loading from '../../../../components/loading/Loading'
import Card from '../../../../components/card/Card'

import ProfileImage from './ProfileImage/ProfileImage'

const ProfileInfo = ({ data }) => {
    const renderCards = (articles) => {
        return articles.map(x => {
            return <Card key={x._id} id={x._id} imageUrl={x.imageUrl} title={x.title} />
        })
    }

    if (data === null) {
        return <Loading />
    }

    return (
        <Fragment>
            <Typography type='h2' position='center' text='Profile Info' />
            <Grid container spacing={3}>
                <ProfileImage image={data.profilePicture} />
                <Grid item xs={6}>
                    <p>Email: {data.email}</p>
                    <p>Liked Articles: {data.savedArticles.length}</p>
                    <p>Posted Comments: {data.postedComments.length}</p>
                    {/* <p>Username: {data.username}</p> */}
                </Grid>
            </Grid>
            <Typography type='h4' text="Latest liked articles" />
            <Grid container spacing={3}>
                {data.savedArticles.length === 0 ? <p>There is no liked articles yet!</p> : renderCards(data.savedArticles)}
            </Grid>
        </Fragment>
    )
}

export default ProfileInfo