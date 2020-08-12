import React, { Fragment } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '../../../../components/titles/Typography'
import ChangeEmail from './subComponents/ChangeEmail'
import ChangePassword from './subComponents/ChangePassword'
import DeleteAccount from './subComponents/DeleteAccount'

const Security = (props) => {
    return (
        <Fragment>
            <Typography type='h2' position='center' text='Security' />
            <Container maxWidth='sm'>
                <ChangeEmail />
                <ChangePassword />
                <DeleteAccount />
            </Container>
        </Fragment>
    )
}

export default Security