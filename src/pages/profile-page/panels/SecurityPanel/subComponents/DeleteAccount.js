import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Typography from '../../../../../components/titles/Typography'
import Input from '../../../../../components/input/Input'
import Button from '../../../../../components/buttons/Button'
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, logout } from "../../../../../store/actions/index"

const DeleteAccount = (props) => {
    const [deleteInput, setDeleteInput] = useState('')
    const [deleteError, setDeleteError] = useState(null)

    const id = useSelector(state => state.auth.id)
    const dispatch = useDispatch()
    const history = useHistory()

    const onButtonClickHandler = () => {
        if (deleteInput !== 'delete') {
            setDeleteError('Wrong input!')
            return
        }
        dispatch(deleteUser(id))
        dispatch(logout())
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