import React, { Fragment } from 'react'
import Typography from '../../../../components/titles/Typography'
import HorizontalCard from '../../../../components/card/HorizontalCard'

const LikedPages = ({ data }) => {
    return (
        <Fragment>
            <Typography type='h2' position='center' text='Liked Pages' />
            {data.savedArticles.map(x => <HorizontalCard key={x._id} imageUrl={x.imageUrl} title={x.title} />)}
        </Fragment>
    )
}

export default LikedPages