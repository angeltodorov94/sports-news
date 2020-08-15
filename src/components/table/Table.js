import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper } from '@material-ui/core/'

const TableComponent = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {props.cols.map((x, i) => <TableCell key={i} align='center'>{x}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent