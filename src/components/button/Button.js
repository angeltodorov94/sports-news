import React from 'react'
import styled from 'styled-components'

const Button = ({ type, text, onClick }) => {
    return <ButtonStyled type={type ? type : 'button'} onClick={onClick}>{text}</ButtonStyled>
}

const ButtonStyled = styled.button`
    display: block;
    width: 50%;
    margin: 0 auto;
    padding: 10px 0;
    background-color: #273c75;
    color: white;
    font-weight: bold;
    font-size: 16px;
    font-family: inherit;
    text-transform: uppercase;
    border: none;
    border-radius: 100px;

    &:hover {
        background-color: #c23616;
        cursor: pointer;
    }

    &:focus {
        outline:none;
    }
`

export default Button