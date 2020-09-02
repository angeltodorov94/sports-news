import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
import PageLayout from '../PageLayout'
import Loading from '../../components/loading/Loading'
import Info from '../../components/messages/Info'
import Typography from '../../components/typography/Typography'
import { getRecentNews } from '../../store/actions/index'
import HorizontalCard from '../../components/card/HorizontalCard'
import { categoriesObj } from '../../utils/navigations'

const BrowsePage = (props) => {
    const { data, count, loading, error } = useSelector(state => state.articles.articles)
    const [title, setTitle] = useState('Recent Articles')
    const dispatch = useDispatch()
    const history = useHistory()
    const pathname = useLocation().pathname
    const search = useLocation().search
    const query = new URLSearchParams(search)
    const category = query.get('category')
    document.title = `Sports News | ${title}`

    useEffect(() => {
        dispatch(getRecentNews(search))
    }, [dispatch, search])

    useEffect(() => {
        if (category)
            setTitle(categoriesObj[category].name)
        else setTitle('Recent Articles')
    }, [category])

    const renderCards = (articles) => {
        if (articles.length === 0)
            return <Info text='There is no articles yet!' />

        return articles.map(x => <HorizontalCard key={x._id} id={x._id} imageUrl={x.imageUrl} title={x.title} />)
    }

    const onChange = (e, page) => {
        query.set('page', page)
        history.push(`${pathname}?${query.toString()}`)
    }

    return (
        <PageLayout>
            <Typography type='h2' text={title} />
            {(loading || error) ? <Loading /> : renderCards(data)}
            {count > 0 ? <Pagination count={Math.ceil(count / 10)} shape='rounded' onChange={onChange} /> : null}
        </PageLayout>
    )
}

export default BrowsePage