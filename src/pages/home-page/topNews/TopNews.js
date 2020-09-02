import React, { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '../../../components/typography/Typography'
import Loading from '../../../components/loading/Loading'
import { getTopNews } from '../../../store/actions/index'
import Card from '../../../components/card/Card'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1)
    }
}))

const TopNews = (props) => {
    const classes = useStyles()
    const { data, loading, error } = useSelector(state => state.articles.top4articles)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopNews())
    }, [dispatch])

    const renderCards = (articles) => {
        return articles.map(x => <Card key={x._id} id={x._id} imageUrl={x.imageUrl} title={x.title} />)
    }

    return (
        <Box>
            <Typography type='h2' text="Top News" />
            <Grid container spacing={3} className={classes.root}>
                {(loading || error) ? <Loading /> : renderCards(data)}
            </Grid>
            <Typography type='body' position='right'>
                <Link to="/articles" component={RouterLink} align='right' style={{ color: '#272121' }}>See more</Link>
            </Typography>
        </Box>
    )
}

export default TopNews