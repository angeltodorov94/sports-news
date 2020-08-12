import React from 'react'
import styled from 'styled-components'
import Facebook from './Facebook'
import YouTube from './YouTube'
import Instagram from './Instagram'
import Twitter from './Twitter'
import Snapchat from './Snapchat'

const SocialMedia = (props) => {
    return (
        <Container>
            <Facebook />
            <Instagram />
            <YouTube />
            <Twitter />
            <Snapchat />
        </Container>
    )
}

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
`

export default SocialMedia