import React from 'react'
import styled from 'styled-components'
import Category from './category/Category'
import SaveIcon from './saveIcon/SaveIcon'
import { useSelector } from 'react-redux'

const Top = ({ text }) => {
    const isAuth = useSelector(state => state.auth.token !== null)

    return (
        <Container>
            <Category text={text} />
            {isAuth === true ? <SaveIcon /> : null}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export default Top