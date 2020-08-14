import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Loading from '../../../../components/loading/Loading'
import Typography from '../../../../components/titles/Typography'
import { getAllUsersInformation, deleteUser, updateUserInformation } from '../../../../store/actions/index'

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
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Email</TableCell>
                            <TableCell align="center">isAdmin</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
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
                    </TableBody>
                </Table>
            </TableContainer>
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