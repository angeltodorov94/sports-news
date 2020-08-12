import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Twitter = (props) => {
    return (
        <Container>
            <Link href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} size="2x" /></Link>
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
        color: #1DA1F2;
    }
`

export default Twitter