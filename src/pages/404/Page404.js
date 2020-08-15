import React from 'react'
import PageLayout from '../PageLayout'
import Box from '@material-ui/core/Box'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined'
import Typography from '../../components/titles/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: '256px',
        color: 'white'
    }
}))

const ErrorPage = (props) => {
    const classes = useStyles()

    return (
        <PageLayout>
            <Box textAlign='center'>
                <CancelOutlinedIcon className={classes.icon} />
            </Box>
            <Typography type='h4' position='center' text='Page Not Found!' />
        </PageLayout>
    )
}

export default ErrorPage