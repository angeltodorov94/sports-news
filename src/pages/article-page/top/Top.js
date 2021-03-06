import React from 'react'
import Grid from '@material-ui/core/Grid'
import Category from './category/Category'
import SaveIcon from './saveIcon/SaveIcon'
import { useSelector } from 'react-redux'

const Top = ({ text }) => {
    const isAuth = useSelector(state => state.auth.id)

    return (
        <Grid container justify='space-between'>
            <Category text={text} />
            {isAuth ? <SaveIcon /> : null}
        </Grid>
    )
}

export default Top