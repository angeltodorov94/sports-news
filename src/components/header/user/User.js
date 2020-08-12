import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RightSide = (props) => {
    const isAuth = useSelector(state => state.auth.token) !== null
    const isAdmin = useSelector(state => state.auth.isAdmin)

    return (
        <Container>
            {isAdmin ? <LinkStyled to='/create-article'>Create Article</LinkStyled> : null}
            {!isAuth ? <LinkStyled to='/login'>Login</LinkStyled> : null}
            {!isAuth ? <LinkStyled to='/register'>Register</LinkStyled> : null}
            {isAuth ? <LinkStyled to='/profile'>Profile</LinkStyled> : null}
            {isAuth ? <LinkStyled to='/logout'>Logout</LinkStyled> : null}
        </Container>
    )
}

const Container = styled.div`
    display: none;
    height: 100%;
    margin: 0 32px 0 0;

    @media (min-width: 992px) {
        display: initial;
    }
`

const LinkStyled = styled(Link)`
    margin-left: 16px;
    line-height: 64px;
    color: #273c75;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;

    &:hover {
        color: #c23616;
    }
`

export default RightSide