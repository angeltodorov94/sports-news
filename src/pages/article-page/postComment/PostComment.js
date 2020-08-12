import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import TextArea from '../../../components/textarea/TextArea'
import Button from '../../../components/button/Button'
import { validation } from '../../../utils/form-validations'
import { postComment } from '../../../store/actions/index'

const PostComment = (props) => {
    const [inputValue, setInputValue] = useState({ value: '', error: null })

    const articleId = useParams().id
    const userId = useSelector(state => state.auth.id)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        if (inputValue.value === '') return
        dispatch(postComment(inputValue.value, articleId, userId))
        setInputValue({ value: '', error: null })
    }

    return (
        <Container>
            <TextArea value={inputValue.value} error={inputValue.error}
                onChange={e => setInputValue({ ...inputValue, value: e.target.value })}
                onBlur={() => setInputValue(validation('comment', inputValue.value))}
            />
            <Button text="Post Comment" onClick={onClickHandler} />
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    margin: 0 auto 25px;
`

export default PostComment