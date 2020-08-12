import React from 'react'
import styled from 'styled-components'

const Category = ({ text }) => {
    return (
        <Container>
            <p>{text}</p>
        </Container>
    )
}

const Container = styled.div`
    background-color: #273c75;
    padding: 10px 25px;

    p {
        margin: 0;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
    }
`

export default Category