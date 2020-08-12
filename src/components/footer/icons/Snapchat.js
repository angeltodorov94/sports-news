import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnapchat } from '@fortawesome/free-brands-svg-icons'

const Snapchat = (props) => {
    return (
        <Container>
            <Link href="https://www.snapchat.com/"><FontAwesomeIcon icon={faSnapchat} size="2x" /></Link>
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
        color: yellow;
    }
`

export default Snapchat