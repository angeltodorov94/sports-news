import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Typography from '../../../../components/titles/Typography'
import Loading from '../../../../components/loading/Loading'
import Table from '../../../../components/table/Table'
import { TableRow, TableCell, Link } from '@material-ui/core'
import { getRecentNews, deleteArticle } from '../../../../store/actions/index'

const cols = ['Title', 'Views', 'Comments', '']

const ArticlesManagement = (props) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.articles.articles.data)
    const loading = useSelector(state => state.articles.articles.loading)
    const [change, setChange] = useState(false)

    useEffect(() => {
        dispatch(getRecentNews('?limit=10000'))
    }, [dispatch, change])

    const deleteHandler = id => {
        dispatch(deleteArticle(id))
        setChange(!change)
    }

    const renderTable = () => {
        return (
            <Table cols={cols}>
                {data.map((article) => (
                    <TableRow key={article._id}>
                        <TableCell>{article.title}</TableCell>
                        <TableCell align="center">{article.clicks}</TableCell>
                        <TableCell align="center">{article.comments.length}</TableCell>
                        <TableCell align="center">
                            <Link component="button" variant="body2" color="secondary"
                                onClick={() => deleteHandler(article._id)}>Delete</Link>
                        </TableCell>
                    </TableRow>
                ))}
            </Table>
        )
    }

    return (
        <Fragment>
            <Typography type='h4' position='center' text='Articles Management' />
            {(data === null || loading) ? <Loading /> : renderTable()}
        </Fragment>
    )
}

export default ArticlesManagement