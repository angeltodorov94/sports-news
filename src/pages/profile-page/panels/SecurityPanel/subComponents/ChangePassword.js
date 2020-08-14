import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Typography from '../../../../../components/titles/Typography'
import Input from '../../../../../components/input/Input'
import Button from '../../../../../components/buttons/Button'
import { validation } from '../../../../../utils/form-validations'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserInformation } from "../../../../../store/actions/index"

const ChangePassword = (props) => {
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState(null)
    const [rePassword, setRePassword] = useState('')
    const [errorRePassword, setErrorRePassword] = useState(null)

    const id = useSelector(state => state.auth.id)
    const dispatch = useDispatch()

    const onBlurHandler = (e) => {
        const errorResult = validation(e.target.name, e.target.value)
        if (e.target.name === 'password')
            setErrorPassword(errorResult.error)
        if (e.target.name === 'rePassword')
            setErrorRePassword(errorResult.error)
    }

    const onClickHandler = () => {
        if (errorPassword !== null || errorRePassword !== null) return
        if (password !== rePassword) {
            setErrorRePassword("Passwords doesn't match!")
            return
        }
        dispatch(updateUserInformation(id, { password }))
    }

    return (
        <Box>
            <Typography type='h6' text="Change Password" />
            <Input type="password" text="New Password" name="password" value={password} error={errorPassword}
                onChange={e => setPassword(e.target.value)}
                onBlur={e => onBlurHandler(e)}
            />
            <Input type="password" text="Repeat Password" name="rePassword" value={rePassword} error={errorRePassword}
                onChange={e => setRePassword(e.target.value)}
                onBlur={e => onBlurHandler(e)}
            />
            <Button type="submit" text="Change Password" onClick={onClickHandler} />
        </Box>
    )
}

export default ChangePassword