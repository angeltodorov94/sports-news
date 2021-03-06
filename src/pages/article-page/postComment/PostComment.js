import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import TextArea from '../../../components/textarea/TextArea'
import Button from '../../../components/buttons/Button'
import { validation } from '../../../utils/form-validations'
import { postComment } from '../../../store/actions/index'

const PostComment = (props) => {
    const [inputValue, setInputValue] = useState({ value: '', error: null })

    const articleId = useParams().id
    const dispatch = useDispatch()

    const onClickHandler = () => {
        if (inputValue.value === '') return
        dispatch(postComment(inputValue.value, articleId))
        setInputValue({ value: '', error: null })
    }

    return (
        <Container maxWidth='xs'>
            <TextArea value={inputValue.value} error={inputValue.error}
                onChange={e => setInputValue({ ...inputValue, value: e.target.value })}
                onBlur={() => setInputValue(validation('comment', inputValue.value))}
            />
            <Button text="Post Comment" onClick={onClickHandler} />
        </Container>
    )
}

export default PostComment