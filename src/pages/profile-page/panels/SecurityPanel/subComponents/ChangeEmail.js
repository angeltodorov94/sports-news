import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Typography from '../../../../../components/titles/Typography'
import Input from '../../../../../components/input/Input'
import Button from '../../../../../components/button/Button'
import { validation } from '../../../../../utils/form-validations'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserInformation } from "../../../../../store/actions/index"

const ChangeEmail = (props) => {
    const [email, setEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState(null)

    const id = useSelector(state => state.auth.id)
    const dispatch = useDispatch()
    const history = useHistory()

    const onBlurHandler = (e) => {
        const errorResult = validation('email', e.target.value)
        setErrorEmail(errorResult.error)
    }

    const onClickHandler = () => {
        if (errorEmail !== null) return

        dispatch(updateUserInformation(id, { email }))
        // history.push('/profile')
    }

    return (
        <div>
            <Typography type='h4' text="Change Email" />
            <Input type="email" text="New Email" name="email" value={email} error={errorEmail}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => onBlurHandler(e)}
            />
            <Button type="submit" text="Change Email" onClick={onClickHandler} />
        </div>
    )
}

export default ChangeEmail