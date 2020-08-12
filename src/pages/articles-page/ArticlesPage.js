import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageLayout from '../PageLayout'
import { getRecentNews } from '../../store/actions/index'
import HorizontalCard from '../../components/card/HorizontalCard'

const ArticlesPage = (props) => {
    const dispatch = useDispatch()
    const search = props.location.search
    const data = useSelector(state => state.articles.articles.data)

    useEffect(() => {
        dispatch(getRecentNews(search))
    }, [dispatch, search])

    const renderCards = (articles) => {
        return articles.map(x => <HorizontalCard key={x._id} id={x._id} imageUrl={x.imageUrl} title={x.title} />)
    }

    return (
        <PageLayout>
            {renderCards(data)}
        </PageLayout>
    )
}

export default ArticlesPage