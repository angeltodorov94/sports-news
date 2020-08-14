import React, { Fragment } from 'react'
import Typography from '../../../../components/titles/Typography'
import HorizontalCard from '../../../../components/card/HorizontalCard'
import Info from '../../../../components/messages/Info'

const LikedPages = ({ data }) => {
    return (
        <Fragment>
            <Typography type='h4' position='center' text='Liked Pages' />
            {data.savedArticles.length === 0 ? <Info text='There is no liked articles yet!' /> : null}
            {data.savedArticles.map(x => <HorizontalCard key={x._id} imageUrl={x.imageUrl} title={x.title} />)}
        </Fragment>
    )
}

export default LikedPages