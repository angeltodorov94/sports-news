import React, { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Box from '@material-ui/core/Box'
import PageLayout from '../PageLayout'
import Typography from '../../components/typography/Typography'
import Loading from '../../components/loading/Loading'
import CommentsButton from '../../components/commentsButton/CommentsButton'
import Top from './top/Top'
import Image from '../../components/imagesCloudinary/Image'
import Content from './content/ArticleContent'
import PostComment from './postComment/PostComment'
import CommentSection from './commentSection/CommentSection'
import { getArticle, changeToggle, cleanArticleState } from '../../store/actions/index'

const ArticlePage = (props) => {
    const { data, loading, error, toggle, update } = useSelector(state => state.article)
    const isAuth = useSelector(state => state.auth.id)
    const dispatch = useDispatch()
    const params = useParams()
    document.title = data !== null ? data.title : 'Sports News | Loading...'

    useEffect(() => {
        return function cleanup() {
            dispatch(cleanArticleState())
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(getArticle(params.id))
    }, [dispatch, params.id, update])

    const renderArticle = (article) => {
        return (
            <Fragment>
                <Top text={article.category} />
                <Typography type='h2' text={article.title} />
                <Box mb={2}>
                    <Image imageUrl={article.imageUrl} />
                </Box>
                <Content content={article.content} createdAt={article.createdAt} author={article.author} clicks={article.clicks} />
                {isAuth ? <CommentsButton toggle={toggle} onClick={() => dispatch(changeToggle())} /> : null}
                {toggle ?
                    <Fragment>
                        <PostComment />
                        <CommentSection comments={article.comments} />
                    </Fragment> : null}
            </Fragment>
        )
    }

    return (
        <PageLayout>
            {(loading || error) ? <Loading /> : renderArticle(data)}
        </PageLayout>
    )
}

export default ArticlePage