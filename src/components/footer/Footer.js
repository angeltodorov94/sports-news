import React from 'react'
import { Box, Container } from '@material-ui/core'
import SocialMedia from './icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#272121',
        color: 'white',
        textAlign: 'center'
    },
}))

const Footer = (props) => {
    const classes = useStyles()

    return (
        <Box className={classes.root} py={4}>
            <Container maxWidth='md'>
                <SocialMedia />
                <small>© 2020 Angel Todorov All Rights Reserved</small>
            </Container>
        </Box>
    )
}

export default Footer