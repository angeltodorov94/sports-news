import React, { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Link } from '@material-ui/core'
import Typography from '../../../components/typography/Typography'
import Loading from '../../../components/loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getRecentNews } from '../../../store/actions/index'
import HorizontalCard from '../../../components/card/HorizontalCard'

const RecentNews = (props) => {
    const { data, loading, error } = useSelector(state => state.articles.articles)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecentNews())
    }, [dispatch])

    const renderCards = (articles) => {
        return articles.map(x => <HorizontalCard key={x._id} id={x._id} imageUrl={x.imageUrl} title={x.title} />)
    }

    return (
        <Box>
            <Typography type='h2' text="Recent News" />
            <Box>
                {(loading || error) ? <Loading /> : renderCards(data)}
            </Box>
            <Typography type='body' position='right'>
                <Link to="/articles" component={RouterLink} align='right' style={{ color: '#272121' }}>See more</Link>
            </Typography>
        </Box>
    )
}

export default RecentNews