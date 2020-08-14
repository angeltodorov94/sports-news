import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageLayout from '../PageLayout'
import Loading from '../../components/loading/Loading'
import Info from '../../components/messages/Info'
import Typography from '../../components/titles/Typography'
import { getRecentNews } from '../../store/actions/index'
import HorizontalCard from '../../components/card/HorizontalCard'

const BrowsePage = (props) => {
    const dispatch = useDispatch()
    const search = props.location.search
    const data = useSelector(state => state.articles.articles.data)
    const loading = useSelector(state => state.articles.articles.loading)

    useEffect(() => {
        dispatch(getRecentNews(search))
    }, [dispatch, search])

    const renderCards = (articles) => {
        if (articles.length === 0)
            return <Info text='There is no articles yet!' />

        return articles.map(x => <HorizontalCard key={x._id} id={x._id} imageUrl={x.imageUrl} title={x.title} />)
    }

    return (
        <PageLayout>
            <Typography type='h2' text={search === '' ? 'Recent Articles' : search.split('=')[1].replace('-', ' ').toUpperCase()} />
            {loading ? <Loading /> : renderCards(data)}
        </PageLayout>
    )
}

export default BrowsePage