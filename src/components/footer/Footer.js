import React from 'react'
import styled from 'styled-components'
import SocialMedia from './icons'

const Footer = (props) => {
    return (
        <Container>
            <SocialMedia />
            <hr />
            <p>© 2020 Angel Todorov All Rights Reserved</p>
        </Container>
    )
}

const Container = styled.footer`
    background-color: #f5f6fa;
    color: #273c75;
    padding: 25px 0;
    border-top: 5px #273c75 solid;

    hr {
        opacity: 50%;
        border: 1px solid silver;
        margin: 25px auto;
        width: 60%;
    }

    p {
        text-align:center;
        font-size: 12px;
        margin: 0;
    }
`

export default Footer