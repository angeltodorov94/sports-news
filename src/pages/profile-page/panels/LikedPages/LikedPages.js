import React, { Fragment } from 'react'
import Typography from '../../../../components/titles/Typography'
import HorizontalCard from '../../../../components/card/HorizontalCard'

const LikedPages = ({ data }) => {
    return (
        <Fragment>
            <Typography type='h2' position='center' text='Liked Pages' />
            {data.savedArticles.length === 0 ? <p>No saved articles yet!</p> : null}
            {data.savedArticles.map(x => <HorizontalCard key={x._id} imageUrl={x.imageUrl} title={x.title} />)}
        </Fragment>
    )
}

export default LikedPages