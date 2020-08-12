import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const YouTube = (props) => {
    return (
        <Container>
            <Link href="https://www.instagram.com/"><FontAwesomeIcon icon={faYoutube} size="2x" /></Link>
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
        color: red;
    }
`

export default YouTube