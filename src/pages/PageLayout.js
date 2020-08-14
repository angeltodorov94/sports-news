import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import Header from '../components/header/Header'
import Loading from '../components/loading/Loading'
import Footer from '../components/footer/Footer'
import Categories from '../components/categories/Categories'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        minHeight: '700px'
    },
}))

const PageLayout = (props) => {
    const classes = useStyles()
    const loading = useSelector(state => state.auth.loading)

    return <Fragment>
        <Header />
        <Categories />
        <Container maxWidth='md' className={classes.container}>
            {loading ? <Loading /> : props.children}
        </Container>
        <Footer />
    </Fragment>

}

export default PageLayout