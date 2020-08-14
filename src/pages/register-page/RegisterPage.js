import React, { useState } from 'react'
import PageLayout from '../PageLayout'
import Typography from '../../components/titles/Typography'
import Input from '../../components/input/Input'
import Button from '../../components/buttons/Button'
import ErrorMessage from '../../components/messages/Error'
import Container from '@material-ui/core/Container'
import { validation } from '../../utils/form-validations'
import { useSelector, useDispatch } from 'react-redux'
import { authenticationInit } from '../../store/actions/index'

const RegisterPage = (props) => {
    const [email, setEmail] = useState({ value: '', error: null })
    const [password, setPassword] = useState({ value: '', error: null })
    const [rePassword, setRePassword] = useState({ value: '', error: null })

    const error = useSelector(state => state.auth.error)
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault()

        if (password.value !== rePassword.value)
            setRePassword({ ...rePassword, error: `Passwords doesn't match!` })
        if (email.error !== null || password.error !== null || rePassword.error !== null)
            return

        dispatch(authenticationInit(email.value, password.value, 'register'))
    }

    return (
        <PageLayout>
            {error ? <ErrorMessage error={error} /> : null}
            <Typography type='h2' text="Register" position="center" />
            <Container maxWidth='sm'>
                <form onSubmit={onSubmitHandler}>
                    <Input type='email' text='Email' name='email' error={email.error} value={email.value}
                        onChange={(e) => setEmail({ ...email, value: e.target.value })}
                        onBlur={(e) => setEmail(validation('email', email.value))} />
                    <Input type='password' text='Password' name='password' error={password.error} value={password.value}
                        onChange={(e) => setPassword({ ...password, value: e.target.value })}
                        onBlur={(e) => setPassword(validation('password', password.value))} />
                    <Input type='password' text='Repeat Password' name='rePassword' error={rePassword.error} value={rePassword.value}
                        onChange={(e) => setRePassword({ ...rePassword, value: e.target.value })}
                        onBlur={(e) => setRePassword(validation('rePassword', rePassword.value))} />
                    <Button type='submit' text='Register' />
                </form>
            </Container>
        </PageLayout >
    )
}

export default RegisterPage