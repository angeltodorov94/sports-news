import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import categories from '../../utils/navigations'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: '0',
        width: '100%'
    }
}))

const Categories = (props) => {
    const classes = useStyles()

    const renderCategories = categories.map(x => {
        return (
            <Grid item key={x} xs={true}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    component={RouterLink}
                    to={`/browse?category=${x.replace(' ', '-')}`}
                    disableElevation
                    size='large'
                >
                    {x}
                </Button>
            </Grid>
        )
    })

    return (
        <Grid container spacing={0}>
            <Grid item xs={true}>
                <Button
                    variant="contained"
                    color="primary"
                    size='large'
                    className={classes.button}
                    component={RouterLink}
                    to={`/browse`}
                    disableElevation
                >
                    All
                </Button>
            </Grid>
            {renderCategories}
        </Grid>
    )
}

export default Categories