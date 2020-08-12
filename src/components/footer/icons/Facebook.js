import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Facebook = (props) => {
    return (
        <Container>
            <Link href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" /></Link>
        </Container>
    )
}

const Container = styled.div`
    width: 20%;
`

const Link = styled.a`
    color: #273c75;
    margin: 0 auto;

    &:hover {
        color: #0C88EF;
    }
`

export default Facebook