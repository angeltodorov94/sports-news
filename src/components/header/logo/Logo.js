import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = (props) => {
    return <StyledLink to='/'>SportsNews</StyledLink>
}

const StyledLink = styled(Link)`
    line-height: 64px;
    text-decoration: none;
    font-weight: bold;
    font-size: 32px;
    color: #273c75;
    margin: 0;
    @media (min-width: 992px) {
        margin: 0 0 0 32px;
    }
`

export default Logo