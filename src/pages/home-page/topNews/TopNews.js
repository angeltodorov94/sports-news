import React, { Fragment, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import Typography from '../../../components/titles/Typography'
import Loading from '../../../components/loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getTopNews } from '../../../store/actions/index'
import Card from '../../../components/card/Card'

const TopNews = (props) => {
    const data = useSelector(state => state.articles.top4articles.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopNews())
    }, [])

    const renderCards = (articles) => {
        return articles.map(x => <Card key={x._id} id={x._id} imageUrl={x.imageUrl} title={x.title} />)
    }

    return (
        <Fragment>
            <Typography type='h2' text="Top News" />
            <Grid container spacing={3}>
                {data.length === 0 ? <Loading /> : renderCards(data)}
            </Grid>
            <Typography type='body' position='right' text={<Link to="/browse" component={RouterLink} align='right'>See more</Link>} />
        </Fragment>
    )
}

export default TopNews