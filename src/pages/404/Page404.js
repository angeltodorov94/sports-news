import React from 'react'
import PageLayout from '../PageLayout'
import Box from '@material-ui/core/Box'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined'
import Typography from '../../components/typography/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: '256px',
        color: '#272121'
    }
}))

const ErrorPage = (props) => {
    const classes = useStyles()
    document.title = 'Sports News | Page Not Found'

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