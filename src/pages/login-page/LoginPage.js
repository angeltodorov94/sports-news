import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PageLayout from '../PageLayout'
import Typography from '../../components/typography/Typography'
import Input from '../../components/input/Input'
import Button from '../../components/buttons/Button'
import ErrorMessage from '../../components/messages/Error'
import Container from '@material-ui/core/Container'
import { validation } from '../../utils/form-validations'
import { authenticationInit } from '../../store/actions/index'

const LoginPage = (props) => {
    const [email, setEmail] = useState({ value: '', error: null })
    const [password, setPassword] = useState({ value: '', error: null })

    const error = useSelector(state => state.auth.error)
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (email.error !== null || password.error !== null)
            return

        dispatch(authenticationInit(email.value, password.value, 'login'))
    }

    return (
        <PageLayout>
            {error ? <ErrorMessage error={error} /> : null}
            <Typography type='h2' text="Login" position="center" />
            <Container maxWidth='sm'>
                <form onSubmit={onSubmitHandler}>
                    <Input type='email' text='Email' error={email.error} name='email' value={email.value}
                        onChange={(e) => setEmail({ ...email, value: e.target.value })}
                        onBlur={(e) => setEmail(validation('email', email.value))}
                    />
                    <Input type='password' text='Password' error={password.error} name='password' value={password.value}
                        onChange={(e) => setPassword({ ...password, value: e.target.value })}
                        onBlur={(e) => setPassword(validation('password', password.value))}
                    />
                    <Button type='submit' text='Login' />
                </form>
            </Container>
        </PageLayout >
    )
}

export default LoginPage