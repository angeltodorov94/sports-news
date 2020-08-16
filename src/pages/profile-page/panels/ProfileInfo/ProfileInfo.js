import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '../../../../components/titles/Typography'
import Loading from '../../../../components/loading/Loading'
import Info from '../../../../components/messages/Info'
import Card from '../../../../components/card/Card'
import ProfileImage from './ProfileImage/ProfileImage'

const ProfileInfo = ({ data }) => {
    const renderCards = (articles) => {
        const array = articles.reverse().slice(0, 4)
        return array.map(x => {
            return <Card key={x._id} id={x._id} imageUrl={x.imageUrl} title={x.title} />
        })
    }

    if (data === null) {
        return <Loading />
    }

    return (
        <Fragment>
            <Typography type='h4' position='center' text='Profile Info' />
            <Grid container spacing={3}>
                <ProfileImage image={data.profilePicture} />
                <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <p>Email: {data.email}</p>
                    <p>Liked Articles: {data.savedArticles.length}</p>
                    <p>Posted Comments: {data.postedComments.length}</p>
                </Grid>
            </Grid>
            <Typography type='h4' text="Latest liked articles" position='center' />
            {data.savedArticles.length === 0 ? <Info text='There is no liked articles yet!' /> : null}
            <Grid container spacing={3}>
                {data.savedArticles.length > 0 ? renderCards(data.savedArticles) : null}
            </Grid>
        </Fragment>
    )
}

export default ProfileInfo