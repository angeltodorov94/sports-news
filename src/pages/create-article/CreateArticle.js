import React, { Component } from 'react'
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
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class CreateArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: {
                value: '',
                error: null
            },
            content: {
                value: '',
                error: null
            },
            image: {
                value: '',
                error: null
            },
            author: {
                value: '',
                error: null
            },
            category: {
                value: '',
                error: null
            }
        }
    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: { value: e.target.value } })
    }

    onSelectChangeHandler = (e) => {
        this.setState({ category: validation("category", e.target.value) })
    }

    onImageUpload = async (e) => {
        const publicId = await imageUpload(e.target.files)
        this.setState({ image: { ...this.state.image, value: publicId } })
    }

    onBlurHandler = (e) => {
        this.setState({ [e.target.name]: validation(e.target.name, e.target.value) })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const result = checkValidity({ ...this.state })
        if (!result) return

        const {
            title,
            content,
            image,
            author,
            category
        } = this.state
        this.props.createArticle({ title: title.value, content: content.value, imageUrl: image.value, author: author.value, category: category.value })
        this.props.history.push('/')
    }

    render() {
        const {
            title,
            content,
            image,
            author,
            category
        } = this.state

        return (
            <PageLayout>
                <Typography type='h2' text="Create Article" position="center" />
                <Container maxWidth='sm'>
                    <form onSubmit={this.onSubmitHandler}>
                        <Input type='text' text='Title' name='title' value={title.value} error={title.error} onChange={(e) => this.onChangeHandler(e)} onBlur={(e) => this.onBlurHandler(e)} />
                        <TextArea text="Content" name='content' value={content.value} error={content.error} onChange={(e) => this.onChangeHandler(e)} onBlur={(e) => this.onBlurHandler(e)} />
                        <ImageInput name='image' value={image.value} onChange={(e) => this.onImageUpload(e)} />
                        <Input type='text' text='Author' name='author' value={author.value} error={author.error} onChange={(e) => this.onChangeHandler(e)} onBlur={(e) => this.onBlurHandler(e)} />
                        <Select text='Category' name="category" value={category.value} error={category.error} onChange={(e) => this.onSelectChangeHandler(e)} onBlur={(e) => this.onBlurHandler(e)} />
                        <Button type='submit' text='Create Article' />
                    </form>
                </Container>
            </PageLayout >
        )
    }
}

const mapStateToProps = state => {
    return {
        // isAuth: state.auth.token !== null,
        // error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createArticle: (data) => dispatch(actions.createArticle(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle)