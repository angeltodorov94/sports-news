import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    h2: {
        color: '#273c75',
    },
    h4: {
        color: '#273c75',
    },
    body: {
        whiteSpace: 'pre-wrap'
    }
})

const Types = (props) => {
    const classes = useStyles()

    switch (props.type) {
        case 'h2':
            return <Typography
                variant='h2'
                align={props.position}
                paragraph
                className={classes.h2}
            >
                {props.text ? props.text : props.children}
            </Typography>
        case 'h4':
            return <Typography
                variant='h4'
                align={props.position}
                paragraph
                className={classes.h2}
            >
                {props.text ? props.text : props.children}
            </Typography>
        case 'body':
            return <Typography
                variant='body1'
                paragraph
                align={props.position ? props.position : 'justify'}
                color='textPrimary' className={classes.body}
            >
                {props.text ? props.text : props.children}
            </Typography>
        case 'caption':
            return <Typography
                variant='caption'
                paragraph
                color='textSecondary'
            >
                {props.text ? props.text : props.children}
            </Typography>
        default:
            break
    }
}

export default Types