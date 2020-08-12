import React, { Fragment, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Typography from '../../../components/titles/Typography'
import Loading from '../../../components/loading/Loading'
import { useDispatch, useSelector } from "react-redux"
import { getRecentNews } from '../../../store/actions/index'
import HorizontalCard from '../../../components/card/HorizontalCard'

const RecentNews = (props) => {
    const data = useSelector(state => state.articles.articles.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecentNews())
    }, [dispatch])

    const renderCards = (articles) => {
        return articles.map(x => <HorizontalCard key={x._id} id={x._id} imageUrl={x.imageUrl} title={x.title} />)
    }

    return (
        <Fragment>
            <Typography type='h2' text="Recent News" />
            <div>
                {data.length === 0 ? <Loading /> : renderCards(data)}
            </div>
            <Typography type='body' position='right' text={<Link to="/browse" component={RouterLink} align='right'>See more</Link>} />
        </Fragment>
    )
}

export default RecentNews