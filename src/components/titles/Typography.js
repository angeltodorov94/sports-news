import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        color: '#272121'
    },
    caption: {
        color: '#272121'
    },
    body: {
        whiteSpace: 'pre-wrap',
        color: '#272121'
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
                className={classes.header}
            >
                {props.text ? props.text : props.children}
            </Typography>
        case 'h4':
            return <Typography
                variant='h4'
                align={props.position}
                paragraph
                className={classes.header}
            >
                {props.text ? props.text : props.children}
            </Typography>
        case 'h6':
            return <Typography
                variant='h6'
                align={props.position}
                paragraph
                className={classes.header}
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
                color='textSecondary'
                align={props.position} className={classes.caption}
            >
                {props.text ? props.text : props.children}
            </Typography>
        default:
            break
    }
}

export default Types