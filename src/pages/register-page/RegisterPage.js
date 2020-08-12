import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PageLayout from '../PageLayout'
import Typography from '../../components/titles/Typography'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import ErrorMessage from '../../components/errorMessages/Error'
import Container from '@material-ui/core/Container'
import { validation } from '../../utils/form-validations'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: {
                value: '',
                error: null
            },
            password: {
                value: '',
                error: null
            },
            rePassword: {
                value: '',
                error: null
            }
        }
    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: { value: e.target.value } })
    }

    onBlurHandler = (e) => {
        if (e.target.name === 'rePassword' && e.target.value !== this.state.password.value)
            this.setState({ rePassword: { ...this.state.rePassword, error: "The passwords doesn't match!" } })
        else
            this.setState({ [e.target.name]: validation(e.target.name, e.target.value) })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const {
            email,
            password,
            rePassword
        } = this.state

        if (email.error !== null || password.error !== null || rePassword.error !== null)
            return

        this.props.authenticationInit(email.value, password.value, 'register')
    }

    render() {
        if (this.props.isAuth)
            return <Redirect to='/' />

        const {
            email,
            password,
            rePassword
        } = this.state

        return (
            <PageLayout>
                {this.props.error ? <ErrorMessage error={this.props.error} /> : null}
                <Typography type='h2' text="Register" position="center" />
                <Container maxWidth='sm'>
                    <form onSubmit={this.onSubmitHandler}>
                        <Input type='email' text='Email' name='email' error={email.error} value={email.value} onChange={(e) => this.onChangeHandler(e)} onBlur={(e) => this.onBlurHandler(e)} />
                        <Input type='password' text='Password' name='password' error={password.error} value={password.value} onChange={(e) => this.onChangeHandler(e)} onBlur={(e) => this.onBlurHandler(e)} />
                        <Input type='password' text='Repeat Password' name='rePassword' error={rePassword.error} value={rePassword.value} onChange={(e) => this.onChangeHandler(e)} onBlur={(e) => this.onBlurHandler(e)} />
                        <Button type='submit' text='Register' />
                    </form>
                </Container>
            </PageLayout >
        )
    }

}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticationInit: (email, password, type) => dispatch(actions.authenticationInit(email, password, type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)