import React, { useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import Typography from '../../../components/titles/Typography'
import Loading from '../../../components/loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getTopNews } from '../../../store/actions/index'
import Card from '../../../components/card/Card'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1)
    }
}))

const TopNews = (props) => {
    const classes = useStyles()
    const data = useSelector(state => state.articles.top4articles.data)
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
                {data.length === 0 ? <Loading /> : renderCards(data)}
            </Grid>
            <Typography type='body' position='right' text={
                <Link to="/articles" component={RouterLink} align='right' style={{ color: '#272121' }}>See more</Link>
            } />
        </Box>
    )
}

export default TopNews