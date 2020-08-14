import React, { Fragment } from 'react'
import { Container } from '@material-ui/core'
import Typography from '../../../../components/titles/Typography'
import Divider from '../../../../components/divider/Divider'
import ChangeEmail from './subComponents/ChangeEmail'
import ChangePassword from './subComponents/ChangePassword'
import DeleteAccount from './subComponents/DeleteAccount'

const Security = (props) => {
    return (
        <Fragment>
            <Typography type='h4' position='center' text='Security' />
            <Container maxWidth='sm'>
                <ChangeEmail />
                <Divider />
                <ChangePassword />
                <Divider />
                <DeleteAccount />
            </Container>
        </Fragment>
    )
}

export default Security