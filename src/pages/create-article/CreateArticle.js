import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PageLayout from '../PageLayout'
import Typography from '../../components/titles/Typography'
import Input from '../../components/input/Input'
import ImageInput from '../../components/input/ImageInput'
import TextArea from '../../components/textarea/TextArea'
import Select from '../../components/select/Select'
import Button from '../../components/buttons/Button'
import Container from '@material-ui/core/Container'
import { validation, checkValidity } from '../../utils/form-validations'
import imageUpload from '../../utils/imageUpload'
import { createArticle } from '../../store/actions/index'

const CreateArticle = (props) => {
    const [title, setTitle] = useState({ value: '', error: null })
    const [content, setContent] = useState({ value: '', error: null })
    const [imageUrl, setImageUrl] = useState({ value: '', error: null })
    const [author, setAuthor] = useState({ value: '', error: null })
    const [category, setCategory] = useState({ value: '', error: null })
    const dispatch = useDispatch()
    const history = useHistory()

    const onImageUpload = async (e) => {
        const publicId = await imageUpload(e.target.files)
        await setImageUrl({ ...imageUrl, value: publicId })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const result = checkValidity({ title, content, imageUrl, author, category })
        if (!result) return

        dispatch(createArticle({
            title: title.value,
            content: content.value,
            imageUrl: imageUrl.value,
            author: author.value,
            category: category.value
        }))
        history.push('/')
    }

    return (
        <PageLayout>
            <Typography type='h2' text="Create Article" position="center" />
            <Container maxWidth='sm'>
                <form onSubmit={onSubmitHandler}>
                    <Input type='text' text='Title' name='title' value={title.value} error={title.error}
                        onChange={(e) => setTitle({ ...title, value: e.target.value })}
                        onBlur={(e) => validation('title', title.value)} />
                    <TextArea text="Content" name='content' value={content.value} error={content.error}
                        onChange={(e) => setContent({ ...content, value: e.target.value })}
                        onBlur={(e) => validation('content', content.value)} />
                    <ImageInput name='image' value={imageUrl.value}
                        onChange={(e) => onImageUpload(e)} />
                    <Input type='text' text='Author' name='author' value={author.value} error={author.error}
                        onChange={(e) => setAuthor({ ...author, value: e.target.value })}
                        onBlur={(e) => validation('author', author.value)} />
                    <Select text='Category' name="category" value={category.value} error={category.error}
                        onChange={(e) => setCategory({ ...category, value: e.target.value })}
                        onBlur={(e) => validation('category', category.value)} />
                    <Button type='submit' text='Create Article' />
                </form>
            </Container>
        </PageLayout >
    )
}

export default CreateArticle