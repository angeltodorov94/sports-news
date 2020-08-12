import React from 'react'
import styled from 'styled-components'

import Logo from './logo/Logo'
import User from './user/User'

const Header = (props) => {
    return (
        <Nav>
            <Logo />
            <User />
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #f5f6fa;
    height: 64px;
    border-bottom: 5px #273c75 solid;
`

export default Header