import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../../../../components/table/Table'
import { TableRow, TableCell, Link } from '@material-ui/core'
import Loading from '../../../../components/loading/Loading'
import Typography from '../../../../components/titles/Typography'
import { getAllUsersInformation, deleteUser, updateUserInformation } from '../../../../store/actions/index'

const cols = ['Email', 'isAdmin', '', '']

const UsersManagement = (props) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.user.allUsers)
    const loading = useSelector(state => state.user.loading)
    const [change, setChange] = useState(false)

    useEffect(() => {
        dispatch(getAllUsersInformation())
    }, [dispatch, change])

    const deleteHandler = id => {
        dispatch(deleteUser(id))
        setChange(!change)
    }

    const changeAdminStatus = (id, isAdmin) => {
        const obj = isAdmin ? { isAdmin: false } : { isAdmin: true }
        dispatch(updateUserInformation(id, obj))
        setChange(!change)
    }

    const renderTable = () => {
        return (
            <Table cols={cols}>
                {data.map((user) => (
                    <TableRow key={user._id}>
                        <TableCell>
                            {user.email}
                        </TableCell>
                        <TableCell align="center">{user.isAdmin ? 'yes' : 'no'}</TableCell>
                        <TableCell align="center">
                            <Link component="button" variant="body2"
                                onClick={() => changeAdminStatus(user._id, user.isAdmin)}>{user.isAdmin ? "Demote" : "Promote"}</Link>
                        </TableCell>
                        <TableCell align="center">
                            <Link component="button" variant="body2" color="secondary"
                                onClick={() => deleteHandler(user._id)}>Delete</Link>
                        </TableCell>
                    </TableRow>
                ))}
            </Table>
        )
    }

    return (
        <Fragment>
            <Typography type='h4' position='center' text='User Management' />
            {(data === null || loading) ? <Loading /> : renderTable()}
        </Fragment>
    )
}

export default UsersManagement