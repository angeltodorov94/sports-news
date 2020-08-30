import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, Button } from '@material-ui/core'
import { categories } from '../../utils/navigations'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: '0',
        width: '100%',
        backgroundColor: '#e16428',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),

        '&:hover': {
            backgroundColor: '#272121'
        }
    }
}))

const Categories = (props) => {
    const classes = useStyles()

    const renderCategories = categories.map(x => {
        return (
            <Grid item key={x.value} xs={true}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    component={RouterLink}
                    to={`/articles?category=${x.value}`}
                    disableElevation
                    size='large'
                >
                    {x.name}
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
                    to={`/articles`}
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