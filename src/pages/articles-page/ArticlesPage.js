import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
import PageLayout from '../PageLayout'
import Loading from '../../components/loading/Loading'
import Info from '../../components/messages/Info'
import Typography from '../../components/titles/Typography'
import { getRecentNews } from '../../store/actions/index'
import HorizontalCard from '../../components/card/HorizontalCard'
import { categoriesObj } from '../../utils/navigations'

const BrowsePage = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const search = history.location.search
    const data = useSelector(state => state.articles.articles.data)
    const count = useSelector(state => state.articles.articles.count)
    const loading = useSelector(state => state.articles.articles.loading)
    const [title, setTitle] = useState('Recent Articles')

    useEffect(() => {
        if (search.length > 0 && search.includes('category')) {
            const category = search.match(/category=[a-zA-Z0-9- ]+/)[0].split('=')[1]
            setTitle(categoriesObj[category].name)
        }
        else setTitle('Recent Articles')

        dispatch(getRecentNews(search))
    }, [dispatch, search])

    const renderCards = (articles) => {
        if (articles.length === 0)
            return <Info text='There is no articles yet!' />

        return articles.map(x => <HorizontalCard key={x._id} id={x._id} imageUrl={x.imageUrl} title={x.title} />)
    }

    const onChange = (e, page) => {
        let url = history.location.pathname
        if (!search.includes('page')) url += `${(search ? (search + '&') : '?')}page=${page}`
        else url += search.replace(/page=[0-9]+/, 'page=' + page)
        history.push(url)
    }

    return (
        <PageLayout>
            <Typography type='h2' text={title} />
            {loading ? <Loading /> : renderCards(data)}
            {count > 0 ? <Pagination count={Math.ceil(count / 10)} shape='rounded' onChange={onChange} /> : null}
        </PageLayout>
    )
}

export default BrowsePage