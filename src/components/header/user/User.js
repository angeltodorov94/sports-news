import React from 'react'
import ButtonLink from '../../buttons/ButtonLink'
import Box from '@material-ui/core/Box'
import { useSelector } from 'react-redux'

const RightSide = (props) => {
    const isAuth = useSelector(state => state.auth.id)
    const isAdmin = useSelector(state => state.auth.isAdmin)

    return (
        <Box>
            {isAdmin ? <ButtonLink to='/create-article' text='Create Article' /> : null}
            {!isAuth ? <ButtonLink to='/login' text='Login' /> : null}
            {!isAuth ? <ButtonLink to='/register' text='Register' /> : null}
            {isAuth ? <ButtonLink to='/profile' text='Profile' /> : null}
            {isAuth ? <ButtonLink to='/logout' text='Logout' /> : null}
        </Box >
    )
}

export default RightSide