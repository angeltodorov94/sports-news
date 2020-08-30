import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Typography from '../../../../../components/typography/Typography'
import Input from '../../../../../components/input/Input'
import Button from '../../../../../components/buttons/Button'
import { useDispatch } from 'react-redux'
import { deleteUser } from "../../../../../store/actions/index"

const DeleteAccount = (props) => {
    const [deleteInput, setDeleteInput] = useState('')
    const [deleteError, setDeleteError] = useState(null)

    const dispatch = useDispatch()
    const history = useHistory()

    const onButtonClickHandler = async () => {
        if (deleteInput !== 'delete') {
            setDeleteError('Wrong input!')
            return
        }
        dispatch(deleteUser())
        history.push('/')
    }

    return (
        <div>
            <Typography type='h6' text="Delete Account" />
            <Typography type='body'>Type <b><i>delete</i></b> to delete your account!</Typography>
            <Input type="text" name="delete" value={deleteInput} error={deleteError} onChange={e => setDeleteInput(e.target.value)} />
            <Button type="button" text='Delete' onClick={onButtonClickHandler} />
        </div>
    )
}

export default DeleteAccount