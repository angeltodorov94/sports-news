import React, { Fragment } from 'react'
import Container from '@material-ui/core/Container'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Categories from '../components/categories/Categories'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '700px'
    },
}))

const PageLayout = (props) => {
    const classes = useStyles()

    return (
        <Fragment>
            <Header />
            <Categories />
            <Container maxWidth='md' className={classes.container}>
                {props.children}
            </Container>
            <Footer />
        </Fragment>
    )
}

export default PageLayout