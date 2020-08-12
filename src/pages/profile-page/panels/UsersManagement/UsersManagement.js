import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import Loading from '../../../../components/loading/Loading'
import Typography from '../../../../components/titles/Typography'
import { getAllUsersInformation } from '../../../../store/actions/index'

const UsersManagement = (props) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.user.allUsers)
    const loading = useSelector(state => state.user.loading)

    useEffect(() => {
        dispatch(getAllUsersInformation())
    }, [dispatch])

    const renderTable = () => {
        return (
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            {/* <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((user) => (
                            <TableRow key={user._id}>
                                <TableCell>
                                    {user.email}
                                </TableCell>
                                {/* <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    return (
        <Fragment>
            <Typography type='h2' position='center' text='Users Management' />
            {(data === null || loading) ? <Loading /> : renderTable()}
        </Fragment>
    )
}

export default UsersManagement