import React, { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PageLayout from '../PageLayout'
import Typography from '../../components/titles/Typography'
import Loading from '../../components/loading/Loading'
import CommentsButton from '../../components/commentsButton/CommentsButton'
import Top from './top/Top'
import Image from '../../components/imagesCloudinary/Image'
import Content from './content/ArticleContent'
import PostComment from './postComment/PostComment'
import CommentSection from './commentSection/CommentSection'
import { getArticle, changeToggle, cleanArticleState } from '../../store/actions/index'

const ArticlePage = (props) => {
    const params = useParams()
    const data = useSelector(state => state.article.data)
    const isAuth = useSelector(state => state.auth.token !== null)
    const toggle = useSelector(state => state.article.toggle)
    const update = useSelector(state => state.article.update)
    const dispatch = useDispatch()

    useEffect(() => {
        return function cleanup() {
            dispatch(cleanArticleState())
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(getArticle(params.id))
    }, [update, dispatch, params.id])

    return (
        <PageLayout>
            {data === null ? <Loading /> :
                <Fragment>
                    <Top text={data.category} />
                    <Typography type='h2' text={data.title} />
                    <Image imageUrl={data.imageUrl} />
                    <Content data={data} />
                    {isAuth ? <CommentsButton toggle={toggle} onClick={() => dispatch(changeToggle())} /> : null}
                    {toggle ?
                        <Fragment>
                            <PostComment />
                            <CommentSection comments={data.comments} />
                        </Fragment> : null}
                </Fragment>}
        </PageLayout>
    )
}

export default ArticlePage