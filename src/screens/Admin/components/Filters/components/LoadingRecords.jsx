import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const LoadingRecords = ({ loading, report, error }) => (
    <TableRow>
        <TableCell colSpan={2} />
        {
            !report && !loading && !error && <TableCell align="center" colSpan={2}>No records</TableCell>
        }
        {
            error && !loading && <TableCell align="center" colSpan={2}>Something went wrong</TableCell>
        }
        {
            loading && <TableCell align="center" colSpan={2}><CircularProgress /></TableCell>
        }
        <TableCell colSpan={2} />
    </TableRow>
)

export default LoadingRecords